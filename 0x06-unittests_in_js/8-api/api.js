/**
 * @module api
 *
 * Defines the API
 */

const express = require('express')

const CONFIG = {
  PORT: 7865
}

const app = express()

app.get('/', (_, res) => {
  res.send('Welcome to the payment system')
})

app.listen(
  CONFIG.PORT,
  () => console.log(`API available on localhost port ${CONFIG.PORT}`)
)

module.exports = app
