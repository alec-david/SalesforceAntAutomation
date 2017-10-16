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

module.exports = {
  noInfoPackage,
  package1,
  flowPackage1,
  combinedPackage1and2,
  flowPackage1and2,
  package1WithFlowPackage1,
  masterCombinedPackage
};
