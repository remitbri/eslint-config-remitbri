/**
 * This configuration is specific to Node.js.
 * To be used with other ones, e.g `es5` or `es6`
 * @module node
 */
"use strict"

module.exports = {
  extends : "remitbri/rules/nodeJS",
  env : {
    node : true,
  },
}
