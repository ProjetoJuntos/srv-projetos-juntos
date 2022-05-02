module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    strict: 'off',
  },
};
