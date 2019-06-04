'use strict';

import node from './configs/node';
import react from './configs/react';

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
    node,
    react
  }
};
