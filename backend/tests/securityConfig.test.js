/**
 * This file contains tests for the security configuration middleware.
 * It tests the application of security-related middleware to the Express app.
 */
const setupSecurity = require('../middleware/securityConfig');
const helmet = require('helmet');
jest.mock('helmet', () => jest.fn(() => 'helmetMiddleware'));

describe('setupSecurity Middleware', () => {
  let app;

  beforeEach(() => {
    app = {
      use: jest.fn()
    };
  });

  test('should apply helmet middleware to the app', () => {
    setupSecurity(app);
    expect(app.use).toHaveBeenCalledWith('helmetMiddleware');
    expect(helmet).toHaveBeenCalled();
  });
});
