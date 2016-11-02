/**
 * The following rules point out areas where you might have made mistakes.
 * @module rules/possibleErrors
 * @see {@link http://eslint.org/docs/rules/#possible-errors}
 */
"use strict"

module.exports = {
  rules : {
    // Require or disallow trailing commas
    "comma-dangle" : [ "error", "always-multiline" ],
    // Disallow assignment operators in conditional statements
    "no-cond-assign" : [ "error", "except-parens" ],
    // Disallow the use of `console`
    "no-console" : "error",
    // Disallow constant expressions in conditions
    "no-constant-condition" : "error",
    // Disallow control characters in regular expressions
    "no-control-regex" : "error",
    // Disallow the use of `debugger`
    "no-debugger" : "error",
    // Disallow duplicate arguments in `function` definitions
    "no-dupe-args" : "error",
    // Disallow duplicate keys in object literals
    "no-dupe-keys" : "error",
    // Rule to disallow a duplicate case label
    "no-duplicate-case" : "error",
    // Disallow empty block statements
    "no-empty" : [ "error", { allowEmptyCatch : true }],
    // Disallow empty character classes in regular expressions
    "no-empty-character-class" : "error",
    // Disallow reassigning exceptions in `catch` clauses
    "no-ex-assign" : "error",
    // Disallow unnecessary boolean casts
    "no-extra-boolean-cast" : "error",
    // Disallow unnecessary parentheses
    "no-extra-parens" : [ "error", "functions" ],
    // Disallow unnecessary semicolons
    "no-extra-semi" : "error",
    // Disallow reassigning `function` declarations
    "no-func-assign" : "error",
    // Declarations `function` or `var` declarations in nested blocks
    "no-inner-declarations" : [ "error", "both" ],
    // Disallow invalid regular expression strings in `RegExp` constructors
    "no-invalid-regexp" : "error",
    // Disallow irregular whitespace
    "no-irregular-whitespace" : "error",
    // Disallow negating the left operand in `in` expressions
    "no-negated-in-lhs" : "error",
    // Disallow calling global object properties as functions
    "no-obj-calls" : "error",
    // Disallow use of Object.prototypes builtins directly
    "no-prototype-builtins" : "error",
    // Disallow multiple spaces in regular expression literals
    "no-regex-spaces" : "error",
    // Disallow sparse arrays
    "no-sparse-arrays" : "error",
    // Disallow uconfusing multiline expressions
    "no-unexpected-multiline" : "error",
    // Disallow unreachable code after `return`, `throw`, `continue`,
    // and `break` statements
    "no-unreachable" : "error",
    // Disallow control flow statements in `finally` blocks
    "no-unsafe-finally" : "error",
    // Require calls to `isNaN()` when checking for `NaN`
    "use-isnan" : "error",
    // Enforce valid JSDoc comments
    "valid-jsdoc" : [ "off", { requireReturn : false }],
    // Enforce comparing `typeof` expressions against valid strings
    "valid-typeof" : "error",
  },
}
