/**
 * This configuration is specific to React.
 * @module react
 */
"use strict"

module.exports = {
  extends : [
    "remitbri/es6",
    "remitbri/node",
    "remitbri/rules/reactPlugin-generic",
    "remitbri/rules/reactPlugin-jsxSpecific",
  ],
  parserOptions : {
    // set to "script" (default) or "module" if your code is in ECMAScript modules
    sourceType : "module",
    ecmaFeatures : {
      // enable JSX
      jsx : true,
    },
  },
  env : {
    browser : true,
    commonjs : true,
    "shared-node-browser" : true,
  },
  settings : {
    react : {
      pragma : "React",
    },
  },
}
