const mockBlankSheet = [[]];

const mockSheetOneNew = [
  [
    'A-1',
    '1',
    'New',
    'ExampleObject1',
    'ExampleObject1',
    'ExampleObject1__c',
    'CustomObject',
    '',
    'Completed',
    'Alec',
    '',
    ''
  ]
];

const mockSheetOneUpdate = [
  [
    'A-1',
    '1',
    'Update',
    'ExampleObject1',
    'ExampleObject1',
    'ExampleObject1__c',
    'CustomObject',
    '',
    'Completed',
    'Alec',
    '',
    ''
  ]
];

const mockSheetOneDelete = [
  [
    'A-1',
    '1',
    'Delete',
    'ExampleObject1',
    'ExampleObject1',
    'ExampleObject1__c',
    'CustomObject',
    '',
    'Completed',
    'Alec',
    '',
    ''
  ]
];

const mockSheetOneNewWithPreStep = [
  [
    'A-1',
    '1',
    'New',
    'ExampleObject1',
    'ExampleObject1',
    'ExampleObject1__c',
    'CustomObject',
    '',
    'Completed',
    'Alec',
    'Pre-Step',
    'Delete old object called ExampleObject1__c'
  ]
];

const mockSheetOneNewWithPostStep = [
  [
    'A-1',
    '1',
    'New',
    'ExampleObject1',
    'ExampleObject1',
    'ExampleObject1__c',
    'CustomObject',
    '',
    'Completed',
    'Alec',
    'Post-Step',
    'Check that flow abc references the new object'
  ]
];

const mockSheetOneNewInvalidType = [
  [
    'A-1',
    '1',
    'New',
    'ExampleObject1',
    'ExampleObject1',
    'ExampleObject1__c',
    'CustomObjectzz',
    '',
    'Completed',
    'Alec',
    '',
    ''
  ]
];

const mockSheetOneNewInvalidTypeWithPreStep = [
  [
    'A-1',
    '1',
    'New',
    'ExampleObject1',
    'ExampleObject1',
    'ExampleObject1__c',
    'CustomObjectzz',
    '',
    'Completed',
    'Alec',
    'Pre-Step',
    'Should not see this'
  ]
];

module.exports = {
  mockBlankSheet,
  mockSheetOneNew,
  mockSheetOneUpdate,
  mockSheetOneDelete,
  mockSheetOneNewWithPreStep,
  mockSheetOneNewWithPostStep,
  mockSheetOneNewInvalidType,
  mockSheetOneNewInvalidTypeWithPreStep
};
