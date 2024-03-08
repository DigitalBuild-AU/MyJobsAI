const { debugLog } = require('./debugLogger');
const jest = require('jest');

describe('debugLogger tests', () => {
  /**
   * Mocks the global Date object to return a fixed timestamp for consistent testing.
   */
  beforeEach(() => {
    jest.spyOn(global, 'Date').mockImplementation(() => new Date('2023-04-01T00:00:00.000Z'));
  });

  /**
   * Restores all mocks to their original state after each test to ensure clean test environment.
   */
  afterEach(() => {
    jest.restoreAllMocks();
  });

  /**
   * Tests that the debugLog function logs messages correctly without any errors.
   */
  test('should log messages correctly without error', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    debugLog('Test message');
    expect(consoleLogSpy).toHaveBeenCalledWith('[2023-04-01T00:00:00.000Z] DEBUG: Test message');
  });

  /**
   * Tests that debugLog function logs both messages and error stack traces correctly when an error is provided.
   */
  test('should log messages and error stack trace correctly when error is provided', () => {
  /**
   * Tests that debugLog logs messages correctly without any errors.
   * No parameters are passed to this test function.
   * It asserts that console.log is called with the correct timestamp and message.
   */
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const consoleLogSpy = jest.spyOn(console, 'log');
    const mockError = new Error('Test error');
    mockError.stack = 'Error stack trace';
    debugLog('Test message with error', mockError);
    expect(consoleLogSpy).toHaveBeenCalledWith('[2023-04-01T00:00:00.000Z] DEBUG: Test message with error');
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error stack trace');
  });

  /**
   * Tests that non-Error objects are handled gracefully and logged correctly.
   */
  test('should handle non-Error objects gracefully', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    debugLog('Test message with non-error object', { some: 'object' });
  test('should handle non-Error objects gracefully', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    debugLog('Test message with non-error object', { some: 'object' });
    expect(consoleLogSpy).toHaveBeenCalledWith('[2023-04-01T00:00:00.000Z] DEBUG: Test message with non-error object');
  });
  /**
   * Tests that no error is thrown and messages are logged correctly when undefined is passed as the error parameter.
   */
  test('should not throw error when undefined is passed as error', () => {
   * Tests that the debugLog function does not throw an error when undefined is passed as the error parameter.
   */
  test('should not throw error when undefined is passed as error', () => {
  /**
   */
  test('should not throw error when undefined is passed as error', () => {
  /**
   * Tests that messages are logged correctly without any errors.
   */
    const consoleLogSpy = jest.spyOn(console, 'log');
    expect(() => debugLog('Test message with undefined error', undefined)).not.toThrow();
    expect(consoleLogSpy).toHaveBeenCalledWith('[2023-04-01T00:00:00.000Z] DEBUG: Test message with undefined error');
  });
/**
 * This file contains tests for the debugLogger utility. It includes tests for logging messages with and without errors,
 * handling non-Error objects, and ensuring no errors are thrown for undefined inputs. These tests ensure the debugLogger
 * functions as expected under various conditions.
 */
  /**
  /**
   * Tests that messages and error stack traces are logged correctly when an error object is provided.
   */
   * Mocks the global Date object to ensure consistent timestamps in tests.
   */
  /**
   * Restores all mocks to their original value after each test to ensure test isolation.
   */
});
  /**
   * Tests that debugLog does not throw an error when undefined is passed as the error parameter.
   * Parameters: A string message and undefined.
   * It asserts that the function call does not throw any errors.
   */
    const consoleLogSpy = jest.spyOn(console, 'log');
    expect(() => debugLog('Test message with undefined error', undefined)).not.toThrow();
    expect(consoleLogSpy).toHaveBeenCalledWith('[2023-04-01T00:00:00.000Z] DEBUG: Test message with undefined error');
  });
});
  /**
   * Tests that debugLog handles non-Error objects gracefully when passed as the error parameter.
   * Parameters: A string message and a non-Error object.
   * It asserts that console.log is called with the correct message, indicating successful handling of non-Error objects.
   */
