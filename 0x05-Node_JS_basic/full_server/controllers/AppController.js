/**
 * AppController - The main controller
 *
 */

export default class AppController {
  static getHomePage(request, response) {
    response.end('Hello Holberton School!');
  }
}
