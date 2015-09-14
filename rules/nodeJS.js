/**
 * These rules are specific to JavaScript running on Node.js
 * or using CommonJS in the browser.
 * @module rules/nodejs
 * @see {@link http://eslint.org/docs/rules/#nodejs}
 */
"use strict"

module.exports = {
  rules : {
    // Enforce Return After Callback
    "callback-return" : [2, ["callback", "cb", "next"]],
    // Disallow require() outside of the top-level module scope
    "global-require" : 2,
    // Enforce Callback Error Handling
    "handle-callback-err" : [2, "^(err|error|anySpecificError)$"],
    // Disallow Mixed Requires
    "no-mixed-requires" : [2, false],
    // Disallow new require
    "no-new-require" : 2,
    // Disallow string concatenation when using _dirname and _filename
    "no-path-concat" : 2,
    // Disallow process.exit()
    "no-process-exit" : 2,
    // Disallow Node modules
    "no-restricted-modules" : 0,
    // Disallow Synchronous Methods
    "no-sync" : 0,
  },
}
