#!/usr/bin/node env
/**
 * 0-console.js
 *
 * Script that define methods interacting with the console
 */

/**
 * displayMessage - Displays message on console
 *
 * Args:
 *  - message (str): The message to display
 */
function displayMessage(message) {
  if (message) {
    process.stdout.write(`${message}\n`);
  }
}

module.exports = displayMessage;
