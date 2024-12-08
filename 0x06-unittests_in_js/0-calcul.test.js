/**
 * @module 0-calcul.test
 * Defines tests for the `0-calcul` module
 */

const assert = require('assert')

const calculateNumber = require('./0-calcul')

describe('0-calcul tests', function() {
  describe('calculateNumber function tests', function () {
    function assertArgs (args) {
      Object.keys(args).forEach(key => {
        assert.equal(calculateNumber(...JSON.parse(key)), args[key])
      })
    }

    it('Expects two args', function () {
      const args = {
        '[]': NaN,
        '[1]': NaN,
        '[1, 1]': 2 
      }
      assertArgs(args)
    })

    describe('Args are rounded', function() {
      it('Rounds first arg', function() {
        const args = {
          '[1.3, 2]': 3,
          '[1.5, 2]': 4,
          '[1, 2]': 3
        }
        assertArgs(args)
      })

      it('Rounds second arg', function() {
        const args = {
          '[1, 2.3]': 3,
          '[1, 2.7]': 4,
          '[1, 2]': 3
        }
        assertArgs(args)
      })

      it('Rounds all args', function() {
        const args = {
          '[1.3, 2.3]': 3,
          '[1.5, 2.7]': 5,
          '[1, 2]': 3
        }
        assertArgs(args)
      })
    })
  })
})

