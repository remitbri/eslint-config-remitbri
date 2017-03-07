/**
 * These rules have to do with variable declarations.
 * @module rules/variables
 * @see {@link http://eslint.org/docs/rules/#variables}
 */
"use strict"

module.exports = {
  rules : {
    // Require or disallow initialization in variable declarations
    "init-declarations" : "off",
    // Disallow Shadowing of Variables Inside of catch
    "no-catch-shadow" : "off",
    // Disallow deleting variables
    "no-delete-var" : "error",
    // Disallow Labels That Are Variables Names
    "no-label-var" : "error",
    // Disallow specific global variables
    "no-restricted-globals" : [ "error", "event" ],
    // Disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow" : [ "error", {
      builtinGlobals : true,
      hoist : "functions",
    }],
    // Disallow Shadowing of Restricted Names
    "no-shadow-restricted-names" : "error",
    // Disallow Undeclared Variables
    "no-undef" : "error",
    // Disallow Initializing to undefined
    "no-undef-init" : "error",
    // Disallow Use of `undefined` Variable
    "no-undefined" : "error",
    // Disallow Unused Variables
    "no-unused-vars" : [ "error", {
      vars : "all",
      args : "after-used",
      ignoreRestSiblings : false,
    }],
    // Disallow Early Use
    "no-use-before-define" : [ "error", {
      functions : true,
      classes : true,
      variables : true,
    }],
  },
}
