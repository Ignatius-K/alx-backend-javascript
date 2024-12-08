/*
 * @module 0-calcul
 * Defines the arithmetic methods
 * @exports calculateNumber
 */

/**
 * calculates sum of two numbers
 * @param {number) a - The first number
 * @param {number} b - The second number
 *
 * @returns {number} The sum
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber
