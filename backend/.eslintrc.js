module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // Custom rules can be added here
  }
};
