/**
 * This file contains tests for the error handling middleware functionality.
 * It tests the errorHandler middleware's response to errors and its logging behavior.
 */
const errorHandler = require('../middleware/errorHandlingMiddleware');
const httpMocks = require('node-mocks-http');

/**
 * Tests for the errorHandler middleware.
 * Ensures proper status code and error message are returned, and that errors are logged.
 */
describe('errorHandler Middleware', () => {
  let mockRequest;
  let mockResponse;
  let nextFunction = jest.fn();
  let consoleSpy;

  beforeEach(() => {
    mockRequest = httpMocks.createRequest();
    mockResponse = httpMocks.createResponse();
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should set status to 500 and return correct error message', () => {
    const error = new Error('Test Error');
    errorHandler(error, mockRequest, mockResponse, nextFunction);

    expect(mockResponse.statusCode).toBe(500);
"devDependencies": {
    "jest": "^27.0.0",
    "webpack": "^5.0.0",
    "node-mocks-http": "^1.10.0"
  }
    expect(mockResponse._getData()).toEqual({ message: 'Something went wrong' });
  });

  test('should call console.error with the error', () => {
    const error = new Error('Test Error');
    errorHandler(error, mockRequest, mockResponse, nextFunction);

    expect(consoleSpy).toHaveBeenCalledWith(error);
  });
});
