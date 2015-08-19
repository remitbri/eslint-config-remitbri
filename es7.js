/**
 * This configuration is specific to ES7.
 * To be used with other ones, e.g `react`
 * @module es7
 */
"use strict"

var deepExtend = require("deep-extend")

module.exports = deepExtend(
  {
    parser : "babel-eslint",
  },
  require("./es6")
)
