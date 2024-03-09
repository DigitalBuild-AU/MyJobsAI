// This file configures security-related middleware for the MyJobsAI backend, using the helmet package to enhance security.
const helmet = require('helmet');

/**
 * Sets up security middleware for the application.
 *
 * Parameters:
 * - app: The Express application instance to which the security middleware will be added.
 *
 * Does not return a value but configures the application with security best practices.
 */
function setupSecurity(app) {
    app.use(helmet());
}

module.exports = setupSecurity;
