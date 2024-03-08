/**
 * Logs a debug message along with an optional error stack trace to the console.
 * 
 * @param {string} message - The debug message to be logged.
 * @param {Error} [error=null] - An optional error object whose stack trace is to be logged.
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
