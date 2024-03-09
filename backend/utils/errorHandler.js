const { debugLog } = require('./debugLogger');

const handleError = (res, error, statusCode = 500) => {
  const errorMessage = 'An unexpected error occurred. Please try again later.';
  const errorDetails = {
    message: error.message,
    type: error.name,
    stack: error.stack,
  };

  // Log detailed error for internal review
  debugLog('Error occurred', errorDetails);

  // Return generic error message to client to avoid exposing sensitive information
  res.status(statusCode).json({ error: errorMessage });
};

module.exports = { handleError };
