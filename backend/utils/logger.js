const logSuccess = (message) => {
    console.log(`SUCCESS: ${message}`);
};

const logError = (error) => {
    console.error(`ERROR: ${error.message}, Stack: ${error.stack}`);
};

module.exports = { logSuccess, logError };
