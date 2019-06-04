'use strict';

// Rules to automatically insert blank lines between expressions
const blankLineRules = [
  'error',
  { blankLine: 'always', prev: '*', next: 'return' },
  { blankLine: 'any', prev: ['const', 'let'], next: '*' },
  { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
  { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
  { blankLine: 'always', prev: 'multiline-expression', next: '*' },
  { blankLine: 'always', prev: 'multiline-const', next: '*' },
  { blankLine: 'always', prev: 'multiline-let', next: '*' },
  { blankLine: 'always', prev: '*', next: 'multiline-const' },
  { blankLine: 'always', prev: '*', next: 'multiline-let' },
  { blankLine: 'always', prev: '*', next: 'multiline-block-like' }
];

module.exports = {
  configs: {
    node: {
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser
      parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module' // Allows for the use of imports
      },
      extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' }
        ],
        'padding-line-between-statements': blankLineRules
      }
    },
    react: {
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser
      extends: [
        'react-app', // from create react app
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      plugins: ['jsx-a11y', 'react-hooks'],
      parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true // Allows for the parsing of JSX
        }
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // NOTE: once  https://github.com/typescript-eslint/typescript-eslint/issues/149
        // is merged, we should be able to renable this
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' }
        ],
        'jsx-a11y/no-onchange': 'off',
        'padding-line-between-statements': blankLineRules
      },
      settings: {
        react: {
          version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
        }
      }
    }
  }
};
