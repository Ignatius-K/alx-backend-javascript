/**
 * @module 1-calcul.test
 *
 * Defines the tests for the '1-calcul' module
 */

const assert = require('assert')

const calculateNumber = require('./1-calcul')

describe('calculateNumber', function () {
  describe('Test arguments', function () {
    it('Test that error raised if args not provided', function () {
      assert.throws(function () {
        calculateNumber()
      })
    })

    it('Test that exception is raised if `type` arg is not string', function () {
      assert.throws(function () {
        calculateNumber(2, 2, 2)
      })
    })

    it('Test that if `type` arg is string, no exception is thrown', function () {
      assert.doesNotThrow(function () {
        calculateNumber('SUM', 1, 2)
      }, 'Wrong argument type provided')
    })

    it('Test that wrong type throws an exception', function () {
      const known_types = ['SUM', 'SUBTRACT', 'DIVIDE']
      known_types.forEach(type => {
        assert.throws(function () {
          calculateNumber(`${type}_`, 1, 2)
        })
        assert.doesNotThrow(function () {
          calculateNumber(`${type}`, 1, 2)
        })
      })
    })
  })

  describe('Test sum operation', function () {
    const SUM_OPERATION = 'SUM'
    it('Test sum operation returns result', function () {
      const result = calculateNumber(SUM_OPERATION, 1, 2)
      assert.notEqual(result, undefined)
    })
    
    it('Test sum operation perform sum arithmetic', function () {
      const result = calculateNumber(SUM_OPERATION, 1, 2)
      assert.equal(result, 3)
    })

    it('Test sum operation rounds off the args before operation', function () {
      const testCases = [
        // [ arg1, arg2, expected ]
        [1, 2, 3],
        [1.2, 2.3, 3],
        [1.49999999, 2.49999999, 3],
      ]
      testCases.forEach(testCase => {
        assert.equal(calculateNumber(SUM_OPERATION, testCase[0], testCase[1]), testCase[2])
        assert.strictEqual(calculateNumber(SUM_OPERATION, testCase[0], testCase[1]), testCase[2])
      })
    })
  })

  describe('Test subtract operation', function () {
    const SUB_OPERATION = 'SUBTRACT'
    it('Test subtract operation returns value', function () {
      const result = calculateNumber(SUB_OPERATION, 3, 2)
      assert.notEqual(result, undefined)
    })

    it('Test that subtract operation args are rounded', function () {
      const testCases = [
        [2, 1, 1], [2.5, 1.6, 1], [2.5, 1.2, 2], [1.2, 0.7, 0]
      ]
      testCases.forEach(testCase => {
        assert.equal(calculateNumber(SUB_OPERATION, testCase[0], testCase[1]), testCase[2])
        assert.strictEqual(calculateNumber(SUB_OPERATION, testCase[0], testCase[1]), testCase[2])
      })
    })

  })

  describe('Test divide operation', function () {
    const DIVIDE_OPERATION = 'DIVIDE'
    it('Test divide operation returns value', function () {
      const result = calculateNumber(DIVIDE_OPERATION, 3, 2)
      assert.notEqual(result, undefined)
    })

    it('Test that divide operation args are rounded', function () {
      const testCases = [
        [2, 1, 2], [2.5, 1.6, 1.5], [2.5, 1.2, 3], [1.2, 1.5, 0.5]
      ]
      testCases.forEach(testCase => {
        assert.equal(calculateNumber(DIVIDE_OPERATION, testCase[0], testCase[1]), testCase[2])
        assert.strictEqual(calculateNumber(DIVIDE_OPERATION, testCase[0], testCase[1]), testCase[2])
      })
    })

    it('Test that in divide operation if last arg rounds to 0, then `Error` returned', function () {
      const testCases = [
        [2, 0.5, 2], [2, 0.4, 'Error']
      ]
      testCases.forEach(testCase => {
        assert.equal(calculateNumber(DIVIDE_OPERATION, testCase[0], testCase[1]), testCase[2])
        assert.strictEqual(calculateNumber(DIVIDE_OPERATION, testCase[0], testCase[1]), testCase[2])
      })
    })
  })
})
