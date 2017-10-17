const os = require('os');

const blankDeploymentSteps = 'Pre-Steps:' + os.EOL + 'Post-Steps:' + os.EOL;

const onePreDeploymentStep =
  'Pre-Steps:' +
  os.EOL +
  '\t- Delete old object called ExampleObject1__c' +
  os.EOL +
  'Post-Steps:' +
  os.EOL;

const onePostDeploymentStep =
  'Pre-Steps:' +
  os.EOL +
  'Post-Steps:' +
  os.EOL +
  '\t- Check that flow abc references the new object' +
  os.EOL;

const multiplePreDeploymentSteps =
  'Pre-Steps:' +
  os.EOL +
  '\t- Test Pre Step 1' +
  os.EOL +
  '\t- Test Pre Step 2' +
  os.EOL +
  '\t- Test Pre Step 3' +
  os.EOL +
  'Post-Steps:' +
  os.EOL;

const multiplePostDeploymentSteps =
  'Pre-Steps:' +
  os.EOL +
  'Post-Steps:' +
  os.EOL +
  '\t- Test Post Step 1' +
  os.EOL +
  '\t- Test Post Step 2' +
  os.EOL +
  '\t- Test Post Step 3' +
  os.EOL;

const multiplePreAndPostDeploymentSteps =
  'Pre-Steps:' +
  os.EOL +
  '\t- Test Pre Step 1' +
  os.EOL +
  '\t- Test Pre Step 2' +
  os.EOL +
  '\t- Test Pre Step 3' +
  os.EOL +
  'Post-Steps:' +
  os.EOL +
  '\t- Test Post Step 1' +
  os.EOL +
  '\t- Test Post Step 2' +
  os.EOL +
  '\t- Test Post Step 3' +
  os.EOL;

module.exports = {
  blankDeploymentSteps,
  onePreDeploymentStep,
  onePostDeploymentStep,
  multiplePreDeploymentSteps,
  multiplePostDeploymentSteps,
  multiplePreAndPostDeploymentSteps
};
