/**
 * main.ts
 * 
 * Module define the `Teacher` interface
 */

interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[key: string]: any
}


interface Directors extends Teacher {
	numberOfReports: number
}


interface printTeacherFunction {
	(firstName:string, lastName:string): string,
}

const printTeacher: printTeacherFunction = function(firstName, lastName) {
	return `${firstName.charAt(0)}. ${lastName}`
}


interface IStudentClass {
	firstName: string,
	lastName: string,
	workOnHomework(): string,
	displayName(): string
}

interface StudentClassCtor {
	new (firstName: string, lastName: string): IStudentClass
}

class StudentClass implements IStudentClass {
	firstName: string
	lastName: string

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName
		this.lastName = lastName
	}

	workOnHomework(): string {
		return "Currently working"
	}

	displayName(): string {
		return this.firstName
	}
}

function createStudent(ctor: StudentClassCtor, firstName: string, lastName: string): StudentClass {
	return new ctor(firstName, lastName)
}
