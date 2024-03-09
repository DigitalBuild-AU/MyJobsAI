/**
 * This file contains tests for the server configuration.
 * It tests the inclusion of middleware functions and HTTPS setup in the server configuration.
 */
const request = require('supertest');
const express = require('express');
const https = require('https');
const fs = require('fs');
const { setupSecurity } = require('../middleware/securityConfig');
const { errorHandler } = require('../middleware/errorHandlingMiddleware');
jest.mock('https');
jest.mock('fs');

describe('Server Configuration', () => {
  let app;

  beforeAll(() => {
    jest.spyOn(setupSecurity, 'setupSecurity').mockImplementation((app) => app.use(() => {}));
    jest.spyOn(errorHandler, 'errorHandler').mockImplementation((err, req, res, next) => {});
    app = express();
    require('../server'); // This line simulates the server setup
  });

  test('Middleware functions are correctly included in the server configuration', () => {
    expect(setupSecurity.setupSecurity).toHaveBeenCalled();
    expect(errorHandler.errorHandler).toHaveBeenCalled();
  });

  test('HTTPS setup is correctly configured', () => {
    const sslOptions = {
      key: 'dummyKey',
      cert: 'dummyCert'
    };
    fs.readFileSync.mockImplementation((path) => {
      if (path === process.env.SSL_KEY_PATH) return sslOptions.key;
      if (path === process.env.SSL_CERT_PATH) return sslOptions.cert;
    });

    expect(fs.readFileSync).toHaveBeenCalledWith(process.env.SSL_KEY_PATH);
    expect(fs.readFileSync).toHaveBeenCalledWith(process.env.SSL_CERT_PATH);

    expect(https.createServer).toHaveBeenCalledWith(sslOptions, expect.any(Function));
  });
});
