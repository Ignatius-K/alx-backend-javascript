// type MajorCredits = {
// 	credits: number
// } & { readonly __brand: unique symbol }

// type MinorCredits = {
// 	credits: number
// } & { readonly __brand: unique symbol }


interface MajorCredits {
	credits: number,
	readonly __brand: "major"
}

interface MinorCredits {
	credits: number,
	readonly __brand: "minor"
}

interface SumCredits<T> {
	(...subjects: T[]): T
}

/**
 * Sums up the major credits of given subjects
 */
const sumMajorCredits: SumCredits<MajorCredits> = function(subject1, subject2) {
	return {
		credits: subject1.credits + subject2.credits
	} as MajorCredits
}


/**
 * Sums up minor credits
 */
const sumMinorCredits: SumCredits<MinorCredits> = function(subject1, subject2) {
	return {
		credits: subject1.credits + subject2.credits
	} as MinorCredits
}
