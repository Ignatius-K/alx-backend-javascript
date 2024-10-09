/**
 * main.ts
 *
 * Module defines `Student` interface
 */

interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const studentOne: Student = {
	firstName: "Tom",
	lastName: "John",
	age: 14,
	location: "Mubende"
}
const studentTwo: Student = {
	firstName: "Mary",
	lastName: "Jane",
	age: 16,
	location: "Nansana"
}

const students: Student[] = [studentOne, studentTwo]

function renderTable(): void {
	const table = <HTMLTableElement>document.createElement("table")
	for (const student of students) {
		const row = <HTMLTableRowElement>document.createElement("tr")

		const firstNameCell = <HTMLTableCellElement>document.createElement("td")
		firstNameCell.textContent = student.firstName
		row.appendChild(firstNameCell)

		const locationCell = document.createElement("td")
		locationCell.textContent = student.location
		row.appendChild(locationCell)

		table.appendChild(row)
	}
	document.body.appendChild(table)
}

renderTable()
