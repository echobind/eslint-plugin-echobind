'use strict';

const node = require('./configs/node');
const react = require('./configs/react');
const reactNative = require('./configs/react-native')

module.exports = {
  configs: {
    node,
    react,
    'react-native': reactNative
  }
};
