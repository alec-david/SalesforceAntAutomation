const sheetId = '1qFK10SNpdiIqAVqxudhBOC7MwZ0OXqigmBWlAne8OO8';
const sheetTabName = 'Sheet1';

const startColumn = 'A';
const endColumn = 'K';
const startRow = '2';

//Column numbers, A = 0, B = 1, etc
const categoryColumn = 2;
const objectNameColumn = 3;
const apiNameColumn = 5;
const typeColumn = 6;
const statusColumn = 7;
const manualStepColumn = 9;
const stepNotesColumn = 10;

`
https://docs.google.com/spreadsheets/d/165exjnrm4-fevJDbsyTDa2psUhBD6DvnwJpeglzupTM/edit#gid=0

         (0)           (1)           (2)         (3)          (4)           (5)             (6)                (7)
__________A_____________B_____________C___________D____________E_____________F_______________G__________________H_________
|   |            |             |             |          |             |             |                 |                   |
| 1 | User Story |  Category   | Object Name | API Name | Object Type |   Status    |   Manual Step?  | Manual Step Notes |
|___|____________|_____________|_____________|__________|_____________|_____________|_________________|___________________|
| 2 |     7      |     New     |    Case     |  abc__c  | CustomField | Complete    |        No       |                   |
|---|------------|-------------|-------------|----------|-------------|-------------|-----------------|-------------------|
| 3 |     8      |    Update   |             |  flow-42 | Flow        | WIP         |    Post-Step    | Activate new flow |
|---|------------|-------------|-------------|----------|-------------|-------------|-----------------|-------------------|
| 4 |     5      |    Delete   |   Account   |  layout1 | Layout      | Deployed    |    Pre-Step     | Delete layout1    |
|---|------------|-------------|-------------|----------|-------------|-------------|-----------------|-------------------|
| 5 |     4      |     New     |   Account   | accList1 | ListView    | Not Started |        No       |                   |
|---|------------|-------------|-------------|----------|-------------|-------------|-----------------|-------------------|
| 6 |            |             |             |          | Report      |             |        No       |                   |
|---|------------|-------------|-------------|----------|-------------|-------------|-----------------|-------------------|
| 7 |            |             |             |          |             |             |                 |                   |
|---|------------|-------------|-------------|----------|-------------|-------------|-----------------|-------------------|
| Sprint 1 | Sprint 2 | Sprint 3 (selected) |                                                                             |
|-------------------------------------------------------------------------------------------------------------------------|

For this example the values would be:

const sheetId = '165exjnrm4-fevJDbsyTDa2psUhBD6DvnwJpeglzupTM';
const sheetTabName = 'Sprint 3';

const startColumn = 'A';
const endColumn = 'H';
const startRow = '2';

const categoryColumn = 1;
const objectNameColumn = 2;
const apiNameColumn = 3;
const typeColumn = 4;
const statusColumn = 5;
const manualStepColumn = 6;
const stepNotesColumn = 7;
`;

const sheetInfo = {
  sheetId,
  sheetTabName,
  startColumn,
  endColumn,
  startRow,
  categoryColumn,
  objectNameColumn,
  apiNameColumn,
  typeColumn,
  statusColumn,
  manualStepColumn,
  stepNotesColumn
};

if (invalidConstants()) {
  console.error(
    'The values in sheetInfo.js have not been filled in correctly. Please make sure all constants have valid values before proceeding. See the example in sheetInfo.js if unsure what to set the value to.'
  );
  module.exports = '';
} else {
  module.exports = sheetInfo;
}

function invalidConstants() {
  return (
    !sheetId ||
    !sheetTabName ||
    !startColumn ||
    !endColumn ||
    !startRow ||
    objectNameColumn === -1 ||
    apiNameColumn === -1 ||
    typeColumn === -1 ||
    statusColumn === -1
  );
}
