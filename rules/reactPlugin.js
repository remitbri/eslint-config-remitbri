/**
 * These rules relate to reactJS.
 * @module rules/reactPlugin
 * @see {@link https://github.com/yannickcr/eslint-plugin-react}
 */
"use strict"

module.exports = {
  plugins : ["react"],
  rules : {
    // Prevent missing displayName in a React component definition
    "react/display-name" : [2, {acceptTranspilerName : true}],
    // Forbid certain propTypes
    "react/forbid-prop-types" : 2,
    // Enforce boolean attributes notation in JSX
    "react/jsx-boolean-value" : [2, "never"],
    // Validate closing bracket location in JSX
    "react/jsx-closing-bracket-location" : [2, {location : "line-aligned"}],
    // Enforce or disallow spaces inside of curly braces in JSX attributes.
    "react/jsx-curly-spacing" : [2, "never"],
    // Enforce event handler naming conventions in JSX
    "react/jsx-handler-names" : 2,
    // Validate JSX indentation
    "react/jsx-indent" : [2, 2],
    // Validate props indentation in JSX
    "react/jsx-indent-props" : [2, 2],
    // Detect missing key prop
    "react/jsx-key" : 2,
    // Limit maximum of props on a single line in JSX
    "react/jsx-max-props-per-line" : [2, {maximum : 1}],
    // No .bind() or Arrow Functions in JSX Props
    "react/jsx-no-bind" : 2,
    // Prevent duplicate properties in JSX
    "react/jsx-no-duplicate-props" : 2,
    // Prevent usage of unwrapped JSX strings
    "react/jsx-no-literals" : 2,
    // Disallow undeclared variables in JSX
    "react/jsx-no-undef" : 2,
    /** DEPRECATED **/ // Enforce quote style for JSX attributes
    /** DEPRECATED **/ "react/jsx-quotes" : [0, "double"],
    // Enforce PasalCase for user-defined JSX components
    "react/jsx-pascal-case" : 2,
    // Enforce propTypes declarations alphabetical sorting
    "react/jsx-sort-prop-types" : 0,
    // Enforce props alphabetical sorting
    "react/jsx-sort-props" : 0,
    // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react" : 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars" : 2,
    // Prevent usage of dangerous JSX properties
    "react/no-danger" : 1,
    // Prevent usage of deprecated methods
    "react/no-deprecated" : 2,
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state" : 2,
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state" : 2,
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state" : 2,
    // Prevent usage of isMounted
    "react/no-is-mounted" : 2,
    // Prevent multiple component definition per file
    "react/no-multi-comp" : 2,
    // Prevent usage of setState
    "react/no-set-state" : 0,
    // Prevent using string references
    "react/no-string-refs" : 2,
    // Prevent usage of unknown DOM property (no-unknown-property)
    "react/no-unknown-property" : 2,
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class" : [2, "always"],
    // Prevent missing props validation in a React component definition
    "react/prop-types" : 2,
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope" : 2,
    // Restrict file extensions that may be required
    "react/require-extension" : [2, {extensions : [".js", ".jsx"]}],
    // Prevent extra closing tags for components without children
    "react/self-closing-comp" : 2,
    // Enforce component methods order
    "react/sort-comp" : 2,
    // Prevent missing parentheses around multiline JSX
    "react/wrap-multilines" : 2,
  },
}
