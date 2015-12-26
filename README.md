### eslint-config-remitbri

Opinionated rule settings to be used with [ESLint](http://eslint.org/). Can be used with ESLint v1.10.3 and eslint-plugin-react v3.13.1 or above.

# Installation
```shell
npm install --save-dev eslint-config-remitbri
```

# Default usage
You may:

 - add the following line to the `.eslintrc` or to the `eslintConfig` field of the `package.json` of your project
```json
{
  "extends" : "remitbri"
}
```

 - or use the command line
 ```shell
 eslint -c remitbri *.js
 ```

Consult the ESLint documentation for more information about [extending configuration files](http://eslint.org/docs/user-guide/configuring#extending-configuration-files).

This default configuration corresponds to `react` (see below) — because it's opinionated :)

Other than those specified in the available configurations, no language option (`ecmaFeatures`), parser, environment, global or plugin is set. Add them as needed in your own `.eslintrc`!

# Available configurations
## es5
This is a collection of [rules](http://eslint.org/docs/rules/) regarding possible errors, best practices, strict mode, variables and stylistic issues.

```json
{
  "extends" : "remitbri/es5"
}
```

## es6
This
 - extends the `es5` configuration
 - add rules related to es2015
 - adds the `es6` [environment](http://eslint.org/docs/user-guide/configuring#specifying-environments)

```json
{
  "extends" : "remitbri/es6"
}
```

## node
This
 - adds rules related to Node.js
 - adds the `node` [environment](http://eslint.org/docs/user-guide/configuring#specifying-environments)

It's not meant to be used on its own, rather with other configurations. E.g

```json
{
  "extends" : ["remitbri/es5", "remitbri/node"]
}
```

or

```json
{
  "extends" : ["remitbri/es6", "remitbri/node"]
}
```

## ie8
This
 - extends the `es5` configuration
 - adds a couple of rule modifications because *hello ECMAScript 3*…
 - adds the `browser` [environment](http://eslint.org/docs/user-guide/configuring#specifying-environments)

```json
{
  "extends" : "remitbri/ie8"
}
```
## react
This
 - extends the `es6` and `node` configurations
 - adds rules related to [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
 - adds the `browser` [environment](http://eslint.org/docs/user-guide/configuring#specifying-environments)
 - adds the `jsx`, `modules` and `experimentalObjectRestSpread` [ecmaFeatures](http://eslint.org/docs/user-guide/configuring#specifying-language-options) (the other ones are already added in the `es6` environment)

```json
{
  "extends" : "remitbri/react"
}
```
## es7
Since v2.0.0, the `es7` configuration has moved to its own module, [`eslint-config-remitbri-es7`](https://github.com/remitbri/eslint-config-remitbri-es7).
