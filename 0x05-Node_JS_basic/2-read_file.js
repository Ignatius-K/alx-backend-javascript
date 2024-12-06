#!/usr/bin/env node
/**
 * 2-read_file.js
 *
 */

const fs = require('fs');

function logData(data) {
  const students = Object.values(data).reduce((prev, curr) => prev + curr.length, 0);
  console.log(`Number of students: ${students}`);
  for (const field of Object.keys(data)) {
    const _students = data[field];
    console.log(`Number of students in ${
      field
    }: ${
      _students.length
    }. List: ${
      _students.reduce((prev, curr) => (prev ? `${prev}, ${curr}` : curr), '')
    }`);
  }
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
function countStudents(file) {
  try {
    const data = fs.readFileSync(file).toString();
    const formattedData = formatData(data);
    logData(formattedData);
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
