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

app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params
  res.send(`Payment methods for cart ${id}`)
})

app.listen(
  CONFIG.PORT,
  () => console.log(`API available on localhost port ${CONFIG.PORT}`)
)

module.exports = app
