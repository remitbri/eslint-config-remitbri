/**
 * This configuration is specific to Node.js.
 * To be used with other ones, e.g `es5` or `es6`
 * @module node
 */
"use strict"

var deepExtend = require("deep-extend")

module.exports = deepExtend(
  {
    env : {
      node : true,
    },
    ecmaFeatures : {
      /*
      true by default in the node environment

      globalReturn : true, // allow return statements in the global scope
      */
    },
  },
  require("./rules/nodejs")
)
