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
    // set to 3, 5 (default), 6, 7, or 8 to specify the version of ECMAScript
    // syntax you want to use. You can also set to 2015 (same as 6), 2016 (same
    // as 7), or 2017 (same as 8) to use the year-based naming
    ecmaVersion : 2015,
    ecmaFeatures : {
      // enable support for the experimental object rest/spread properties
      experimentalObjectRestSpread : true,
    },
  },
  env : {
    es6 : true,
  },
}
