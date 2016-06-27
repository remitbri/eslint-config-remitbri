/**
 * This configuration is specific to IE8.
 * @module ie8
 */
"use strict"

module.exports = {
  extends : "remitbri/es5",
  parserOptions : {
    // set to 3, 5 (default), 6, or 7 to specify the version of ECMAScript you want to use
    ecmaVersion : 3,
  },
  env : {
    browser : true,
  },
  rules : {
    // *** POSSIBLE "error"S
    // Disallow or Enforce Dangling Commas
    "comma-dangle" : [ "error", "never" ],

    // *** BEST PRACTICES
    // Require Radix Parameter
    "dot-notation" : [ "error", { allowKeywords : false }],
    radix : [ "error", "always" ],

    // *** VARIABLES
    // Disallow Shadowing of Variables Inside of catch
    "no-catch-shadow" : "error",

    // *** STYLISTIC ISSUES
    // Quoting Style for Property Names
    "quote-props" : [ "error", "always" ],
  },
}
