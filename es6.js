/**
 * This configuration is specific to ES6.
 * @module es6
 */
"use strict"

var deepExtend = require("deep-extend")

module.exports = deepExtend(
  {
    env : {
      es6 : true,
    },
    ecmaFeatures : {
      /*
      true by default in the es6 environment

      arrowFunctions : true, // enable arrow functions
      binaryLiterals : true, // enable binary literals
      blockBindings : true, // enable let and const (aka block bindings)
      classes : true, // enable classes
      defaultParams : true, // enable default function parameters
      destructuring : true, // enable destructuring
      forOf : true, // enable for-of loops
      generators : true, // enable generators
      newTarget: true
      objectLiteralComputedProperties : true, // enable computed object literal property names
      objectLiteralDuplicateProperties : true, // enable duplicate object literal properties in strict mode
      objectLiteralShorthandMethods : true, // enable object literal shorthand methods
      objectLiteralShorthandProperties : true, // enable object literal shorthand properties
      octalLiterals : true, // enable octal literals
      regexUFlag : true, // enable the regular expression u flag
      regexYFlag : true, // enable the regular expression y flag
      restParams : true, // enable the rest parameters
      spread : true, // enable the spread operator for arrays
      superInFunctions : true, // enable super references inside of functions
      templateStrings : true, // enable template strings
      unicodeCodePointEscapes : true, // enable code point escapes

      */
    },
  },
  require("./es5"),
  require("./rules/ecmascript6")
)
