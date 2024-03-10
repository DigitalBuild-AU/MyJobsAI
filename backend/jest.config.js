module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.m?js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};
