const handleError = (res, message, statusCode = 500) => {
  res.status(statusCode).json({ error: message });
};

module.exports = { handleError };
