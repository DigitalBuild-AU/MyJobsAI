/**
 * Debug Logger Utility
 * 
 * Purpose:
 * This utility module provides a standardized way for logging debug messages and errors across the backend of the application. 
 * It is designed to enhance the readability and maintainability of log messages by including timestamps and categorizing messages.
 * 
 * Usage:
 * - To log a simple debug message: debugLog('Your debug message here');
 * - To log an error with its stack trace: debugLog('Error message', errorObject);
 * 
 * The utility ensures that all debug messages are consistently formatted and that error logs include stack traces for easier debugging.
 */
const debugLog = (message, error = null) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] DEBUG: ${message}`);
  if (error) {
    console.error(error.stack);
  }
};

module.exports = { debugLog };
/**
 * Utility for logging debug messages.
 * Provides a standardized way of logging debug information and errors.
 */
/**
 * Logs a debug message along with an optional error stack trace to the console.
 * This function is utilized throughout the backend to standardize the logging of debug information and errors.
 * 
 * @param {string} message - The debug message to be logged.
 * @param {Error} [error=null] - An optional error object. If provided, its stack trace will be logged.
 */
