const log = (level, message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
};

const logError = (error) => {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] ERROR: ${error.message}, Stack: ${error.stack}`);
};
module.exports = { log, logError };
const logInfo = (message) => log('info', message);
const logDebug = (message) => log('debug', message);
const logWarn = (message) => log('warn', message);

module.exports = { logInfo, logDebug, logWarn, logError };
