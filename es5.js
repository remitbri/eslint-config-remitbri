/**
 * This configuration is specific to ES5.
 * @module es5
 */
"use strict"

var deepExtend = require("deep-extend")

module.exports = deepExtend(
  require("./rules/possibleErrors"),
  require("./rules/bestPractices"),
  require("./rules/strictMode"),
  require("./rules/variables"),
  require("./rules/stylisticIssues"),
  require("./rules/legacy")
)
