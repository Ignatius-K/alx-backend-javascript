/**
 * Defines types, and interfaces
 */

export type RowID = number

/**
 * Defines the Row structure
 *
 * @param firstName - The first name
 * @param lastName - The last name
 * @param age - The age
 */
export interface RowElement {
	firstName: string,
	lastName: string,
	age?: number
}
