#!/usr/bin/env node
/**
 * 6-http_express.js
 *
 * Script creates simple express server
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('Hello ALX!');
});

app.listen(1245);

module.exports = app;
