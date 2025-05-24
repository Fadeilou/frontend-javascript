/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js'; // This will look for crud.js and its types

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`newRowID: ${newRowID}`); // For verification

const updatedRow: RowElement = {
  ...row, // Spread existing properties
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// Expected console output from crud.js:
// Insert row {firstName: "Guillaume", lastName: "Salva"}
// Update row <newRowID> {firstName: "Guillaume", lastName: "Salva", age: 23}
// Delete row id <newRowID>

export {};
