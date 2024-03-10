import { logInfo, logWarning, logError } from '../utils/logger';
import { externalLogger } from '../utils/logger'; // Assuming externalLogger is exported for testing purposes

describe('Logger', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('logInfo', () => {
    it('calls console.log with correct arguments', () => {
      const consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => {});
      logInfo('Info message', { detail: 'Some details' });
      expect(consoleLogMock).toHaveBeenCalledWith('Info message', { detail: 'Some details' });
    });

    it('calls external logger when externalLoggingEnabled is true', () => {
      const originalValue = externalLogger.externalLoggingEnabled;
      externalLogger.externalLoggingEnabled = true;
      const infoMock = jest.spyOn(externalLogger, 'info').mockImplementation(() => {});
      logInfo('Info message', { detail: 'Some details' });
      expect(infoMock).toHaveBeenCalledWith('Info message', [{ detail: 'Some details' }]);
      externalLogger.externalLoggingEnabled = originalValue;
    });
  });

  describe('logWarning', () => {
    it('calls console.warn with correct arguments', () => {
      const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation(() => {});
      logWarning('Warning message', { detail: 'Warning details' });
      expect(consoleWarnMock).toHaveBeenCalledWith('Warning message', { detail: 'Warning details' });
    });

    it('calls external logger when externalLoggingEnabled is true', () => {
      const originalValue = externalLogger.externalLoggingEnabled;
      externalLogger.externalLoggingEnabled = true;
      const warnMock = jest.spyOn(externalLogger, 'warn').mockImplementation(() => {});
      logWarning('Warning message', { detail: 'Warning details' });
      expect(warnMock).toHaveBeenCalledWith('Warning message', [{ detail: 'Warning details' }]);
      externalLogger.externalLoggingEnabled = originalValue;
    });
  });

  describe('logError', () => {
    it('calls console.error with correct arguments', () => {
      const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
      logError('Error message', new Error('Test error'));
      expect(consoleErrorMock).toHaveBeenCalledWith('Error message', expect.any(Error));
    });

    it('calls external logger when externalLoggingEnabled is true', () => {
      const originalValue = externalLogger.externalLoggingEnabled;
      externalLogger.externalLoggingEnabled = true;
      const errorMock = jest.spyOn(externalLogger, 'error').mockImplementation(() => {});
      logError('Error message', new Error('Test error'));
      expect(errorMock).toHaveBeenCalledWith('Error message', expect.any(Error));
      externalLogger.externalLoggingEnabled = originalValue;
    });
  });
});
