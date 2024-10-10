// type MajorCredits = {
// 	credits: number
// } & { readonly __brand: unique symbol }

// type MinorCredits = {
// 	credits: number
// } & { readonly __brand: unique symbol }


interface MajorCredits {
	credits: number,
	__brand: "major"
}

interface MinorCredits {
	credits: number,
	__brand: "minor"
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

console.log(sumMajorCredits({ credits: 3 } as MajorCredits, { credits: 4 } as MajorCredits ))
console.log(sumMinorCredits({ credits: 3 } as MinorCredits, { credits: 4 } as MinorCredits ))
