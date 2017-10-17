const noInfoPackage = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<version>40.0</version>
</Package>`;

const oneItemPackage = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>ExampleObject1__c</members>
\t\t<name>CustomObject</name>
\t</types>
\t<version>40.0</version>
</Package>`;

const multipleNewUpdatePackage = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>ExampleObject1__c</members>
\t\t<members>ExampleObject2__c</members>
\t\t<name>CustomObject</name>
\t</types>
\t<types>
\t\t<members>ExampleFlow1-1</members>
\t\t<name>Flow</name>
\t</types>
\t<types>
\t\t<members>ExampleObject1__c.ExampleField1__c</members>
\t\t<name>CustomField</name>
\t</types>
\t<version>40.0</version>
</Package>`;

const multipleFlowPackage = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>ExampleFlow1-5</members>
\t\t<members>ExampleFlow2-8</members>
\t\t<members>ExampleFlow3-12</members>
\t\t<name>Flow</name>
\t</types>
\t<version>40.0</version>
</Package>`;

const multipleDeploymentStepsPackage = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
\t<types>
\t\t<members>ExampleObject1__c</members>
\t\t<members>ExampleObject2__c</members>
\t\t<name>CustomObject</name>
\t</types>
\t<types>
\t\t<members>ExampleFlow1-3</members>
\t\t<name>Flow</name>
\t</types>
\t<types>
\t\t<members>ExampleObject1__c.ExampleField1__c</members>
\t\t<members>ExampleObject2__c.ExampleField2__c</members>
\t\t<name>CustomField</name>
\t</types>
\t<version>40.0</version>
</Package>`;

module.exports = {
  noInfoPackage,
  oneItemPackage,
  multipleNewUpdatePackage,
  multipleFlowPackage,
  multipleDeploymentStepsPackage
};
