/**
 * These rules are only relevant to ES6 environments.
 * @module rules/ecmascript6
 * @see {@link http://eslint.org/docs/rules/#ecmascript-6}
 */
"use strict"

module.exports = {
  rules : {
    // Require braces in arrow function body
    "arrow-body-style" : [2, "as-needed"],
    // Require parens in arrow function arguments
    "arrow-parens" : [2, "always"],
    // Require space before/after arrow function's arrow
    "arrow-spacing" : [2, {before : true, after : true}],
    // Verify calls of super() in constructors
    "constructor-super" : 2,
    // Enforce spacing around the * in generator functions
    "generator-star-spacing" : [2, {before : true, after : true}],
    // Disallow arrow functions where a condition is expected
    "no-arrow-condition" : 2,
    // Disallow modifying variables of class declarations
    "no-class-assign" : 2,
    // Disallow modifying variables that are declared using const
    "no-const-assign" : 2,
    // Disallow duplicate name in class members
    "no-dupe-class-members" : 2,
    // Disallow use of this/super before calling super() in constructors.
    "no-this-before-super" : 2,
    // require let or const instead of var
    "no-var" : 2,
    // Require Object Literal Shorthand Syntax
    "object-shorthand" : [2, "always"],
    // Suggest using arrow functions as callbacks.
    "prefer-arrow-callback" : 2,
    // Suggest using const
    "prefer-const" : 2,
    // Suggest using Reflect methods where applicable
    "prefer-reflect" : 2,
    // Suggest using the spread operator instead of .apply().
    "prefer-spread" : 2,
    // Suggest using template literals instead of string concatenation.
    "prefer-template" : 2,
    // Disallow generator functions that do not have yield
    "require-yield" : 2,
  },
}
