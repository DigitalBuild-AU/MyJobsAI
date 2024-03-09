const { debugLog } = require('./debugLogger');
const validator = require('validator');

const validateTextInput = (input) => {
  if (!validator.isAscii(input)) {
    debugLog('Validation Error: Input contains non-ASCII characters', new Error('Invalid input characters'));
    return false;
  }
  return true;
};

const sanitizeTextInput = (input) => {
  return validator.escape(input);
};

module.exports = { validateTextInput, sanitizeTextInput };
