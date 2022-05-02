module.exports = {
  root: true,
  env: {
    mocha: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeature: {
      impliedStrict: false,
    },
  },
  rules: {
  },
};
