/**
 * These rules have to do with variable declarations.
 * @module rules/variables
 * @see {@link http://eslint.org/docs/rules/#variables}
 */
"use strict"

module.exports = {
  rules : {
    // Enforce/Disallow Variable Initializations
    "init-declarations" : 0,
    // Disallow Shadowing of Variables Inside of catch
    "no-catch-shadow" : 0,
    // Disallow Variables Deletion
    "no-delete-var" : 2,
    // Disallow Labels That Are Variables Names
    "no-label-var" : 2,
    // Disallow Shadowing of Restricted Names
    "no-shadow-restricted-names" : 2,
    // Disallow Shadowing
    "no-shadow" : 2,
    // Disallow Initializing to undefined
    "no-undef-init" : 2,
    // Disallow Undeclared Variables
    "no-undef" : 2,
    // Disallow Use of undefined Variable
    "no-undefined" : 2,
    // Disallow Unused Variables
    "no-unused-vars" : [2, {vars : "all", args : "after-used"}],
    // Disallow Early Use
    "no-use-before-define" : 2,
  },
}
