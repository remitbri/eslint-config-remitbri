/**
 * This configuration is specific to ES6.
 * @module es6
 */
"use strict"

module.exports = {
  extends : [
    "remitbri/es5",
    "remitbri/rules/ecmascript6",
  ],
  parserOptions : {
    // set to 3, 5 (default), 6, or 7 to specify the version of ECMAScript you want to use
    ecmaVersion : 6,
    ecmaFeatures : {
      // enable support for the experimental object rest/spread properties
      experimentalObjectRestSpread : true,
    },
  },
  env : {
    es6 : true,
  },
}
