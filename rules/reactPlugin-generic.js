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
    "react/display-name" : ["error", {ignoreTranspilerName : false}],
    // Forbid certain propTypes
    "react/forbid-prop-types" : "error",
    // Prevent usage of dangerous JSX properties
    "react/no-danger" : "warn",
    /** DEPRECATED **/ // Prevent usage of deprecated methods
    /** DEPRECATED **/ "react/no-deprecated" : "error",
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state" : "error",
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state" : "error",
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state" : "error",
    // Prevent usage of isMounted
    "react/no-is-mounted" : "error",
    // Prevent multiple component definition per file
    "react/no-multi-comp" : "error",
    // Prevent usage of setState
    "react/no-set-state" : "off",
    // Prevent using string references
    "react/no-string-refs" : "error",
    // Prevent usage of unknown DOM property (no-unknown-property)
    "react/no-unknown-property" : "error",
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class" : ["error", "always"],
    // Enforce stateless React Components to be written as a pure function
    "react/prefer-stateless-function" /** DEPRECATED **/ : "error",
    // Prevent missing props validation in a React component definition
    "react/prop-types" : "error",
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope" : "error",
    // Restrict file extensions that may be required
    "react/require-extension" : ["error", {extensions : [".js", ".jsx"]}],
    // Enforce ES5 or ES6 class for returning value in render function
    "react/require-render-return" : "error",
    // Prevent extra closing tags for components without children
    "react/self-closing-comp" : "error",
    // Enforce component methods order
    "react/sort-comp" : "error",
    // Enforce propTypes declarations alphabetical sorting
    "react/sort-prop-types" : "off",
    // Prevent missing parentheses around multiline JSX
    "react/wrap-multilines" : "error",
  },
}