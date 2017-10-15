let fs = require('fs');
let xml2js = require('xml2js');

let packagesDirectory = __dirname + '/packages';

let map = new Map();
iterateOverPackages();

function iterateOverPackages() {
  let files = fs.readdirSync(packagesDirectory);
  files.forEach(file => {
    readXML(packagesDirectory + '/' + file);
  });
  filterOldFlowVersions();
  let packageXML = generatePackageXml();
  fs.writeFile(__dirname + '/combinedPackage.xml', packageXML, err => {
    if (err) {
      console.log(err);
    }
  });
}

function readXML(fileName) {
  let parser = new xml2js.Parser();
  let data = fs.readFileSync(fileName);
  parser.parseString(data, (err, result) => {
    if (err) {
      console.log('Error parsing xml file: ' + err);
      return;
    }
    iterateOverXMLObjects(result);
  });
}

function iterateOverXMLObjects(data) {
  let objArr = data.Package.types;
  objArr.forEach(type => {
    setMapValues(type);
  });
}

function setMapValues(type) {
  let name = type.name[0];
  let members = type.members;
  if (map.get(name)) {
    let existingMembers = addMemberToExistingType(name, members);
    map.set(name, existingMembers);
  } else {
    map.set(name, members);
  }
}

function addMemberToExistingType(name, members) {
  let existingMembers = map.get(name);
  members.forEach(member => {
    if (!(existingMembers.indexOf(member) > -1)) {
      existingMembers.push(member);
    }
  });
  return existingMembers;
}

function filterOldFlowVersions() {
  let flows = map.get('Flow');
  if (flows.length < 2) {
    return;
  }

  let flowMap = generateFilteredFlowMap(flows);
  let updatedFlows = generateFilteredFlowArray(flowMap);
  map.set('Flow', updatedFlows);
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

function generateFilteredFlowArray(flowMap) {
  let updatedFlows = [];
  for (var [key, value] of flowMap) {
    updatedFlows.push(key + '-' + value);
  }
  return updatedFlows;
}

function generatePackageXml() {
  let packageXML =
    '<?xml version="1.0" encoding="UTF-8"?>\n<Package xmlns="http://soap.sforce.com/2006/04/metadata">\n';
  map.forEach((val, key) => {
    packageXML += '\t<types>\n';
    val.forEach(member => {
      packageXML += '\t\t<members>' + member + '</members>\n';
    });
    packageXML += '\t\t<name>' + key + '</name>\n';
    packageXML += '\t</types>\n';
  });
  packageXML += '\t<version>40.0</version>\n</Package>';
  return packageXML;
}
