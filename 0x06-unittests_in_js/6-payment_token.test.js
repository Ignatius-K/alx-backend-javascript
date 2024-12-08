/**
 * @module 6-payment_token.test
 *
 * Defines tests for module '6-payment_token'
 */
const { expect } = require('chai')

const getPaymentTokenFromAPI = require('./6-payment_token')

describe('getPaymentTokenFromAPI', function () {
  it('Test the function when success is false', function () {
    const result = getPaymentTokenFromAPI(false)
    expect(result).to.be.undefined
  })

  it('Test the function when success is true', function (done) {
    getPaymentTokenFromAPI(true).then(() => done())
  })
})
