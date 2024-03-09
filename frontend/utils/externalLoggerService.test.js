import { logInfoExternal, logWarnExternal, logErrorExternal } from './externalLoggerService';

describe('logInfoExternal', () => {
  it('should call logInfoExternal without throwing an error for valid inputs', () => {
    expect(() => logInfoExternal('info message', { key: 'value' })).not.toThrow();
    expect(() => logInfoExternal('', {})).not.toThrow();
    expect(() => logInfoExternal('info with null data', null)).not.toThrow();
    expect(() => logInfoExternal('info with undefined data', undefined)).not.toThrow();
  });
});

describe('logWarnExternal', () => {
  it('should call logWarnExternal without throwing an error for valid inputs', () => {
    expect(() => logWarnExternal('warn message', { key: 'value' })).not.toThrow();
    expect(() => logWarnExternal('', {})).not.toThrow();
    expect(() => logWarnExternal('warn with null data', null)).not.toThrow();
    expect(() => logWarnExternal('warn with undefined data', undefined)).not.toThrow();
  });
});

describe('logErrorExternal', () => {
  it('should call logErrorExternal without throwing an error for valid inputs', () => {
    expect(() => logErrorExternal('error message', new Error('Test error'))).not.toThrow();
    expect(() => logErrorExternal('', new Error('Empty message error'))).not.toThrow();
    expect(() => logErrorExternal('error with null error object', null)).not.toThrow();
    expect(() => logErrorExternal('error with undefined error object', undefined)).not.toThrow();
  });
});
