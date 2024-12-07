#!/usr/bin/env node
/**
 * utils.js
 *
 * Basic functions used throughout the app
 */

import { readFile as _readFile } from 'fs';
import util from 'util';

const readFile = util.promisify(_readFile);

export default function formatData(_data) {
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

export function logData(data) {
  let message = '';
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

/**
 * readDatabase - reads file data
 * Args:
 *  - file (string): The data file
 */
export function readDatabase(file) {
  return new Promise((resolve, reject) => {
    readFile(file).then((data) => {
      resolve(formatData(data.toString()));
    }).catch(() => {
      reject(new Error('Cannot load the database'));
    });
  });
}
