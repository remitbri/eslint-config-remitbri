/**
 * These rules are only relevant to ES2017 environments.
 * @module rules/ecmascript2017
 */
"use strict"

module.exports = {
  rules : {
    // Require or disallow trailing commas
    "comma-dangle" : [ "error", {
      arrays : "always-multiline",
      objects : "always-multiline",
      imports : "always-multiline",
      exports : "always-multiline",
      functions : "always-multiline",
    }],
  },
}
