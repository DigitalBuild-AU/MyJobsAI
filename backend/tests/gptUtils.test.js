import jest from 'jest-mock';
require('dotenv').config = jest.fn();

describe('Environment Variable Configuration in gptUtils', () => {
  let originalEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    jest.restoreAllMocks();
  });

  test('sets OPENAI_API_KEY based on CI environment variable', () => {
    process.env.CI = 'true';
    process.env.OPENAI_API_KEY_SECRET = 'secret_key';
    require('../utils/gptUtils');
    expect(process.env.OPENAI_API_KEY).toEqual('secret_key');
  });

  test('uses dotenv config when CI environment variable is not set', () => {
    delete process.env.CI;
    dotenv.config.mockImplementation(() => {
      process.env.OPENAI_API_KEY = 'local_key';
    });
    require('../utils/gptUtils');
    expect(process.env.OPENAI_API_KEY).toEqual('local_key');
  });
});
