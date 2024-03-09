const helmet = require('helmet');

function setupSecurity(app) {
    app.use(helmet());
}

module.exports = setupSecurity;
