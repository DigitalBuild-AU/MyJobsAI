// Jest configuration for frontend tests. This file specifies the test environment,
// transformations, module name mappings, and other configurations for running Jest tests in the frontend.
module.exports = {
  
 testEnvironment: 'jsdom',
 transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  setupFiles: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  globals: {
    window: true,
    document: true
  }
};
