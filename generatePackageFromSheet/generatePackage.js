const fs = require('fs');
const readline = require('readline');
const google = require('googleapis');
const googleAuth = require('google-auth-library');
const info = require('./sheetInfo');

if (!info) {
  return;
}

const {
  sheetId,
  sheetTabName,
  startColumn,
  endColumn,
  startRow,
  categoryColumn,
  objectNameColumn,
  apiNameColumn,
  typeColumn,
  statusColumn,
  manualStepColumn,
  stepNotesColumn
} = info;

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/sheets.googleapis.com-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
var TOKEN_DIR =
  (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) +
  '/.credentials/';
var TOKEN_PATH =
  TOKEN_DIR + 'sheets.googleapis.com-nodejs-generatepackage.json';

// Load client secrets from a local file.
fs.readFile('client_secret.json', (err, content) => {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Google Sheets API.
  authorize(JSON.parse(content), getPackageData);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Get the Salesforce push log
 * VIEWSCLL: https://docs.google.com/spreadsheets/d/165exjnrm4-fevJDbsyTDa2pAnWuD6DvnwJpeglzupTM/edit
 * CaseMail: https://docs.google.com/spreadsheets/d/1SXUu-sPCZHF5PxUTgO5d2G--vjSN0phvWVvRXfZDBj4/edit
 */
function getPackageData(auth) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.get(
    {
      auth: auth,
      spreadsheetId: sheetId,
      range: sheetTabName + '!' + startColumn + startRow + ':' + endColumn
    },
    (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      var rows = response.values;
      if (rows.length == 0) {
        console.log('No data found.');
      } else {
        let map = mapDataToValues(rows);
        let packageTypes = generatePackageXml(map);
        fs.writeFile(__dirname + '/package.xml', packageTypes, err => {
          if (err) {
            console.log(err);
          }
        });
      }
    }
  );
}

function mapDataToValues(data) {
  let map = new Map();
  for (var i = 0; i < data.length; i++) {
    let row = data[i];

    let category = row[categoryColumn];
    let objName = row[objectNameColumn];
    let apiName = row[apiNameColumn];
    let type = row[typeColumn];
    let status = row[statusColumn];

    if (status === 'Completed' && category !== 'Deleted' && type && apiName) {
      if (!map.get(type)) {
        map.set(type, assignPrefix(type, objName) + apiName.trim());
      } else {
        map.set(
          type,
          map.get(type) + ',' + assignPrefix(type, objName) + apiName.trim()
        );
      }
    }
  }
  return map;
}

function generatePackageXml(map) {
  let packageTypes =
    '<?xml version="1.0" encoding="UTF-8"?>\n<Package xmlns="http://soap.sforce.com/2006/04/metadata">\n';
  map.forEach((val, key) => {
    packageTypes += '\t<types>\n';
    val.split(',').forEach(member => {
      packageTypes += '\t\t<members>' + member + '</members>\n';
    });
    packageTypes += '\t\t<name>' + key + '</name>\n';
    packageTypes += '\t</types>\n';
  });
  packageTypes += '\t<version>40.0</version>\n</Package>';
  return packageTypes;
}

function assignPrefix(key, obj) {
  if (
    key === 'CustomField' ||
    key === 'ListView' ||
    key === 'RecordType' ||
    key === 'ValidationRule' ||
    key === 'SharingCriteriaRule' ||
    key === 'WebLink' ||
    key.includes('Workflow')
  ) {
    return obj + '.';
  }
  if (key.includes('Layout')) {
    return obj + '-';
  }
  return '';
}
