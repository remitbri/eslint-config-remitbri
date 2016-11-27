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
    // Enforce or disallow capitalization of the first letter of a comment
    "capitalized-comments" : "off",
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
    // Require or disallow newline at the end of files
    "eol-last" : [ "error", "always" ],
    // Require or disallow spacing between function identifiers and their invocations
    "func-call-spacing" : [ "error", "never" ],
    // Require function names to match the name of the variable or property
    // to which they are assigned
    "func-name-matching" : [ "error", "always", { includeCommonJSModuleExports : false }],
    // Require or disallow named `function` expressions
    "func-names" : [ "warn", "as-needed" ],
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
      MemberExpression : 1,
      FunctionDeclaration : {
        parameters : 1,
        body : 1,
      },
      FunctionExpression : {
        parameters : 1,
        body : 1,
      },
      CallExpression : { arguments : 1 },
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
    // Enforce position of line comments
    "line-comment-position" : "off",
    // Enforce consistent linebreak style
    "linebreak-style" : [ "error", "unix" ],
    // Require empty lines around comments
    "lines-around-comment" : "off",
    // Require or disallow newlines around directives
    "lines-around-directive" : [ "error", {
      before : "never",
      after : "always",
    }],
    // Enforce a maximum depth that blocks can be nested
    "max-depth" : [ "warn", { max : 3 }],
    // Enforce a maximum line length
    "max-len" : [ "warn", {
      code : 90,
      tabWidth : 4,
      ignoreTrailingComments : true,
      ignoreUrls : true,
      ignoreStrings : true,
      ignoreTemplateLiterals : true,
      ignoreRegExpLiterals : true,
    }],
    // Enforce a maximum file length
    "max-lines" : "off",
    // Enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks" : [ "error", { max : 3 }],
    // Enforce a maximum number of parameters in function definitions
    "max-params" : [ "warn", { max : 3 }],
    // Enforce a maximum number of statements allowed in function blocks
    "max-statements" : [ "off", { max : 10 }],
    // Enforce a maximum number of statements allowed per line
    "max-statements-per-line" : "off",
    // Enforce or disallow newlines between operands of ternary expressions
    "multiline-ternary" : [ "error", "always" ],
    // Require constructor names to begin with a capital letter
    "new-cap" : [ "error", {
      newIsCap : true,
      capIsNew : true,
      properties : true,
    }],
    // Require parentheses when invoking a constructor with no arguments
    "new-parens" : "error",
    // Require or disallow an empty line after variable declarations
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
    // Disallow spacing between function identifiers and their applications
    // **deprecated** in ESLint v3.3.0
    "no-spaced-func" : "off",
    // Disallow all tabs
    "no-tabs" : "error",
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
    // Enforce consistent spacing inside braces
    "object-curly-spacing" : [ "error", "always", {
      objectsInObjects : false,
      arraysInObjects : false,
    }],
    // Enforce placing object properties on separate lines
    "object-property-newline" : "error",
    // Enforce variables to be declared either together or separately in functions
    "one-var" : [ "error", "never" ],
    // Require or disallow newlines around variable declarations
    "one-var-declaration-per-line" : [ "error", "always" ],
    // Require or disallow assignment operator shorthand where possible
    "operator-assignment" : [ "off", "always" ],
    // Enforce consistent linebreak style for operators
    "operator-linebreak" : [ "error", "after" ],
    // Require or disallow padding within blocks
    "padded-blocks" : [ "error", "never" ],
    // Require quotes around object literal property names
    "quote-props" : [ "error", "as-needed" ],
    // Enforce the consistent use of either backticks, double, or single quotes
    quotes : [ "error", "double" ],
    // Require JSDoc comments
    "require-jsdoc" : "off",
    // Require or disallow semicolons instead of ASI
    semi : [ "error", "never" ],
    // Enforce spacing before and after semicolons
    "semi-spacing" : [ "error", {
      before : false,
      after : true,
    }],
    // Require object keys to be sorted
    "sort-keys" : "off",
    // Variable Sorting
    "sort-vars" : "off",
    // Require Or Disallow Space Before Blocks
    "space-before-blocks" : [ "error", "always" ],
    // Require or disallow a space before function parenthesis
    "space-before-function-paren" : [ "error", {
      anonymous : "never",
      named : "never",
      asyncArrow : "never",
    }],
    // Disallow or enforce spaces inside of parentheses
    "space-in-parens" : [ "error", "never" ],
    // Require spacing around infix operators
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
