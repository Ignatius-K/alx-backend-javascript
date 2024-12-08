/**
 * @module 5-payment.test
 *
 * Defines the tests for module `5-payment`
 */
const sinon = require('sinon')

const sendPaymentRequestToAPI = require('./5-payment')
const {expect} = require('chai')

describe('sendPaymentRequestToAPI', function () {

  /** @type {sinon.SinonSpy} */
  let logSpy;

  beforeEach(function () {
    logSpy = sinon.spy(console, 'log')
  })

  afterEach(function () {
    sinon.restore()
  })

  it('Test sendPaymentRequestToAPI with total 100 and shipping 20', function () {
    sendPaymentRequestToAPI(100, 20)
    expect(logSpy.called).to.be.true
    expect(logSpy.calledOnce).to.be.true
    expect(logSpy.calledWithExactly('The total is: 120')).to.be.true
  })

  it('Test sendPaymentRequestToAPI with total 10 and shipping 10', function () {
    sendPaymentRequestToAPI(10, 10)
    expect(logSpy.called).to.be.true
    expect(logSpy.calledOnce).to.be.true
    expect(logSpy.calledWithExactly('The total is: 20')).to.be.true
  })
})
