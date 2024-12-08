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

// Register middleware
app.use(express.json())

app.get('/', (_, res) => {
  res.send('Welcome to the payment system')
})

app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params
  res.send(`Payment methods for cart ${id}`)
})

app.get('/available_payments', function (_, res) {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
})

app.post('/login', function (req, res) {
  const { userName } = req.body
  if (userName === undefined) {
    res.status(404).send('User not found')
    return
  }
  res.send(`Welcome ${userName}`)
})

app.listen(
  CONFIG.PORT,
  () => console.log(`API available on localhost port ${CONFIG.PORT}`)
)

module.exports = app
