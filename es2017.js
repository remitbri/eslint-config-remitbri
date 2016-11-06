/**
 * This configuration is specific to ES2017.
 * @module es6
 */
"use strict"

module.exports = {
  extends : [
    "remitbri/es6",
    "remitbri/rules/ecmascript2017",
  ],
  parserOptions : {
    // set to 3, 5 (default), 6, 7, or 8 to specify the version of ECMAScript
    // syntax you want to use. You can also set to 2015 (same as 6), 2016 (same
    // as 7), or 2017 (same as 8) to use the year-based naming
    ecmaVersion : 2017,
  },
}
