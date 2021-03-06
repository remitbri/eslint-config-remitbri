/**
 * These rules relate to using strict mode and strict mode directives.
 * @module rules/strictMode
 * @see {@link http://eslint.org/docs/rules/#strict-mode}
 */
"use strict"

module.exports = {
  rules : {
    // Require or disallow strict mode directives
    strict : [ "error", "safe" ],
  },
}
