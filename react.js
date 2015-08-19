/**
 * This configuration is specific to React.
 * @module react
 */
"use strict"

var deepExtend = require("deep-extend")

module.exports = deepExtend(
  {
    env : {
      browser : true,
    },
    ecmaFeatures : {
      jsx : true, // enable JSX
      modules : true, // enable modules and global strict mode
      experimentalObjectRestSpread : true,
    },
  },
  require("./es6"),
  require("./node"),
  require("./rules/reactPlugin")
)
