#!/usr/bin/env node
/**
 * 2-read_file.js
 *
 */

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

function logData(data) {
  let message = '';
  const students = Object.values(data).reduce((prev, curr) => prev + curr.length, 0);
  message += `Number of students: ${students}\n`;
  for (const field of Object.keys(data)) {
    const _students = data[field];
    message += `Number of students in ${
      field
    }: ${
      _students.length
    }. List: ${
      _students.reduce((prev, curr) => (prev ? `${prev}, ${curr}` : curr), '')
    }\n`;
  }
  return message;
}

function formatData(_data) {
  const formattedData = {};
  const data = _data.split('\n').splice(1);
  for (const datum of data) {
    const _datum = datum.split(',');
    if (_datum[0]) {
      formattedData[_datum[3]] = [
        ...(formattedData[_datum[3]] ? formattedData[_datum[3]] : []),
        _datum[0],
      ];
    }
  }
  return formattedData;
}

/**
 * countStudents - counts students from file
 *
 * Args:
 *  - file (string): The data file
 */
async function countStudents(file) {
  try {
    const data = (await readFile(file)).toString();
    const formattedData = formatData(data);
    const log = logData(formattedData);
    console.log(log);
    return log;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
