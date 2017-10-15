const os = require('os');
const fs = require('fs');
const readline = require('readline');
const google = require('googleapis');
const googleAuth = require('google-auth-library');

const info = require('./sheetInfo');
const metadataTypes = require('./constants');

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
      generatePackageAndSteps(response.values);
    }
  );
}

function generatePackageAndSteps(rows) {
  if (rows.length == 0) {
    console.log('No data found.');
  } else {
    let packageInfo = mapDataToValues(rows);
    filterOldFlowVersions(packageInfo.map);
    let packageTypes = generatePackageXml(packageInfo.map);
    writePackageXML(packageTypes);
    writeDeploymentSteps(packageInfo.preSteps, packageInfo.postSteps);
  }
}

function mapDataToValues(data) {
  let map = new Map();
  let packageInfo = {
    map,
    preSteps: 'Pre-Steps:' + os.EOL,
    postSteps: 'Post-Steps:' + os.EOL
  };

  for (var i = 0; i < data.length; i++) {
    let row = createRowObject(data[i]);

    if (validEntry(row)) {
      addRowToPackage(row, map);
    }

    if (row.manualStep === 'Pre-Step') {
      packageInfo.preSteps += '\t- ' + row.stepNotes + os.EOL;
    } else if (row.manualStep === 'Post-Step') {
      packageInfo.postSteps += '\t- ' + row.stepNotes + os.EOL;
    }
  }
  return packageInfo;
}

function createRowObject(row) {
  let rowObj = {
    category: row[categoryColumn],
    objName: row[objectNameColumn],
    apiName: row[apiNameColumn],
    type: row[typeColumn],
    status: row[statusColumn],
    manualStep: row[manualStepColumn],
    stepNotes: row[stepNotesColumn]
  };
  return rowObj;
}

function validEntry(row) {
  return (
    row.category !== 'Delete' &&
    row.status === 'Completed' &&
    row.type &&
    row.apiName &&
    metadataTypes.has(row.type)
  );
}

function addRowToPackage(row, map) {
  if (!map.get(row.type)) {
    map.set(row.type, assignPrefix(row.type, row.objName) + row.apiName.trim());
  } else {
    map.set(
      row.type,
      map.get(row.type) +
        ',' +
        assignPrefix(row.type, row.objName) +
        row.apiName.trim()
    );
  }
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

function filterOldFlowVersions(map) {
  let flows = map.get('Flow');
  if (flows.length < 2) {
    return;
  }
  let flowArr = flows.split(',');
  let flowMap = generateFilteredFlowMap(flowArr);
  let updatedFlows = generateFilteredFlowString(flowMap);
  map.set('Flow', updatedFlows);
  return map;
}

function generateFilteredFlowMap(flows) {
  let flowMap = new Map();
  flows.forEach(flow => {
    let currentFlow = flow.substr(0, flow.indexOf('-'));
    let versionNumber = parseInt(flow.substr(flow.indexOf('-') + 1));
    if (!flowMap.has(currentFlow) || flowMap.get(currentFlow) < versionNumber) {
      flowMap.set(currentFlow, versionNumber);
    }
  });
  return flowMap;
}

function generateFilteredFlowString(flowMap) {
  let updatedFlows = '';
  for (var [key, value] of flowMap) {
    updatedFlows += key + '-' + value + ',';
  }
  updatedFlows = updatedFlows.slice(0, -1);
  return updatedFlows;
}

function writePackageXML(package) {
  let dir = './generatedPackage';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFile(__dirname + '/generatedPackage/package.xml', package, err => {
    if (err) {
      console.log(err);
    }
  });
}

function writeDeploymentSteps(pre, post) {
  let deploymentSteps;
  if (pre.length < 15 && post.length < 16) {
    return;
  } else if (pre.length >= 15 && post.length < 16) {
    deploymentSteps = pre;
  } else if (post.length >= 16 && pre.length < 15) {
    deploymentSteps = post;
  } else {
    deploymentSteps = pre + os.EOL + os.EOL + post;
  }
  fs.writeFile(
    __dirname + '/generatedPackage/deploymentSteps.txt',
    deploymentSteps,
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

/*
Functions generated from Google's start guide:
Should not need to modify these.

You may need to update the client_secret.json if named something else
Also may need to update the TOKEN_PATH if using mutliple google accounts to use this
*/

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/sheets.googleapis.com-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
var TOKEN_DIR =
  (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) +
  '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json';

// Load client secrets from a local file.
fs.readFile('client_secret_mine.json', (err, content) => {
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
