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
    assert(mockPackages.noInfoPackage, arr[0]);
    assert(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
});

describe('Given sheet with 1 row of data', () => {
  it('1 new customObject, should be added to package', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneNew);
    assert(mockPackages.oneItemPackage, arr[0]);
    assert(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('1 updated customObject, should be added to package', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneUpdate);
    assert(mockPackages.oneItemPackage, arr[0]);
    assert(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('1 deleted customObject, should not be added to package', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneDelete);
    assert(mockPackages.noInfoPackage, arr[0]);
    assert(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('1 new row with pre-step, should be added to package and pre-step added', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneNewWithPreStep);
    assert(mockPackages.oneItemPackage, arr[0]);
    assert(mockDeploymentSteps.onePreDeploymentStep, arr[1]);
  });
  it('1 new row with post-step, should be added to package and post-step added', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneNewWithPostStep);
    assert(mockPackages.oneItemPackage, arr[0]);
    assert(mockDeploymentSteps.onePostDeploymentStep, arr[1]);
  });
  it('1 new row with invalid type, should return empty package', () => {
    let arr = generateFromMock(mockSheets.mockSheetOneNewInvalidType);
    assert(mockPackages.noInfoPackage, arr[0]);
    assert(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
  it('1 new row with invalid type and deployment step, should return empty package and no deployment steps', () => {
    let arr = generateFromMock(
      mockSheets.mockSheetOneNewInvalidTypeWithPreStep
    );
    assert(mockPackages.noInfoPackage, arr[0]);
    assert(mockDeploymentSteps.blankDeploymentSteps, arr[1]);
  });
});

describe('Given sheet with multiple rows of data', () => {
  it('Multiple rows of valid new data, should return expected package', () => {});
  it('Multiple rows of valid update data, should return expected package', () => {});
  it('Multiple rows of valid delete data, should return blank package', () => {});
  it('Multiple rows of valid new, update, and delete data, should return expected package with no delete rows', () => {});
  it('Multiple rows of valid new data, should return expected package', () => {});
  it('Multiple rows of different versions of flow, should return most recent version of each flow', () => {});
  it('Multiple rows of valid data with several pre deployment steps, should return expected package with pre deployment steps', () => {});
  it('Multiple rows of valid data with several post deployment steps, should return expected package with post deployment steps', () => {});
  it('Multiple rows of valid data with several pre and post deployment steps, should return expected package with pre and post deployment steps', () => {});
  it('Multiple rows of data with invalid steps, should return empty package', () => {});
  it('Multiple rows of data with invalid steps and pre/post deployment steps, should return empty package with no deployment steps', () => {});
  it('Multiple rows of valid/invalid data, should return expected package', () => {});
  it('Multiple rows of valid/invalid data with pre/post deployment steps, should return expected package and deployment steps', () => {});
});
