/**
 * @module 6-payment_token.test
 *
 * Defines tests for module '6-payment_token'
 */
const getPaymentTokenFromAPI = require('./6-payment_token')

describe('getPaymentTokenFromAPI', function () {
  it('Test the function when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(() => done())
      .catch(err => done(err))
  })
})
