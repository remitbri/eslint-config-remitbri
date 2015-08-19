/**
 * These rules are purely matters of style and are quite subjective.
 * @module rules/stylisticIssues
 * @see {@link http://eslint.org/docs/rules/#stylistic-issues}
 */
"use strict"

module.exports = {
  rules : {
    // Disallow or enforce spaces inside of brackets.
    "array-bracket-spacing" : [2, "never"],
    // Disallow or enforce spaces inside of single line blocks
    "block-spacing" : [2, "never"],
    // Require Brace Style
    "brace-style" : [2, "1tbs"],
    // Require Camelcase
    camelcase : [2, {properties : "never"}],
    // Enforces spacing around commas
    "comma-spacing" : [2, {before : false, after : true}],
    // Comma style
    "comma-style" : [2, "last"],
    // Disallow or enforce spaces inside of computed properties.
    "computed-property-spacing" : [2, "never"],
    // Require Consistent This
    "consistent-this" : [2, "that"],
    // Require file to end with single newline
    "eol-last" : 2,
    // Require Function Expressions to have a Name
    "func-names" : 1,
    // Enforce Function Style
    "func-style" : [0, "declaration"],
    // Limit minimum and maximum length for identifiers
    "id-length" : 0,
    // Require IDs to match a pattern
    "id-match" : 0,
    // Validate Indentation
    indent : [2, 2, {SwitchCase : 1, VariableDeclarator : 1}],
    // Enforce Property Spacing
    "key-spacing" : [2, {beforeColon : true, afterColon : true}],
    // Enforce empty lines around comments
    "lines-around-comment" : 0,
    // Disallow mixing CRLF and LF linebreaks
    "linebreak-style" : [2, "unix"],
    // Set Maximum Depth of Nested Callbacks
    "max-nested-callbacks" : [2, 3],
    // Require Constructors to Use Initial Caps
    "new-cap" : 2,
    // Require Parens for Constructors
    "new-parens" : 2,
    // Require or disallow an empty newline after variable declarations
    "newline-after-var" : 0,
    // Disallow creation of dense arrays using the Array constructor
    "no-array-constructor" : 2,
    // Disallow continue
    "no-continue" : 2,
    // Disallows comments after code. Comments must come on their own lines
    "no-inline-comments" : 0,
    // Disallow if as the Only Statement in an else Block
    "no-lonely-if" : 2,
    // Disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs" : [2, false],
    // Disallows multiple blank lines
    "no-multiple-empty-lines" : [0, {max : 2}],
    // Disallow Nested Ternaries
    "no-nested-ternary" : 2,
    // Disallow the use of the Object constructor
    "no-new-object" : 2,
    // Disallow Spaces in Function Calls
    "no-spaced-func" : 2,
    // Disallow Ternary Operators
    "no-ternary" : 0,
    // Disallow trailing spaces at the end of lines
    "no-trailing-spaces" : 2,
    // Disallow Dangling Underscores in Identifiers
    "no-underscore-dangle" : 1,
    // Disallow boolean literals in conditional expressions
    "no-unneeded-ternary" : 2,
    // Disallow or enforce spaces inside of curly braces in objects.
    "object-curly-spacing" : [2, "never"],
    // Require or Disallow One Variable Declaration per Scope
    "one-var" : [2, "never"],
    // Operator Assignment Shorthand
    "operator-assignment" : [0, "always"],
    // Operator Linebreak
    "operator-linebreak" : [2, "after"],
    // Enforce padding within blocks
    "padded-blocks" : [2, "never"],
    // Quoting Style for Property Names
    "quote-props" : [2, "as-needed"],
    // Enforce Quote Style
    quotes : [2, "double"],
    // Enforce spacing before and after semicolons
    "semi-spacing" : [2, {before : false, after : true}],
    // Enforce Semicolons
    semi : [2, "never"],
    // Variable Sorting
    "sort-vars" : 0,
    // Require or disallow spaces following keywords
    "space-after-keywords" : [2, "always"],
    // Require Or Disallow Space Before Blocks
    "space-before-blocks" : [2, "always"],
    // Require or disallow a space before function parenthesis
    "space-before-function-paren" : [2, "never"],
    // Disallow or enforce spaces inside of parentheses
    "space-in-parens" : [2, "never"],
    // Require Spaces Around Infix Operators
    "space-infix-ops" : 2,
    // Require spaces following return, throw, and case
    "space-return-throw-case" : 2,
    // Require or disallow spaces before/after unary operators
    "space-unary-ops" : [2, {words : true, nonwords : false}],
    // Requires or disallows a whitespace (space or tab) beginning a comment
    "spaced-comment" : [2, "always", {
      exceptions : ["-", "+"],
      markers : ["/"],
    }],
    // Require Regex Literals to be Wrapped
    "wrap-regex" : 2,
  },
}
