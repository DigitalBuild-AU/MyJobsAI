const express = require('express');

const handleError = (res, message, statusCode = 500) => {
  res.status(statusCode).json({ error: message });
};

const logRequest = (req) => {
  console.log(`Request received: ${req.method} ${req.path}`);
};

module.exports = {
  handleError,
  logRequest
};
