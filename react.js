/**
 * This configuration is specific to React.
 * @module react
 */
"use strict"

module.exports = {
  extends : [
    "remitbri/es6",
    "remitbri/node",
    "remitbri/rules/reactPlugin",
  ],
  env : {
    browser : true,
  },
  ecmaFeatures : {
    jsx : true, // enable JSX
    modules : true, // enable modules and global strict mode
    experimentalObjectRestSpread : true,
  },
}
