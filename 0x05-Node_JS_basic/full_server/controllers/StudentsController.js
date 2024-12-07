/**
 * StudentsController - Manages students
 */

import { logData, readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        response.write('This is the list of our students\n');
        response.write(logData(data));
      }).catch((error) => {
        response.statusCode = 500;
        response.write(error.message);
      }).finally(() => {
        response.end();
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    switch (major) {
      case 'CS':
        readDatabase(process.argv[2]).then((data) => {
          response.write(`List: ${data.CS.reduce((prev, curr) => (prev ? `${prev}, ${curr}` : curr), '')
          }`);
          response.end();
        }).catch((error) => {
          response.statusCode = 500;
          response.end(error.message);
        });
        break;
      case 'SWE':
        readDatabase(process.argv[2]).then((data) => {
          response.write(`List: ${data.SWE.reduce((prev, curr) => (prev ? `${prev}, ${curr}` : curr), '')
          }`);
          response.end();
        }).catch((error) => {
          response.statusCode = 500;
          response.end(error.message);
        });
        break;
      default:
        response.statusCode = 500;
        response.end('Major parameter must be CS or SWE');
        break;
    }
  }
}
