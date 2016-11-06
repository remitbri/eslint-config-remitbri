/**
 * These rules are only relevant to ES6 environments.
 * @module rules/ecmascript6
 * @see {@link http://eslint.org/docs/rules/#ecmascript-6}
 */
"use strict"

module.exports = {
  rules : {
    // Require braces in arrow function body
    "arrow-body-style" : [ "error", "as-needed" ],
    // Require parens in arrow function arguments
    "arrow-parens" : [ "error", "always" ],
    // Require space before/after arrow function's arrow
    "arrow-spacing" : [ "error", {
      before : true,
      after : true,
    }],
    // Verify calls of super() in constructors
    "constructor-super" : "error",
    // Enforce spacing around the * in generator functions
    "generator-star-spacing" : [ "error", {
      before : true,
      after : false,
    }],
    // Disallow modifying variables of class declarations
    "no-class-assign" : "error",
    // Disallow arrow functions where they could be confused with comparisons (
    "no-confusing-arrow" : [ "error", { allowParens : true }],
    // Disallow modifying variables that are declared using const
    "no-const-assign" : "error",
    // Disallow duplicate name in class members
    "no-dupe-class-members" : "error",
    // Disallow duplicate imports
    "no-duplicate-imports" : "error",
    // Disallow Symbol Constructor
    "no-new-symbol" : "error",
    // Disallow specific imports
    "no-restricted-imports" : "off",
    // Disallow use of this/super before calling super() in constructors.
    "no-this-before-super" : "error",
    // Disallow unnecessary computed property keys on objects
    "no-useless-computed-key" : "error",
    // Disallow unnecessary constructor
    "no-useless-constructor" : "error",
    // Disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename" : "error",
    // require `let` or `const` instead of `var`
    "no-var" : "error",
    // Require Object Literal Shorthand Syntax
    "object-shorthand" : [ "error", "always" ],
    // Suggest using arrow functions as callbacks.
    "prefer-arrow-callback" : [ "error", { allowUnboundThis : true }],
    // Suggest using const
    "prefer-const" : [ "error", {
      destructuring : "any",
      ignoreReadBeforeAssign : false,
    }],
    // Suggest using Reflect methods where applicable
    "prefer-reflect" : "error",
    // Suggest using the rest parameters instead of arguments
    "prefer-rest-params" : "error",
    // Suggest using the spread operator instead of .apply().
    "prefer-spread" : "error",
    // Suggest using template literals instead of string concatenation.
    "prefer-template" : "error",
    // Disallow generator functions that do not have yield
    "require-yield" : "error",
    // Enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing" : [ "error", "never" ],
    // Import Sorting (
    "sort-imports" : "off",
    // Require symbol description
    "symbol-description" : "error",
    // Enforce Usage of Spacing in Template Strings
    "template-curly-spacing" : [ "error", "never" ],
    // Enforce spacing around the `*` in `yield*` expressions
    "yield-star-spacing" : [ "error", {
      before : false,
      after : true,
    }],
  },
}
