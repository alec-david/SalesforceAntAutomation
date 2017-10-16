const chai = require('chai');
const assert = chai.assert;
const combinePackages = require('../combinePackages');

const mockCombinedPackages = require('./mockCombinedPackages');

let combineTest = combinePackages.iterateOverPackagesTest;

describe('Given one package', () => {
  it('Blank xml file. Should return package structure with no info', () => {
    let packagesToTest = ['blankPackage1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.noInfoPackage, combinedPackage);
  });
  it('Package with no info. Should return package structure with no info', () => {
    let packagesToTest = ['packageWithNoInfo1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.noInfoPackage, combinedPackage);
  });
  it('Typical package. Should return identical package', () => {
    let packagesToTest = ['package1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.package1, combinedPackage);
  });
  it('Flow package with multiple versions of same flows, should return only latest version of each flow', () => {
    let packagesToTest = ['flowPackage1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.flowPackage1, combinedPackage);
  });
});

describe('Given two packages', () => {
  it('Two blank files. Should return package structure with no info', () => {
    let packagesToTest = ['blankPackage1.xml', 'blankPackage2.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.noInfoPackage, combinedPackage);
  });
  it('Two packages with no info. Should return package structure with no info', () => {
    let packagesToTest = ['packageWithNoInfo1.xml', 'packageWithNoInfo2.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.noInfoPackage, combinedPackage);
  });
  it('Blank file with package with no info. Should return package structure with no info', () => {
    let packagesToTest = ['blankPackage1.xml', 'packageWithNoInfo1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.noInfoPackage, combinedPackage);
  });
  it('Blank file with typical package. Should return typical package', () => {
    let packagesToTest = ['blankPackage1.xml', 'package1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.package1, combinedPackage);
  });
  it('package with no info with typical package. Should return typical package', () => {
    let packagesToTest = ['packageWithNoInfo1.xml', 'package1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.package1, combinedPackage);
  });
  it('Two typical packages. Should return combined packages', () => {
    let packagesToTest = ['package1.xml', 'package2.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.combinedPackage1and2, combinedPackage);
  });
  it('Typical package with typical flow package. Should return combined packages with flows filtered', () => {
    let packagesToTest = ['package1.xml', 'flowPackage1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(
      mockCombinedPackages.package1WithFlowPackage1,
      combinedPackage
    );
  });
  it('Two flow packages. Should return combined packages with flows filtered', () => {
    let packagesToTest = ['flowPackage1.xml', 'flowPackage2.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.flowPackage1and2, combinedPackage);
  });
});

describe('> 2 file combines', () => {
  it('Combines typical packages and flow packages', () => {
    let packagesToTest = [
      'package1.xml',
      'package2.xml',
      'flowPackage1.xml',
      'flowPackage2.xml'
    ];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.masterCombinedPackage, combinedPackage);
  });
  it('Combine all packages', () => {
    let packagesToTest = [
      'package1.xml',
      'package2.xml',
      'flowPackage1.xml',
      'flowPackage2.xml',
      'blankPackage1.xml',
      'blankPackage2.xml',
      'packageWithNoInfo1.xml',
      'packageWithNoInfo2.xml'
    ];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(mockCombinedPackages.masterCombinedPackage, combinedPackage);
  });
});
