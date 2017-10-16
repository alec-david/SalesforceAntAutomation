const blankDeploymentSteps = `Pre-Steps:
Post-Steps:`;

const onePreDeploymentStep = `Pre-Steps:
\t-Delete old object called ExampleObject1__c
Post-Steps:`;

const onePostDeploymentStep = `Pre-Steps:
Post-Steps:
\t-Check that flow abc references the new object`;

module.exports = {
  blankDeploymentSteps,
  onePreDeploymentStep,
  onePostDeploymentStep
};
