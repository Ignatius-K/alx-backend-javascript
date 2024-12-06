#!/usr/bin/env node
/**
 * 5-http.js
 *
 * Script creates a somehow-complex HTTP server
 */

const http = require('http');

const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.write('This is the list of our students\n');
      countStudents(process.argv[2]).then((data) => {
        res.end(data.slice(0, -1));
      }).catch((error) => {
        res.end(error.message);
      });
      break;
    default:
      res.statusCode = 404;
      res.end('Not found');
      break;
  }
});

app.listen(1245);

module.exports = app;
