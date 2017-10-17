const chai = require('chai');
const assert = chai.assert;
const generatePackage = require('../generatePackage');

const mockSheets = require('./mockSheets');
const mockPackages = require('./mockPackages');
const mockDeploymentSteps = require('./mockDeploymentSteps');

let generateFromMock = generatePackage.generatePackageAndStepsTest;

describe('Given blank sheet', () => {
  it('Blank sheet, return empty package', () => {
    let arr = generateFromMock(mockSheets.mockBlankSheet);
    assert.equal(mockPackages.noInfoPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
});

describe('Given sheet with 1 row of data', () => {
  it('1 new customObject, should be added to package', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneNew);
    assert.equal(mockPackages.oneItemPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('1 updated customObject, should be added to package', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneUpdate);
    assert.equal(mockPackages.oneItemPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('1 deleted customObject, should not be added to package', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneDelete);
    assert.equal(mockPackages.noInfoPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('1 new row with pre-step, should be added to package and pre-step added', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneNewWithPreStep);
    assert.equal(mockPackages.oneItemPackage, arr[0]);
    assert.equal(mockDeploymentSteps.onePreDeploymentStep, arr[1]);
  });
  it('1 new row with post-step, should be added to package and post-step added', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneNewWithPostStep);
    assert.equal(mockPackages.oneItemPackage, arr[0]);
    assert.equal(mockDeploymentSteps.onePostDeploymentStep, arr[1]);
  });
  it('1 new row with invalid type, should return empty package', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneNewInvalidType);
    assert.equal(mockPackages.noInfoPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('1 new row with invalid type and deployment step, should return empty package and no deployment steps', () => {
    let arr = generateFromMock(
      mockSheets.mockSheetOneNewInvalidTypeWithPreStep
    );
    assert.equal(mockPackages.noInfoPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
});

describe('Given sheet with multiple rows of data', () => {
  it('Multiple rows of valid new and update data, should return expected package', () => {
    let arr = generateFromMock(mockSheets.mockSheetMultipleNewUpdate);
    assert.equal(mockPackages.multipleNewUpdatePackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('Multiple rows of valid delete data, should return blank package', () => {
    let arr = generateFromMock(mockSheets.mockSheetMultipleDelete);
    assert.equal(mockPackages.noInfoPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('Multiple rows of valid new, update, and delete data, should return expected package with no delete rows', () => {
    let arr = generateFromMock(mockSheets.mockSheetMultipleNewUpdateDelete);
    assert.equal(mockPackages.multipleNewUpdatePackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('Multiple rows of different versions of flow, should return most recent version of each flow', () => {
    let arr = generateFromMock(mockSheets.mockSheetMultipleFlow);
    assert.equal(mockPackages.multipleFlowPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('Multiple rows of valid data with several pre deployment steps, should return expected package with pre deployment steps', () => {
    let arr = generateFromMock(mockSheets.mockSheetMultiplePreSteps);
    assert.equal(mockPackages.multipleNewUpdatePackage, arr[0]);
    assert.equal(mockDeploymentSteps.multiplePreDeploymentSteps, arr[1]);
  });
  it('Multiple rows of valid data with several post deployment steps, should return expected package with post deployment steps', () => {
    let arr = generateFromMock(mockSheets.mockSheetMultiplePostSteps);
    assert.equal(mockPackages.multipleNewUpdatePackage, arr[0]);
    assert.equal(mockDeploymentSteps.multiplePostDeploymentSteps, arr[1]);
  });
  it('Multiple rows of valid data with several pre and post deployment steps, should return expected package with pre and post deployment steps', () => {
    let arr = generateFromMock(mockSheets.mockSheetMultiplePreAndPostSteps);
    assert.equal(mockPackages.multipleDeploymentStepsPackage, arr[0]);
    assert.equal(mockDeploymentSteps.multiplePreAndPostDeploymentSteps, arr[1]);
  });
  it('Multiple rows of data with invalid types, should return empty package', () => {
    let arr = generateFromMock(mockSheets.mockSheetMultipleInvalidTypes);
    assert.equal(mockPackages.noInfoPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('Multiple rows of data with invalid types and pre/post deployment steps, should return empty package with no deployment steps', () => {
    let arr = generateFromMock(
      mockSheets.mockSheetMultipleInvalidTypesWithDeploymentSteps
    );
    assert.equal(mockPackages.noInfoPackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('Multiple rows of valid/invalid data, should return expected package', () => {
    let arr = generateFromMock(
      mockSheets.mockSheetMultipleNewUpdateDeleteValidAndInvalid
    );
    assert.equal(mockPackages.multipleNewUpdatePackage, arr[0]);
    assert.equal(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('Multiple rows of valid/invalid data with pre/post deployment steps, should return expected package and deployment steps', () => {
    let arr = generateFromMock(
      mockSheets.mockSheetMultiplePreAndPostStepsValidAndInvalid
    );
    assert.equal(mockPackages.multipleDeploymentStepsPackage, arr[0]);
    assert.equal(mockDeploymentSteps.multiplePreAndPostDeploymentSteps, arr[1]);
  });
});
