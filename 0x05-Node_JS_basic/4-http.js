#!/usr/bin/env node
/**
 * 4-http.js
 *
 * Script creates a simple HTTP server
 */

const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello ALX!');
});

app.listen(1245);

module.exports = app;
