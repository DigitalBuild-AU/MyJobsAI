/**
 * logger.js
 * Purpose: Provides logging functionalities for the application.
 * It supports console logging and external logging services, with the ability to toggle external logging.
 */
// Configuration for external logging service
const externalLoggingEnabled = true; // Toggle this to enable/disable external logging
const externalLogger = {
  info: (message, data) => { /* Code to send info logs to an external service */ },
  warn: (message, data) => { /* Code to send warning logs to an external service */ },
  error: (message, error) => { /* Code to send error logs to an external service */ }
};

export const logInfo = (message, ...data) => {
  console.log(message, ...data);
  if (externalLoggingEnabled) externalLogger.info(message, data);
};

export const logWarning = (message, ...data) => {
  console.warn(message, ...data);
  if (externalLoggingEnabled) externalLogger.warn(message, data);
};

export const logError = (message, error) => {
  console.error(message, error);
  if (externalLoggingEnabled) externalLogger.error(message, error);
};
/**
 * Logs informational messages to the console and optionally to an external service.
 * @param {string} message - The informational message to log.
 * @param {...any} data - Additional data to log alongside the message.
 */
/**
 * Logs warning messages to the console and optionally to an external service.
 * @param {string} message - The warning message to log.
 * @param {...any} data - Additional data to log alongside the warning.
 */
/**
 * Logs error messages to the console and optionally to an external service.
 * @param {string} message - The error message to log.
 * @param {Error} error - The error object to log.
 */
