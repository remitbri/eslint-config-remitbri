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
    "accessor-pairs" : [ "error", { getWithoutSet : true }],
    // Enforces return statements in callbacks of array's methods (
    "array-callback-return" : "error",
    // Treat var as Block Scoped
    "block-scoped-var" : "error",
    // Enforce that class methods utilize `this`
    "class-methods-use-this" : "error",
    // Limit Cyclomatic Complexity
    complexity : [ "error", { max : 5 }],
    // Require `return` statements to either always or never specify values
    "consistent-return" : "error",
    // Require Following Curly Brace Conventions
    curly : [ "error", "all" ],
    // Require Default Case in Switch Statements
    "default-case" : "error",
    // Enforce newline before and after dot
    "dot-location" : [ "error", "property" ],
    // Require Dot Notation
    "dot-notation" : [ "error", { allowKeywords : true }],
    // Require === and !==
    eqeqeq : [ "error", "smart" ],
    // Require Guarding for-in
    "guard-for-in" : "warn",
    // Disallow Use of Alert
    "no-alert" : "error",
    // Disallow Use of caller/callee
    "no-caller" : "error",
    // Disallow lexical declarations in case/default clauses
    "no-case-declarations" : "error",
    // Disallow Regexs That Look Like Division
    "no-div-regex" : "error",
    // Disallow return before else
    "no-else-return" : "error",
    // Disallow empty functions
    "no-empty-function" : "error",
    // Disallow empty destructuring patterns
    "no-empty-pattern" : "error",
    // Disallow Null Comparisons
    "no-eq-null" : "warn",
    // Disallow eval()
    "no-eval" : "error",
    // Disallow Extending of Native Objects
    "no-extend-native" : "error",
    // Disallow unnecessary function binding
    "no-extra-bind" : "error",
    // Disallow Unnecessary Labels
    "no-extra-label" : "error",
    // Disallow Case Statement Fallthrough
    "no-fallthrough" : "error",
    // Disallow Floating Decimals
    "no-floating-decimal" : "error",
    // Disallow assignment to native objects or read-only global variables
    "no-global-assign" : "error",
    // Disallow the type conversion with shorter notations.
    "no-implicit-coercion" : "error",
    // Disallow variable and `function` declarations in the global scope
    "no-implicit-globals" : "error",
    // Disallow Implied eval()
    "no-implied-eval" : "error",
    // Disallow this keywords outside of classes or class-like objects
    "no-invalid-this" : "error",
    // Disallow Iterator
    "no-iterator" : "error",
    // Disallow Labeled Statements
    "no-labels" : [ "error", {
      allowLoop : true,
      allowSwitch : true,
    }],
    // Disallow Unnecessary Nested Blocks
    "no-lone-blocks" : "error",
    // Disallow Functions in Loops
    "no-loop-func" : "error",
    // Disallow Magic Numbers
    "no-magic-numbers" : [ "warn", { detectObjects : false }],
    // Disallow multiple spaces
    "no-multi-spaces" : "error",
    // Disallow Multiline Strings
    "no-multi-str" : "error",
    // Disallow Reassignment of Native Objects
    // **deprecated** in ESLint v3.3.0
    "no-native-reassign" : "off",
    // Disallow new For Side Effects
    "no-new" : "error",
    // Disallow Function Constructor
    "no-new-func" : "error",
    // Disallow Primitive Wrapper Instances
    "no-new-wrappers" : "error",
    // Disallow octal literals
    "no-octal" : "error",
    // Disallow octal escape sequences in string literals
    "no-octal-escape" : "error",
    // Disallow Reassignment of Function Parameters
    "no-param-reassign" : [ "error", { props : true }],
    // Disallow Use of __proto__
    "no-proto" : "error",
    // Disallow variable redeclaration
    "no-redeclare" : "error",
    // Disallow certain object properties
    "no-restricted-properties" : "off",
    // Disallow Assignment in return Statement
    "no-return-assign" : [ "error", "always" ],
    // Disallow Script URLs
    "no-script-url" : "error",
    // Disallow Self Assignment
    "no-self-assign" : [ "error", { props : false }],
    // Disallow Self Compare
    "no-self-compare" : "error",
    // Disallow Use of the Comma Operator
    "no-sequences" : "error",
    // Restrict what can be thrown as an exception
    "no-throw-literal" : "error",
    // Disallow unmodified conditions of loops
    "no-unmodified-loop-condition" : "error",
    // Disallow Unused Expressions
    "no-unused-expressions" : "error",
    // Disallow Unused Labels
    "no-unused-labels" : "error",
    // Disallow unnecessary .call() and .apply().
    "no-useless-call" : "error",
    // Disallow unnecessary concatenation of strings
    "no-useless-concat" : "error",
    // Disallow unnecessary escape usage
    "no-useless-escape" : "error",
    // Disallow redundant return statements
    "no-useless-return" : "error",
    // Disallow use of the void operator.
    "no-void" : "error",
    // Disallow Warning Comments
    "no-warning-comments" : [ "warn", {
      terms : [ "todo", "fixme", "xxx" ],
      location : "anywhere",
    }],
    // No `with` statements
    "no-with" : "error",
    // Require Radix Parameter
    radix : [ "error", "as-needed" ],
    // Require Variable Declarations to be at the top of their scope
    "vars-on-top" : "off",
    // Require IIFEs to be Wrapped
    "wrap-iife" : [ "error", "outside", { functionPrototypeMethods : true }],
    // Require or disallow Yoda Conditions
    yoda : [ "error", "never" ],
  },
}
