import {RowID, RowElement} from "./interface"

/**
 * @namespace CRUD
 * Defines the type structure for `crud` library
 */
declare namespace CRUD {
	export function insertRow(row: RowElement): RowID
	export function deleteRow(rowId: RowID): void
	export function updateRow(rowId: RowID, row: RowElement): RowID
}

export = CRUD
