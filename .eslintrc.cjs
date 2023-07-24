/* eslint-env node */

module.exports = {
  // root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: ['react-refresh'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/boolean-prop-naming': ['error', { 'validateNested': true }],
    'no-console': 'warn',
    'quotes': ['error', 'single'],
    'prefer-const': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['warn', 'never'],
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxBOF': 0
    }],
    'no-trailing-spaces': ['error', { 'ignoreComments': true }],
    'keyword-spacing': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'block-spacing': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-bracket-newline': ['error', 'consistent'],
    'max-statements-per-line': ['error', { 'max': 2 }],
    'object-curly-newline': ['error', { 'consistent': true, 'multiline': true }],
    'no-multi-spaces': 'error',
    'eqeqeq': 'warn',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-equals-spacing': ['error', 'never'],
    'switch-colon-spacing': 'error',
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': ['error', { 'when': 'never', 'children': true }],
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'multiline'}],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': ['error', {
      'beforeClosing': 'never'
    }],
    'no-var': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-this-in-sfc': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'error',
    'react/self-closing-comp': 'error',
    'no-unused-vars': 'off',
    'import/no-anonymous-default-export': 'off'
  },
}
