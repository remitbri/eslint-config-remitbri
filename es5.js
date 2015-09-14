/**
 * This configuration is specific to ES5.
 * @module es5
 */
"use strict"

module.exports = {
  parser : "espree",
  extends : [
    "remitbri/rules/possibleErrors",
    "remitbri/rules/bestPractices",
    "remitbri/rules/strictMode",
    "remitbri/rules/variables",
    "remitbri/rules/stylisticIssues",
    "remitbri/rules/legacy",
  ],
}
