module.exports = {
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'next'
  ],
  env: {
    'es6': true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      'jsx': true
    }
  },
  rules: {
    'no-mixed-spaces-and-tabs': 2,
    'indent': [2, 2],
    'camelcase': 2,
    'curly': 2,
    'eqeqeq': [2, 'smart'],
    'func-style': [2, 'expression'],
    'semi': 2,
    'no-extra-semi': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'space-before-blocks': 1,
    'keyword-spacing': [1, { 'before': true, 'after': true }],
    'space-infix-ops': 1,
    'one-var': [1, { 'uninitialized': 'always', 'initialized': 'never' }],
    'comma-style': [2, 'last'],
    'quotes': [1, 'single'],
  }
};