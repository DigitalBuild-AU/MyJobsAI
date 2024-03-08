const { debugLog } = require('./debugLogger');
const jest = require('jest');

describe('debugLogger tests', () => {
  beforeEach(() => {
    jest.spyOn(global, 'Date').mockImplementation(() => new Date('2023-04-01T00:00:00.000Z'));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should log messages correctly without error', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    debugLog('Test message');
    expect(consoleLogSpy).toHaveBeenCalledWith('[2023-04-01T00:00:00.000Z] DEBUG: Test message');
  });

  test('should log messages and error stack trace correctly when error is provided', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const consoleLogSpy = jest.spyOn(console, 'log');
    const mockError = new Error('Test error');
    mockError.stack = 'Error stack trace';
    debugLog('Test message with error', mockError);
    expect(consoleLogSpy).toHaveBeenCalledWith('[2023-04-01T00:00:00.000Z] DEBUG: Test message with error');
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error stack trace');
  });

  test('should handle non-Error objects gracefully', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    debugLog('Test message with non-error object', { some: 'object' });
    expect(consoleLogSpy).toHaveBeenCalledWith('[2023-04-01T00:00:00.000Z] DEBUG: Test message with non-error object');
  });

  test('should not throw error when undefined is passed as error', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    expect(() => debugLog('Test message with undefined error', undefined)).not.toThrow();
    expect(consoleLogSpy).toHaveBeenCalledWith('[2023-04-01T00:00:00.000Z] DEBUG: Test message with undefined error');
  });
});
