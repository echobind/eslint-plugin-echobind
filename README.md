# eslint-plugin-echobind-api

Echobind&#39;s recommended eslint settings for Node API projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-echobind-api`:

```
$ npm install eslint-plugin-echobind-api --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-echobind-api` globally.

## Usage

Add `echobind-api` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "echobind-api"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "echobind-api/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





