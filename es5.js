/**
 * This configuration is specific to ES5.
 * @module es5
 */
"use strict"

module.exports = {
  parserOptions : {
    // set to 3, 5 (default), 6, or 7 to specify the version of ECMAScript you want to use
    ecmaVersion : 5,
    // set to "script" (default) or "module" if your code is in ECMAScript modules
    sourceType : "script",
    ecmaFeatures : {
    //   // allow return statements in the global scope
    //   globalReturn : false,
    //   // enable global strict mode (if `ecmaVersion` is 5 or greater)
    //   impliedStrict : false,
    //   // enable JSX
    //   jsx : false,
    //   // enable support for the experimental object rest/spread properties
    //   experimentalObjectRestSpread : false,
    },
  },
  // // default parser : espree
  // parser : "espree",
  env : {},
  extends : [
    "remitbri/rules/possibleErrors",
    "remitbri/rules/bestPractices",
    "remitbri/rules/strictMode",
    "remitbri/rules/variables",
    "remitbri/rules/stylisticIssues",
  ],
}
