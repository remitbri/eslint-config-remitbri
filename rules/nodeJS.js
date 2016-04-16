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
    "callback-return" : ["error", ["callback", "cb", "next"]],
    //  Enforce require() on the top-level module scope
    "global-require" : "error",
    // Enforce Callback Error Handling
    "handle-callback-err" : ["error", "^(err|error|anySpecificError)$"],
    // Disallow Mixed Requires
    "no-mixed-requires" : ["error", {grouping : false, allowCall : false}],
    // Disallow new require
    "no-new-require" : "error",
    // Disallow string concatenation when using `__dirname` and `__filename`
    "no-path-concat" : "error",
    // Disallow `process.env`
    "no-process-env" : "error",
    // Disallow process.exit()
    "no-process-exit" : "error",
    // Disallow Node modules
    "no-restricted-modules" : "off",
    // Disallow Synchronous Methods
    "no-sync" : "off",
  },
}
