const generatePackge = require('./generatePackage');
let loadSheetInfo = generatePackge.loadClientSecrets;

if (loadSheetInfo) {
  loadSheetInfo();
}
