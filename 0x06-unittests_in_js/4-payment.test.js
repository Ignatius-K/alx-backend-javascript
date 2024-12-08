/**
 * @module 4-payment.test
 *
 * Defines tests for the module '4-payment'
 */
const sinon = require('sinon')
const expect = require('chai').expect

const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')

describe('sendPaymentRequestToApi', function () {

  /** @type {sinon.SinonStub} */
  let calculateNumberStub;
  const CALC_STUB_RETURN = 10

  before(function () {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(CALC_STUB_RETURN)
  })

  after(function () {
    sinon.restore()
  })

  it('Test that the function calls the calculateNumberStub', function () {
    sendPaymentRequestToApi(100, 20)
    expect(calculateNumberStub.called).to.be.true
    expect(calculateNumberStub.calledOnce).to.be.true
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true
  })

  it('Test that the function logs the correct message', function () {
    const logSpy = sinon.spy(console, 'log')
    sendPaymentRequestToApi(100, 20)
    expect(logSpy.called).to.be.true
    expect(logSpy.calledOnce).to.be.true
    expect(logSpy.calledWith(`The total is: ${CALC_STUB_RETURN}`)).to.be.true
  })
})
