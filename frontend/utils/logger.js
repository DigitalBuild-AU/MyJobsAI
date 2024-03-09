/**
 * logger.js
 * Purpose: Provides logging functionalities for the application.
 * It supports console logging and external logging services, with the ability to toggle external logging.
 */
// Configuration for external logging service
const externalLoggingEnabled = false; // Toggle this to enable/disable external logging
const externalLogger = {
  info: (message, data) => {/* Placeholder for sending info logs to an external service */},
  warn: (message, data) => {/* Placeholder for sending warning logs to an external service */},
  error: (message, error) => {/* Placeholder for sending error logs to an external service */}
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
