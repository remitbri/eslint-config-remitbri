/**
 * The following rules are included for compatibility with JSHint and JSLint.
 * While the names of the rules may not match up with the JSHint/JSLint
 * counterpart, the functionality is the same.
 * @module rules/legacy
 * @see {@link http://eslint.org/docs/rules/#legacy}
 */
"use strict"

module.exports = {
  rules : {
    // Limit Maximum Depth
    "max-depth" : [1, 3],
    // Limit Maximum Length of Line
    "max-len" : [1, 90, 2, {ignoreComments : true, ignoreUrls : true}],
    // Limit Maximum Number of Parameter
    "max-params" : [1, 4],
    // Limit Maximum Number of Statement
    "max-statements" : [0, 10],
    // Disallow Bitwise Operators
    "no-bitwise" : 2,
    // Disallow ++ and --
    "no-plusplus" : 0,
  },
}
