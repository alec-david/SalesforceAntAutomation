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

module.exports = {
  noInfoPackage,
  oneItemPackage
};
