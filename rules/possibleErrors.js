/**
 * The following rules point out areas where you might have made mistakes.
 * @module rules/possibleErrors
 * @see {@link http://eslint.org/docs/rules/#possible-errors}
 */
"use strict"

module.exports = {
  rules : {
    // Disallow or Enforce Dangling Commas
    "comma-dangle" : ["error", "always-multiline"],
    // Disallow Assignment in Conditional Statements
    "no-cond-assign" : "error",
    // Disallow Use of console
    "no-console" : "error",
    // Disallow use of constant expressions in conditions
    "no-constant-condition" : "error",
    // Disallow Controls Characters in Regular Expressions
    "no-control-regex" : "error",
    // Disallow debugger
    "no-debugger" : "error",
    // No duplicate arguments
    "no-dupe-args" : "error",
    // Disallow Duplicate Keys
    "no-dupe-keys" : "error",
    // Rule to disallow a duplicate case label
    "no-duplicate-case" : "error",
    // Disallow Empty Character Classes
    "no-empty-character-class" : "error",
    // Disallow Empty Block Statements
    "no-empty" : ["error", {allowEmptyCatch : true}],
    // Disallow Assignment of the Exception Parameter
    "no-ex-assign" : "error",
    // Disallow Extra Boolean Casts
    "no-extra-boolean-cast" : "error",
    // Disallow Extra Parens
    "no-extra-parens" : ["error", "functions"],
    // Disallow Extra Semicolons
    "no-extra-semi" : "error",
    // Disallow Function Assignment
    "no-func-assign" : "error",
    // Declarations in Program or Function Body
    "no-inner-declarations" : ["error", "both"],
    // Disallow Invalid Regular Expressions
    "no-invalid-regexp" : "error",
    // No irregular whitespace
    "no-irregular-whitespace" : "error",
    // Disallow negated left operand of `in` operator
    "no-negated-in-lhs" : "error",
    // Disallow Global Object Function Calls
    "no-obj-calls" : "error",
    // Disallow Spaces in Regular Expressions
    "no-regex-spaces" : "error",
    // Disallow Sparse Arrays
    "no-sparse-arrays" : "error",
    // Avoid unexpected multiline expressions
    "no-unexpected-multiline" : "error",
    // Disallow Unreachable Code
    "no-unreachable" : "error",
    // Require isNaN()
    "use-isnan" : "error",
    // Validates JSDoc comments are syntactically correct
    "valid-jsdoc" : ["warn", {requireReturn : false}],
    // Ensures that the results of typeof are compared against a valid string
    "valid-typeof" : "error",
  },
}
