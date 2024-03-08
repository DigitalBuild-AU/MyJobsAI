const debugLog = (message, error = null) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] DEBUG: ${message}`);
  if (error) {
    console.error(error.stack);
  }
};

module.exports = { debugLog };
