#!/usr/bin/env node
/**
 * 6-http_express.js
 *
 * Script creates simple express server
 */

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2]).then((data) => {
    res.end(data.slice(0, -1));
  }).catch((error) => {
    res.end(error.message);
  });
});

app.listen(1245);

module.exports = app;
