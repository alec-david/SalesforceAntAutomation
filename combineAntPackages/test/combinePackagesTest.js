const chai = require('chai');
const assert = chai.assert;
const combinePackages = require('../combinePackages');

let combineTest = combinePackages.iterateOverPackagesTest;

describe('Given one package', () => {
  it('Blank xml file. Should return package structure with no info', () => {
    let packagesToTest = ['blankPackage1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(noInfoPackage, combinedPackage);
  });
  it('Package with no info. Should return package structure with no info', () => {
    let packagesToTest = ['packageWithNoInfo1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(noInfoPackage, combinedPackage);
  });
  it('Typical package. Should return identical package', () => {
    let packagesToTest = ['package1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(package1, combinedPackage);
  });
  it('Flow package with multiple versions of same flows, should return only latest version of each flow', () => {
    let packagesToTest = ['flowPackage1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(flowPackage1, combinedPackage);
  });
});

describe('Given two packages', () => {
  it('Two blank files. Should return package structure with no info', () => {
    let packagesToTest = ['blankPackage1.xml', 'blankPackage2.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(noInfoPackage, combinedPackage);
  });
  it('Two packages with no info. Should return package structure with no info', () => {
    let packagesToTest = ['packageWithNoInfo1.xml', 'packageWithNoInfo2.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(noInfoPackage, combinedPackage);
  });
  it('Blank file with package with no info. Should return package structure with no info', () => {
    let packagesToTest = ['blankPackage1.xml', 'packageWithNoInfo1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(noInfoPackage, combinedPackage);
  });
  it('Blank file with typical package. Should return typical package', () => {
    let packagesToTest = ['blankPackage1.xml', 'package1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(package1, combinedPackage);
  });
  it('package with no info with typical package. Should return typical package', () => {
    let packagesToTest = ['packageWithNoInfo1.xml', 'package1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(package1, combinedPackage);
  });
  it('Two typical packages. Should return combined packages', () => {
    let packagesToTest = ['package1.xml', 'package2.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(combinedPackage1and2, combinedPackage);
  });
  it('Typical package with typical flow package. Should return combined packages with flows filtered', () => {
    let packagesToTest = ['package1.xml', 'flowPackage1.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(package1WithFlowPackage1, combinedPackage);
  });
  it('Two flow packages. Should return combined packages with flows filtered', () => {
    let packagesToTest = ['flowPackage1.xml', 'flowPackage2.xml'];
    let combinedPackage = combineTest(packagesToTest);
    assert.equal(flowPackage1and2, combinedPackage);
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
    assert.equal(masterCombinedPackage, combinedPackage);
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
    assert.equal(masterCombinedPackage, combinedPackage);
  });
});

const noInfoPackage = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<version>40.0</version>
</Package>`;

const package1 = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>Example_Apex_Class1</members>
\t\t<members>Example_Apex_ClassTest1</members>
\t\t<members>Example_Apex_Class2</members>
\t\t<members>Example_Apex_ClassTest2</members>
\t\t<name>ApexClass</name>
\t</types>
\t<types>
\t\t<members>Example_VF_Component1</members>
\t\t<members>Example_VF_Component2</members>
\t\t<name>ApexComponent</name>
\t</types>
\t<types>
\t\t<members>Example_VF_Page1</members>
\t\t<members>Example_VF_Page2</members>
\t\t<name>ApexPage</name>
\t</types>
\t<version>40.0</version>
</Package>`;

const flowPackage1 = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>ExampleFlow1-8</members>
\t\t<members>ExampleFlow2-13</members>
\t\t<members>ExampleFlow3-42</members>
\t\t<name>Flow</name>
\t</types>
\t<version>40.0</version>
</Package>`;

const combinedPackage1and2 = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>Example_Apex_Class1</members>
\t\t<members>Example_Apex_ClassTest1</members>
\t\t<members>Example_Apex_Class2</members>
\t\t<members>Example_Apex_ClassTest2</members>
\t\t<members>Example_Apex_Class3</members>
\t\t<members>Example_Apex_ClassTest3</members>
\t\t<members>MockHttpResponseGenerator</members>
\t\t<members>Example_Apex_Class4</members>
\t\t<members>Example_Apex_ClassTest4</members>
\t\t<name>ApexClass</name>
\t</types>
\t<types>
\t\t<members>Example_VF_Component1</members>
\t\t<members>Example_VF_Component2</members>
\t\t<name>ApexComponent</name>
\t</types>
\t<types>
\t\t<members>Example_VF_Page1</members>
\t\t<members>Example_VF_Page2</members>
\t\t<name>ApexPage</name>
\t</types>
\t<types>
\t\t<members>Case.ExampleField1__c</members>
\t\t<members>Case.ExampleField2__c</members>
\t\t<members>Case.ExampleField3__c</members>
\t\t<members>Case.ExampleField4__c</members>
\t\t<members>Case.ExampleField5__c</members>
\t\t<name>CustomField</name>
\t</types>
\t<version>40.0</version>
</Package>`;

const flowPackage1and2 = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>ExampleFlow1-8</members>
\t\t<members>ExampleFlow2-23</members>
\t\t<members>ExampleFlow3-43</members>
\t\t<members>ExampleFlow4-9</members>
\t\t<members>ExampleFlow5-1</members>
\t\t<members>ExampleFlow6-2</members>
\t\t<name>Flow</name>
\t</types>
\t<version>40.0</version>
</Package>`;

const package1WithFlowPackage1 = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>ExampleFlow1-8</members>
\t\t<members>ExampleFlow2-13</members>
\t\t<members>ExampleFlow3-42</members>
\t\t<name>Flow</name>
\t</types>
\t<types>
\t\t<members>Example_Apex_Class1</members>
\t\t<members>Example_Apex_ClassTest1</members>
\t\t<members>Example_Apex_Class2</members>
\t\t<members>Example_Apex_ClassTest2</members>
\t\t<name>ApexClass</name>
\t</types>
\t<types>
\t\t<members>Example_VF_Component1</members>
\t\t<members>Example_VF_Component2</members>
\t\t<name>ApexComponent</name>
\t</types>
\t<types>
\t\t<members>Example_VF_Page1</members>
\t\t<members>Example_VF_Page2</members>
\t\t<name>ApexPage</name>
\t</types>
\t<version>40.0</version>
</Package>`;

const masterCombinedPackage = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>ExampleFlow1-8</members>
\t\t<members>ExampleFlow2-23</members>
\t\t<members>ExampleFlow3-43</members>
\t\t<members>ExampleFlow4-9</members>
\t\t<members>ExampleFlow5-1</members>
\t\t<members>ExampleFlow6-2</members>
\t\t<name>Flow</name>
\t</types>
\t<types>
\t\t<members>Example_Apex_Class1</members>
\t\t<members>Example_Apex_ClassTest1</members>
\t\t<members>Example_Apex_Class2</members>
\t\t<members>Example_Apex_ClassTest2</members>
\t\t<members>Example_Apex_Class3</members>
\t\t<members>Example_Apex_ClassTest3</members>
\t\t<members>MockHttpResponseGenerator</members>
\t\t<members>Example_Apex_Class4</members>
\t\t<members>Example_Apex_ClassTest4</members>
\t\t<name>ApexClass</name>
\t</types>
\t<types>
\t\t<members>Example_VF_Component1</members>
\t\t<members>Example_VF_Component2</members>
\t\t<name>ApexComponent</name>
\t</types>
\t<types>
\t\t<members>Example_VF_Page1</members>
\t\t<members>Example_VF_Page2</members>
\t\t<name>ApexPage</name>
\t</types>
\t<types>
\t\t<members>Case.ExampleField1__c</members>
\t\t<members>Case.ExampleField2__c</members>
\t\t<members>Case.ExampleField3__c</members>
\t\t<members>Case.ExampleField4__c</members>
\t\t<members>Case.ExampleField5__c</members>
\t\t<name>CustomField</name>
\t</types>
\t<version>40.0</version>
</Package>`;
