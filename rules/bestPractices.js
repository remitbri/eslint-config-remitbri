/**
 * These are rules designed to prevent you from making mistakes. They either
 * prescribe a better way of doing something or help you avoid footguns.
 * @module rules/bestPractices
 * @see {@link http://eslint.org/docs/rules/#best-practices}
 */
"use strict"

module.exports = {
  rules : {
    // Enforces getter/setter pairs in objects
    "accessor-pairs" : [2, {getWithoutSet : true}],
    // Treat var as Block Scoped
    "block-scoped-var" : 2,
    // Limit Cyclomatic Complexity
    complexity : [2, 5],
    // Require Consistent Returns
    "consistent-return" : 2,
    // Require Following Curly Brace Conventions
    curly : [2, "all"],
    // Require Default Case in Switch Statements
    "default-case" : 2,
    // Require Dot Notation
    "dot-notation" : [2, {allowKeywords : true}],
    // Enforce newline before and after dot
    "dot-location" : [2, "property"],
    // Require === and !==
    eqeqeq : [2, "smart"],
    // Require Guarding for-in
    "guard-for-in" : 1,
    // Disallow Use of Alert
    "no-alert" : 2,
    // Disallow Use of caller/callee
    "no-caller" : 2,
    // Disallow Regexs That Look Like Division
    "no-div-regex" : 2,
    // Disallow return in else
    "no-else-return" : 2,
    // No empty labels
    "no-empty-label" : 2,
    // Disallow Null Comparisons
    "no-eq-null" : 1,
    // Disallow eval()
    "no-eval" : 2,
    // Disallow Extending of Native Objects
    "no-extend-native" : 2,
    // Disallow unnecessary function binding
    "no-extra-bind" : 2,
    // Disallow Case Statement Fallthrough
    "no-fallthrough" : 2,
    // Disallow Floating Decimals
    "no-floating-decimal" : 2,
    // Disallow the type conversion with shorter notations.
    "no-implicit-coercion" : 2,
    // Disallow Implied eval()
    "no-implied-eval" : 2,
    // Disallow this keywords outside of classes or class-like objects
    "no-invalid-this" : 2,
    // Disallow Iterator
    "no-iterator" : 2,
    // Disallow Labeled Statements
    "no-labels" : 2,
    // Disallow Unnecessary Nested Blocks
    "no-lone-blocks" : 2,
    // Disallow Functions in Loops
    "no-loop-func" : 2,
    // Disallow multiple spaces
    "no-multi-spaces" : 2,
    // Disallow Multiline Strings
    "no-multi-str" : 2,
    // Disallow Reassignment of Native Objects
    "no-native-reassign" : 2,
    // Disallow Function Constructor
    "no-new-func" : 2,
    // Disallow Primitive Wrapper Instances
    "no-new-wrappers" : 2,
    // Disallow new For Side Effects
    "no-new" : 2,
    // Disallow Octal Escapes
    "no-octal-escape" : 2,
    // Disallow Octal Literals
    "no-octal" : 2,
    // Disallow Reassignment of Function Parameters
    "no-param-reassign" : [2, {props : true}],
    // Disallow process.env
    "no-process-env" : 2,
    // Disallow Use of __proto__
    "no-proto" : 2,
    // Disallow Redeclaring Variables
    "no-redeclare" : 2,
    // Disallow Assignment in return Statement
    "no-return-assign" : 2,
    // Disallow Script URLs
    "no-script-url" : 2,
    // Disallow Self Compare
    "no-self-compare" : 2,
    // Disallow Use of the Comma Operator
    "no-sequences" : 2,
    // Restrict what can be thrown as an exception
    "no-throw-literal" : 2,
    // Disallow Unused Expressions
    "no-unused-expressions" : 2,
    // Disallow unnecessary .call() and .apply().
    "no-useless-call" : 2,
    // Disallow use of the void operator.
    "no-void" : 2,
    // Disallow Warning Comments
    "no-warning-comments" : [1, {
      terms : ["todo", "fixme", "xxx"],
      location : "anywhere",
    }],
    // No with Statements
    "no-with" : 2,
    // Require Radix Parameter
    radix : 2,
    // Require Variable Declarations to be at the top of their scope
    "vars-on-top" : 0,
    // Require IIFEs to be Wrapped
    "wrap-iife" : [2, "outside"],
    // Require or disallow Yoda Conditions
    yoda : [2, "never"],
  },
}
