// Import types for use in declarations
import { RowID, RowElement } from './interface';

// These declarations would augment the global scope or a specific module
// If 'crud.js' is meant to be imported directly, a module declaration is better.
// However, the prompt's wording about "triple slash directive that includes all dependencies"
// can sometimes point to older patterns.
// Let's assume crud.js is an ES module and the .d.ts describes it.
// The triple-slash reference path in main.ts will point to this file.

// This is a module declaration file, it will be a module itself.
declare module 'crud' { // A conventional module name, map in tsconfig if needed
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}
// And in main.ts, import would be from 'crud'
// OR, if it's meant to type the exact file path:
// declare module './crud.js' { ... }

// Given "Import everything from crud.js as CRUD", the .d.ts must describe './crud.js'.
// So the `declare module './crud.js'` is most accurate.
// The triple slash directive might be for TS to explicitly find this .d.ts file.
