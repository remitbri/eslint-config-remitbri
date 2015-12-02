/**
 * This configuration is specific to IE8.
 * @module ie8
 */
"use strict"

module.exports = {
  extends : "remitbri/es5",
  env : {
    browser : true,
  },
  rules : {
    // *** POSSIBLE ERRORS
    // Disallow or Enforce Dangling Commas
    "comma-dangle" : [2, "never"],

    // *** BEST PRACTICES
    // Require Radix Parameter
    radix : [2, "always"],

    // *** VARIABLES
    // Disallow Shadowing of Variables Inside of catch
    "no-catch-shadow" : 2,

    // *** STYLISTIC ISSUES
    // Quoting Style for Property Names
    "quote-props" : [2, "always"],
  },
}
