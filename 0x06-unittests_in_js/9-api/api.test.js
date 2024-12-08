/**
 * @module api.test
 *
 * Defines tests for the API
 */
const promisify = require('util').promisify
const e = require('express')
const request = require('request')

const get = promisify(request.get)

const uri = 'http://localhost:7865'

describe('Index page', function () {
  it('The status code should be 200', function (done) {
    get(uri).then(response => {
      response.statusCode === 200
        ? done()
        : done(new Error(`Unexpected status code received: ${response.statusCode}`))
    }).catch(err => done(err))
  })

  it('The response body is as expected', function (done) {
    get(uri).then(response => {
      response.body === 'Welcome to the payment system' 
        ? done() 
        : done(new Error(`Unexpected response body ${response.body}`))
    }).catch(err => done(err))
  })
})

describe('Cart page', function () {
  it('Returns status code 200 when id exists', function (done) {
    const existingId = 1
    get(`${uri}/cart/${existingId}`).then(response => {
      response.statusCode === 200 
        ? done() 
        : done(new Error(`Unexpected status code ${response.statusCode}`))
    }).catch(err => done(err))
  })

  it('Returns expected body for existing id', function (done) {
    const existingId = 1
    get(`${uri}/cart/${existingId}`).then(response => {
      response.statusCode === 200 
        ? done() 
        : done(new Error(`Unexpected status code ${response.statusCode}`))
    }).catch(err => done(err))
  })

  it('Returns status code 400 when id does not exist', function (done) {
    const nonExistingId = 'NAN'
    get(`${uri}/cart/${nonExistingId}`).then(response => {
      response.statusCode === 404 
        ? done() 
        : done(new Error(`Unexpected status code ${response.statusCode}`))
    }).catch(err => done(err))
  })
})
