/**
 * @module 2-calcul_chai.test
 *
 * Defines the tests for the '2-calcul_chai' module
 */


const expect = require('chai').expect

const calculateNumber = require('./2-calcul_chai')

describe('calculateNumber', function () {
  describe('Test arguments', function () {
    it('Test that error raised if args not provided', function () {
      expect(calculateNumber).to.throw()
    })

    it('Test that exception is raised if `type` arg is not string', function () {
      expect(
        () => calculateNumber(2, 2, 2)
      ).to.throw()
    })

    it('Test that if `type` arg is string, no exception is thrown', function () {
      expect(
        () => {
          calculateNumber('SUM', 1, 2)
        }, 'Wrong argument type provided'
      ).to.not.throw()
    })

    it('Test that wrong type throws an exception', function () {
      const known_types = ['SUM', 'SUBTRACT', 'DIVIDE']
      known_types.forEach(type => {
        expect(
          () => calculateNumber(`${type}_`, 1, 2)
        ).to.throw()
        expect(
          () => calculateNumber(`${type}`, 1, 2)
        ).to.not.throw()
      })
    })
  })

  describe('Test sum operation', function () {
    const SUM_OPERATION = 'SUM'
    it('Test sum operation returns result', function () {
      const result = calculateNumber(SUM_OPERATION, 1, 2)
      expect(result).to.not.be.undefined
    })
    
    it('Test sum operation perform sum arithmetic', function () {
      const result = calculateNumber(SUM_OPERATION, 1, 2)
      expect(result).to.equal(3)
    })

    it('Test sum operation rounds off the args before operation', function () {
      const testCases = [
        // [ arg1, arg2, expected ]
        [1, 2, 3],
        [1.2, 2.3, 3],
        [1.49999999, 2.49999999, 3],
      ]
      testCases.forEach(testCase => {
        expect(calculateNumber(SUM_OPERATION, testCase[0], testCase[1])).to.equal(testCase[2])
      })
    })
  })

  describe('Test subtract operation', function () {
    const SUB_OPERATION = 'SUBTRACT'
    it('Test subtract operation returns value', function () {
      const result = calculateNumber(SUB_OPERATION, 3, 2)
      expect(result).to.not.be.undefined
    })

    it('Test that subtract operation args are rounded', function () {
      const testCases = [
        [2, 1, 1], [2.5, 1.6, 1], [2.5, 1.2, 2], [1.2, 0.7, 0]
      ]
      testCases.forEach(testCase => {
        expect(calculateNumber(SUB_OPERATION, testCase[0], testCase[1])).to.equal(testCase[2])
      })
    })

  })

  describe('Test divide operation', function () {
    const DIVIDE_OPERATION = 'DIVIDE'
    it('Test divide operation returns value', function () {
      const result = calculateNumber(DIVIDE_OPERATION, 3, 2)
      expect(result).to.not.be.undefined
    })

    it('Test that divide operation args are rounded', function () {
      const testCases = [
        [2, 1, 2], [2.5, 1.6, 1.5], [2.5, 1.2, 3], [1.2, 1.5, 0.5]
      ]
      testCases.forEach(testCase => {
        expect(calculateNumber(DIVIDE_OPERATION, testCase[0], testCase[1])).to.equal(testCase[2])
      })
    })

    it('Test that in divide operation if last arg rounds to 0, then `Error` returned', function () {
      const testCases = [
        [2, 0.5, 2], [2, 0.4, 'Error']
      ]
      testCases.forEach(testCase => {
        expect(calculateNumber(DIVIDE_OPERATION, testCase[0], testCase[1])).to.equal(testCase[2])
      })
    })
  })
})
