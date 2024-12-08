/*
 * @module 2-calcul_chai
 * Defines the arithmetic methods
 * @exports calculateNumber
 */

/**
 * calculates sum of two numbers
 * @param {string} type - The type of operation 
 * @param {number} a - The first number
 * @param {number} b - The second number
 *
 * @returns {number | string} The result
 */
function calculateNumber(type, a, b) {
  if (type === undefined || a === undefined || b === undefined) {
    throw new Error('Arguments not provided')
  }

  if (
    typeof type !== 'string' ||
    typeof a !== 'number' ||
    typeof b !== 'number'
  ) {
    throw new Error('Wrong argument type provided')
  }

  const known_types = ['SUM', 'SUBTRACT', 'DIVIDE']
  if (!known_types.includes(type)) {
    throw new Error('Operation type not known')
  }

  const operations = {
    SUM: (x, y) => x + y,
    SUBTRACT: (x, y) => x - y,
    DIVIDE: (x, y) => y > 0 ? x / y : 'Error'
  }

  let x = Math.round(a), y = Math.round(b);
  return operations[type](x, y)
}

module.exports = calculateNumber
