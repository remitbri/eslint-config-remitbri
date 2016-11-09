/**
 * These rules relate to reactJS.
 * @module rules/reactPlugin
 * @see {@link https://github.com/yannickcr/eslint-plugin-react}
 */
"use strict"

module.exports = {
  plugins : ["react"],
  rules : {
    // Enforce boolean attributes notation in JSX
    "react/jsx-boolean-value" : [ "error", "never" ],
    // Validate closing bracket location in JSX
    "react/jsx-closing-bracket-location" : [ "error", { location : "line-aligned" }],
    // Enforce or disallow spaces inside of curly braces in JSX attributes.
    "react/jsx-curly-spacing" : [ "error", "never" ],
    // Enforce or disallow spaces around equal signs in JSX attributes
    "react/jsx-equals-spacing" : [ "error", "never" ],
    // Restrict file extensions that may contain JSX
    "react/jsx-filename-extension" : [ "error", { extensions : [ ".js", ".jsx" ]}],
    // Configure the position of the first property
    "react/jsx-first-prop-new-line" : [ "error", "multiline" ],
    // Enforce event handler naming conventions in JSX
    "react/jsx-handler-names" : "error",
    // Validate JSX indentation
    "react/jsx-indent" : [ "error", 2 ],
    // Validate props indentation in JSX
    "react/jsx-indent-props" : [ "error", 2 ],
    // Detect missing key prop
    "react/jsx-key" : "error",
    // Limit maximum of props on a single line in JSX
    "react/jsx-max-props-per-line" : [ "error", { maximum : 1 }],
    // No .bind() or Arrow Functions in JSX Props
    "react/jsx-no-bind" : "error",
    // Prevent comments from being inserted as text nodes
    "react/jsx-no-comment-textnodes" : "error",
    // Prevent duplicate properties in JSX
    "react/jsx-no-duplicate-props" : "error",
    // Prevent usage of unwrapped JSX strings
    "react/jsx-no-literals" : "error",
    // Prevent usage of unsafe target='_blank'
    "react/jsx-no-target-blank" : "error",
    // Disallow undeclared variables in JSX
    "react/jsx-no-undef" : "error",
    // Enforce PasalCase for user-defined JSX components
    "react/jsx-pascal-case" : "error",
    // Enforce props alphabetical sorting
    "react/jsx-sort-props" : "off",
    // Validate spacing before closing bracket in JSX
    "react/jsx-space-before-closing" : [ "error", "always" ],
    // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react" : "error",
    // Prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars" : "error",
    // Prevent missing parentheses around multiline JSX
    "react/jsx-wrap-multilines" : "error",
  },
}
