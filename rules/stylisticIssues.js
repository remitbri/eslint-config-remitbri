/**
 * These rules are purely matters of style and are quite subjective.
 * @module rules/stylisticIssues
 * @see {@link http://eslint.org/docs/rules/#stylistic-issues}
 */
"use strict"

module.exports = {
  rules : {
    // Disallow or enforce spaces inside of brackets.
    "array-bracket-spacing" : [ "error", "always", {
      singleValue : false,
      objectsInArrays : false,
      arraysInArrays : false,
    }],
    // Disallow or enforce spaces inside of single line blocks
    "block-spacing" : [ "error", "never" ],
    // Require Brace Style
    "brace-style" : [ "error", "1tbs", { allowSingleLine : true }],
    // Require Camelcase
    camelcase : [ "error", { properties : "always" }],
    // Enforces spacing around commas
    "comma-spacing" : [ "error", {
      before : false,
      after : true,
    }],
    // Comma style
    "comma-style" : [ "error", "last" ],
    // Disallow or enforce spaces inside of computed properties.
    "computed-property-spacing" : [ "error", "never" ],
    // Require Consistent This
    "consistent-this" : [ "error", "that" ],
    // Require file to end with single newline
    "eol-last" : "error",
    // Require or disallow named `function` expressions
    "func-names" : "warn",
    // Enforce the consistent use of either `function` declarations or expressions
    "func-style" : [ "off", "declaration" ],
    // Disallow specified identifiers
    "id-blacklist" : "off",
    // Enforce minimum and maximum identifier lengths
    "id-length" : "off",
    // Require identifiers to match a specified regular expression
    "id-match" : "off",
    // Enforce consistent indentation
    indent : [ "error", 2, {
      SwitchCase : 1,
      VariableDeclarator : 1,
      outerIIFEBody : 1,
    }],
    // Enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes" : [ "error", "prefer-double" ],
    // Enforce consistent spacing between keys and values in object literal properties
    "key-spacing" : [ "error", {
      beforeColon : true,
      afterColon : true,
      mode : "strict",
    }],
    // Enforce consistent spacing before and after keywords
    "keyword-spacing" : [ "error", {
      before : true,
      after : true,
    }],
    // Enforce consistent linebreak style
    "linebreak-style" : [ "error", "unix" ],
    // Require empty lines around comments
    "lines-around-comment" : "off",
    // Enforce a maximum depth that blocks can be nested
    "max-depth" : [ "warn", { max : 3 }],
    // Enforce a maximum line length
    "max-len" : [ "warn", {
      code : 90,
      tabWidth : 4,
      ignoreTrailingComments : true,
      ignoreUrls : true,
    }],
    // Enforce a maximum file length
    "max-lines" : "off",
    // Enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks" : [ "error", { max : 3 }],
    // Enforce a maximum number of parameters in `function` definitions
    "max-params" : [ "warn", { max : 3 }],
    // Enforce a maximum number of statements allowed in `function` blocks
    "max-statements" : [ "off", { max : 10 }],
    // Enforce a maximum number of statements allowed per line
    "max-statements-per-line" : "off",
    // Require constructor `function` names to begin with a capital letter
    "new-cap" : [ "error", {
      newIsCap : true,
      capIsNew : true,
      properties : true,
    }],
    // Require parentheses when invoking a constructor with no arguments
    "new-parens" : "error",
    // Require or disallow an empty line after `var` declarations
    "newline-after-var" : "off",
    // Require an empty line before `return` statements
    "newline-before-return" : "off",
    // Require a newline after each call in a method chain
    "newline-per-chained-call" : [ "error", { ignoreChainWithDepth : 1 }],
    // Disallow `Array` constructors
    "no-array-constructor" : "error",
    // Disallow bitwise operators
    "no-bitwise" : "error",
    // Disallow `continue` max-statements
    "no-continue" : "error",
    // Disallows inline comments after code
    "no-inline-comments" : "off",
    // Disallow `if` statements as the only statement in `else` blocks
    "no-lonely-if" : "error",
    // Disallow mixes of different operators
    "no-mixed-operators" : "error",
    // Disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs" : "error",
    // Disallows multiple empty lines
    "no-multiple-empty-lines" : [ "error", {
      max : 3,
      maxBOF : 0,
      maxEOF : 0,
    }],
    // Disallow negated conditions
    "no-negated-condition" : "warn",
    // Disallow nested ternary expressions
    "no-nested-ternary" : "error",
    // Disallow `Object` constructors
    "no-new-object" : "error",
    // Disallow the unary operators `++` and `--`
    "no-plusplus" : [ "error", { allowForLoopAfterthoughts : true }],
    // Disallow specified syntax
    "no-restricted-syntax" : "off",
    // Disallow spacing between `function` identifiers and their applications
    "no-spaced-func" : "error",
    // Disallow ternary operators
    "no-ternary" : "off",
    // Disallow trailing whitespace at the end of lines
    "no-trailing-spaces" : "error",
    // Disallow dangling underscores in identifiers
    "no-underscore-dangle" : "warn",
    // Disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary" : "error",
    // Disallow whitespace before properties
    "no-whitespace-before-property" : "error",
    // Enforce consistent line breaks inside braces
    "object-curly-newline" : [ "off", {
      multiline : true,
      minProperties : 2,
    }],
    // Disallow or enforce spaces inside of curly braces in objects.
    "object-curly-spacing" : [ "error", "always", {
      objectsInObjects : false,
      arraysInObjects : false,
    }],
    // Enforce placing object properties on separate lines
    "object-property-newline" : "error",
    // Require or Disallow One Variable Declaration per Scope
    "one-var" : [ "error", "never" ],
    // Require or disallow an newline around variable declarations
    "one-var-declaration-per-line" : [ "error", "always" ],
    // Operator Assignment Shorthand
    "operator-assignment" : [ "off", "always" ],
    // Operator Linebreak
    "operator-linebreak" : [ "error", "after" ],
    // Enforce padding within blocks
    "padded-blocks" : [ "error", "never" ],
    // Quoting Style for Property Names
    "quote-props" : [ "error", "as-needed" ],
    // Enforce Quote Style
    quotes : [ "error", "double" ],
    // Require JSDoc comment
    "require-jsdoc" : "off",
    // Enforce or Disallow Semicolons
    semi : [ "error", "never" ],
    // Enforce spacing before and after semicolons
    "semi-spacing" : [ "error", {
      before : false,
      after : true,
    }],
    // Variable Sorting
    "sort-vars" : "off",
    // Require Or Disallow Space Before Blocks
    "space-before-blocks" : [ "error", "always" ],
    // Require or disallow a space before function parenthesis
    "space-before-function-paren" : [ "error", "never" ],
    // Disallow or enforce spaces inside of parentheses
    "space-in-parens" : [ "error", "never" ],
    // Require Spaces Around Infix Operators
    "space-infix-ops" : "error",
    // Require or disallow spaces before/after unary operators
    "space-unary-ops" : [ "error", {
      words : true,
      nonwords : false,
    }],
    // Requires or disallows a whitespace (space or tab) beginning a comment
    "spaced-comment" : [ "error", "always", {
      exceptions : [ "-", "+" ],
      markers : ["/"],
    }],
    // Require or disallow the Unicode Byte Order Mark (BOM)
    "unicode-bom" : [ "error", "never" ],
    // Require Regex Literals to be Wrapped
    "wrap-regex" : "error",
  },
}
