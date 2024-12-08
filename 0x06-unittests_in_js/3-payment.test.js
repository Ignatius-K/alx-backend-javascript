/**
 * @module 3-payment.test
 *
 * Defines tests for '3-payment' module
 */

const expect = require('chai').expect
const sinon = require('sinon')

const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')

describe('sendPaymentRequestToApi', function () {

  /**
   * @type {sinon.SinonSandbox}
   */
  let sandbox;

  before(function () {
    sandbox = sinon.createSandbox()
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('Test that the function logs', function () {
    const logSpy = sandbox.spy(console, 'log')
    sendPaymentRequestToApi(0, 0) 
    expect(logSpy.called, "The function logs to console").to.be.true
    expect(logSpy.calledOnce, "The function logs only once to the console").to.be.true
  })

  it('Test that the function calls the calculateNumber util', function () {
    const calculateNumberSpy = sandbox.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(0, 0)
    expect(calculateNumberSpy.called, "The function calls calculateNumber util").to.be.true
    expect(calculateNumberSpy.calledOnce, "The function calls calculateNumber util once").to.be.true
    expect(calculateNumberSpy.calledWith('SUM', 0, 0), "The function calls calculateNumber with expected args").to.be.true
  })

  it('Test that the function logs correct output from calculateNumber', function () {
    const calculateNumberSpy = sandbox.spy(Utils, 'calculateNumber')
    const logSpy = sandbox.spy(console, 'log')
    sendPaymentRequestToApi(100, 20)
    expect(calculateNumberSpy.returned(120), "The calculateNumber returned as expected").to.be.true
    expect(logSpy.calledWith('The total is: 120'), "The function logs correct value from calculateNumber").to.be.true
  })
})












