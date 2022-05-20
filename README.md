[![Test](https://github.com/echobind/eslint-plugin-echobind/actions/workflows/test.yml/badge.svg)](https://github.com/echobind/eslint-plugin-echobind/actions/workflows/test.yml)

# eslint-plugin-echobind

Echobind's recommended eslint rules and configs

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add eslint
```

Next, install `eslint-plugin-echobind`:

```
$ yarn add eslint-plugin-echobind
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-echobind` globally.

## Usage

Eslint configs come bundled with this package. To use one, add it to the extends option in `.eslintrc.js`. For example, the following will use the React config:

```js
module.exports = {
  extends: ["plugin:echobind/react"],
};
```

If working on a Node project, use the node config:

```js
module.exports = {
  extends: ["plugin:echobind/node"],
};
```

## Provided Configs

This plugin provides the following configs:

- [React](./lib/configs/react.js): Use this for React projects with TypeScript
- [NodeJS](./lib/configs/node.js): Use this for Node projects with TypeScript
- [React Native](./lib/configs/react-native.js): Use this for React Native projects with TypeScript
