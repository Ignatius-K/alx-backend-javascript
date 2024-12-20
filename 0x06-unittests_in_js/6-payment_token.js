/**
 * @module 6-payment_token
 *
 * Methods for payment tokens
 */

/**
 * Gets payment token from API
 * @param {boolean} success - Determines the result
 *
 * @returns {Promise} The mimiced response from API
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, _) => {
    if (success) {
      resolve({data: 'Successful response from the API' })
    }
  })
}

module.exports = getPaymentTokenFromAPI
