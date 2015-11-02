/**
 * This configuration is specific to Node.js.
 * To be used with other ones, e.g `es5` or `es6`
 * @module node
 */
"use strict"

module.exports = {
  extends : "./rules/nodeJS",
  env : {
    node : true,
  },
  ecmaFeatures : {
    /*
    **true by default in the node environment**

    globalReturn : true, // allow return statements in the global scope
    */
  },
}
