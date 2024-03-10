module.exports = {
  testMatch: [
    "<rootDir>/backend/tests/**/*.test.js",
    "<rootDir>/frontend/__tests__/**/*.test.js"
  ]
};
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/frontend/__mocks__/fileMock.js"
  },
  preset: "ts-jest"
