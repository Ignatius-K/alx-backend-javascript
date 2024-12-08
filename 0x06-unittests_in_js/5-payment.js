/**
 * @module 5-payment
 *
 * Defines the payment mtds
 */

const Utils = require('./utils')

/**
 * Sends payment request to PaymentAPI
 *
 * @param {number} totalAmount - The total amount of order
 * @param {number} totalShipping - The total cost of shipping
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping)
  console.log(`The total is: ${result}`)
}

module.exports = sendPaymentRequestToApi
