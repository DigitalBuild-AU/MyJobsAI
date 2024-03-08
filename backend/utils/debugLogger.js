/**
 * This file contains utility functions for logging debug messages.
 * Main function: debugLog
 * 
 * The debugLog function allows for logging debug messages with an optional error stack trace.
 * It is designed to standardize the way debug information and errors are logged throughout the backend.
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
