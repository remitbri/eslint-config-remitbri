/**
 * These rules are purely matters of style and are quite subjective.
 * @module rules/stylisticIssues
 * @see {@link http://eslint.org/docs/rules/#stylistic-issues}
 */
"use strict"

module.exports = {
  rules : {
    // Disallow or enforce spaces inside of brackets.
    "array-bracket-spacing" : ["error", "never"],
    // Disallow or enforce spaces inside of single line blocks
    "block-spacing" : ["error", "never"],
    // Require Brace Style
    "brace-style" : ["error", "1tbs", {allowSingleLine : true}],
    // Require Camelcase
    camelcase : ["error", {properties : "always"}],
    // Enforces spacing around commas
    "comma-spacing" : ["error", {before : false, after : true}],
    // Comma style
    "comma-style" : ["error", "last"],
    // Disallow or enforce spaces inside of computed properties.
    "computed-property-spacing" : ["error", "never"],
    // Require Consistent This
    "consistent-this" : ["error", "that"],
    // Require file to end with single newline
    "eol-last" : "error",
    // Require Function Expressions to have a Name
    "func-names" : "warn",
    // Enforce the consistent use of either `function` declarations or expressions
    "func-style" : ["off", "declaration"],
    // Disallow specified identifiers
    "id-blacklist" : "off",
    // Enforce minimum and maximum identifier lengths
    "id-length" : "off",
    // Require identifiers to match a specified regular expression
    "id-match" : "off",
    // Enforce consistent indentation
    indent : ["error", 2, {SwitchCase : 1, VariableDeclarator : 1}],
    // Enforce JSX Quote Style
    "jsx-quotes" : ["error", "prefer-double"],
    // Enforce Property Spacing
    "key-spacing" : ["error", {beforeColon : true, afterColon : true}],
    // Enforce spacing before and after keywords
    "keyword-spacing" : ["error", {before : true, after : true}],
    // Enforce linebreak style
    "linebreak-style" : ["error", "unix"],
    // Enforce empty lines around comments
    "lines-around-comment" : "off",
    // Limit Maximum Depth
    "max-depth" : ["warn", {max : 3}],
    // Limit Maximum Length of Line
    "max-len" : ["warn", {
      code : 90,
      tabWidth : 4,
      ignoreTrailingComments : true,
      ignoreUrls : true,
    }],
    // Set Maximum Depth of Nested Callbacks
    "max-nested-callbacks" : ["error", {max : 3}],
    // Limit Maximum Number of Parameter
    "max-params" : ["warn", {max : 3}],
    // Limit Maximum Number of Statement
    "max-statements" : ["off", {max : 10}],
    // Specify the Maximum Number of Statements Allowed per Line
    "max-statements-per-line" : "off",
    // Require Constructors to Use Initial Caps
    "new-cap" : "error",
    // Require Parens for Constructors
    "new-parens" : "error",
    // Require or disallow an empty newline after variable declarations
    "newline-after-var" : "off",
    // Require newline before `return` statement
    "newline-before-return" : "off",
    // Newline Per Chained Method Call
    "newline-per-chained-call" : ["error", {ignoreChainWithDepth : 1}],
    // Disallow creation of dense arrays using the Array constructor
    "no-array-constructor" : "error",
    // Disallow Bitwise Operators
    "no-bitwise" : "error",
    // Disallow continue
    "no-continue" : "error",
    // Disallows comments after code. Comments must come on their own lines
    "no-inline-comments" : "off",
    // Disallow if as the Only Statement in an else Block
    "no-lonely-if" : "error",
    // Disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs" : "error",
    // Disallows multiple blank lines
    "no-multiple-empty-lines" : ["error", {max : 3, maxBOF : 0, maxEOF : 0}],
    // Disallow use of negated expressions in conditions
    "no-negated-condition" : "warn",
    // Disallow Nested Ternaries
    "no-nested-ternary" : "error",
    // Disallow the use of the Object constructor
    "no-new-object" : "error",
    // Disallow ++ and --
    "no-plusplus" : ["error", {allowForLoopAfterthoughts : true}],
    // Disallow certain syntax
    "no-restricted-syntax" : "off",
    // Disallow Spaces in Function Calls
    "no-spaced-func" : "error",
    // Disallow Ternary Operators
    "no-ternary" : "off",
    // Disallow trailing spaces at the end of lines
    "no-trailing-spaces" : "error",
    // Disallow Dangling Underscores in Identifiers
    "no-underscore-dangle" : "warn",
    // Disallow conditional expressions that can be expressed with simpler constructs
    "no-unneeded-ternary" : "error",
    // Disallow whitespace before properties
    "no-whitespace-before-property" : "error",
    // Disallow or enforce spaces inside of curly braces in objects.
    "object-curly-spacing" : ["error", "never"],
    // Require or Disallow One Variable Declaration per Scope
    "one-var" : ["error", "never"],
    // Require or disallow an newline around variable declarations
    "one-var-declaration-per-line" : ["error", "always"],
    // Operator Assignment Shorthand
    "operator-assignment" : ["off", "always"],
    // Operator Linebreak
    "operator-linebreak" : ["error", "after"],
    // Enforce padding within blocks
    "padded-blocks" : ["error", "never"],
    // Quoting Style for Property Names
    "quote-props" : ["error", "as-needed"],
    // Enforce Quote Style
    quotes : ["error", "double"],
    // Require JSDoc comment
    "require-jsdoc" : "off",
    // Enforce or Disallow Semicolons
    semi : ["error", "never"],
    // Enforce spacing before and after semicolons
    "semi-spacing" : ["error", {before : false, after : true}],
    // Import Sorting (
    "sort-imports" : "off",
    // Variable Sorting
    "sort-vars" : "off",
    // Require Or Disallow Space Before Blocks
    "space-before-blocks" : ["error", "always"],
    // Require or disallow a space before function parenthesis
    "space-before-function-paren" : ["error", "never"],
    // Disallow or enforce spaces inside of parentheses
    "space-in-parens" : ["error", "never"],
    // Require Spaces Around Infix Operators
    "space-infix-ops" : "error",
    // Require or disallow spaces before/after unary operators
    "space-unary-ops" : ["error", {words : true, nonwords : false}],
    // Requires or disallows a whitespace (space or tab) beginning a comment
    "spaced-comment" : ["error", "always", {
      exceptions : ["-", "+"],
      markers : ["/"],
    }],
    // Require Regex Literals to be Wrapped
    "wrap-regex" : "error",
  },
}
