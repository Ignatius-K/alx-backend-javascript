/**
 * @module main
 *
 * Module implements
 * 	- Teacher 
 * 	- Director
 * 	- createEmployee: factory function
 */


/**
 * @interface IBase
 * This defines common attrs shared by multiple roles
 */
interface IBase {

	/**
	 * Describes action of working from home
	 */
	workFromHome(): string,

	/**
	 * Describes action of getting coffee break
	 */
	getCoffeeBreak(): string,
}


/**
 * @interface IDirector
 * Defines specific attributes for director role
 */
interface IDirector extends IBase {

	/**
	 * Describes director tasks
	 */
	workDirectorTasks(): string
}


/**
 * @interface ITeacher 
 * Defines attributes specific to the teacher role
 */
interface ITeacher extends IBase {

	/**
	 * Describes teacher tasks
	 */
	workTeacherTasks(): string
}


/**
 * @class Director
 * Represent a Director with associated properties and methods
 */
class Director implements IDirector {
	workFromHome(): string {
		return "Working from home"
	}

	getCoffeeBreak(): string {
		return "Getting a coffee break"
	}

	workDirectorTasks(): string {
		return "Getting to director tasks"
	}
}

/**
 * @class Teacher
 * Represents Teacher with associated properties and mtds
 */
class Teacher implements ITeacher {
	getCoffeeBreak(): string {
		return "Cannot have a break"
	}

	workFromHome(): string {
		return "Cannot work from home"
	}

	workTeacherTasks(): string {
		return "Getting to work"
	}
}


type Salary = number | string
type Role = InstanceType<typeof Director> | InstanceType<typeof Teacher>

interface ICreateEmployee {
	(salary: Salary): Role 
}


/**
 * Creates an employee based on salary
 * @param salary - The salary of the employee
 */
const createEmployee: ICreateEmployee = function(salary) {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher()
	}
	return new Director()
}

/**
 * Defined type guard to check for director
 */
function isDirector(employee: Role): employee is Director {
	return employee instanceof Director
}


/**
 * Calls the tasks mtd on an employee
 * @param employee - The employee to act on
 */
function executeWork(employee: Role): void {
	if (isDirector(employee)) {
		employee.workDirectorTasks()
		return
	}
	employee.workTeacherTasks()
}

type Subjects = "Math" | "History"

/**
 * @param todayClass - The class of today
 */
function teachClass(todayClass: Subjects): string {
	return `Teaching ${todayClass}`
}
