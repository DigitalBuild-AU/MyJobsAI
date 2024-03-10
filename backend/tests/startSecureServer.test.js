import https from 'https';
import fs from 'fs';
import { startSecureServer } from '../utils/startSecureServer';
import { debugLog } from '../utils/debugLogger';

jest.mock('fs');
jest.mock('https');

describe('startSecureServer', () => {
  let mockServer;

  beforeEach(() => {
    mockServer = {
      listen: jest.fn().mockImplementation((port, callback) => {
        callback();
      }),
      on: jest.fn().mockImplementation((event, callback) => {
        if (event === 'error') callback(new Error('Test error'));
      }),
    };
    https.createServer.mockReturnValue(mockServer);
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('successfully starts server', () => {
    fs.readFileSync.mockReturnValueOnce('dummyKey').mockReturnValueOnce('dummyCert');
    startSecureServer({}, 3000);
    expect(https.createServer).toHaveBeenCalledWith({ key: 'dummyKey', cert: 'dummyCert' }, {});
    expect(mockServer.listen).toHaveBeenCalledWith(3000, expect.any(Function));
    expect(debugLog).toHaveBeenCalledWith('Server is running on port 3000');
  });

  test('fails due to missing SSL files', () => {
    fs.readFileSync.mockImplementation(() => {
      throw new Error('File not found');
    });
    startSecureServer({}, 3000);
    expect(debugLog).toHaveBeenCalledWith(expect.stringContaining('Server start-up error: Error: File not found'), true);
  });

  test('fails due to other errors', () => {
    fs.readFileSync.mockReturnValueOnce('dummyKey').mockReturnValueOnce('dummyCert');
    startSecureServer({}, 3000);
    expect(debugLog).toHaveBeenCalledWith(expect.stringContaining('Server start-up error: Error: Test error'), true);
  });
});
