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
    "react/display-name" : [ "error", { ignoreTranspilerName : false }],
    // Forbid certain props on Components
    "react/forbid-component-props" : [ "error", { forbid : [ "className", "style" ]}],
    // Forbid certain elements
    "react/forbid-elements" : "off",
    // Forbid foreign propTypes
    "react/forbid-foreign-prop-types" : "off",
    // Forbid certain propTypes
    "react/forbid-prop-types" : [ "error", { forbid : [ "any", "array", "object" ]}],
    // Prevent usage of Array index in keys
    "react/no-array-index-key" : "error",
    // Prevent passing of children as props
    "react/no-children-prop" : "error",
    // Prevent usage of dangerous JSX properties
    "react/no-danger" : "warn",
    // Prevent problem with children and props.dangerouslySetInnerHTML
    "react/no-danger-with-children" : "error",
    // Prevent usage of deprecated methods
    "react/no-deprecated" : "error",
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state" : "error",
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state" : "error",
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state" : "error",
    // Prevent usage of findDOMNode
    "react/no-find-dom-node" : "error",
    // Prevent usage of isMounted
    "react/no-is-mounted" : "error",
    // Prevent multiple component definition per file
    "react/no-multi-comp" : "error",
    // Prevent usage of the return value of React.render
    "react/no-render-return-value" : "error",
    // Prevent usage of setState
    "react/no-set-state" : "off",
    // Prevent using string references
    "react/no-string-refs" : "error",
    // Prevent usage of unknown DOM property (no-unknown-property)
    "react/no-unknown-property" : "error",
    // Prevent invalid characters from appearing in markup
    "react/no-unescaped-entities" : "error",
    // Prevent definitions of unused prop types
    "react/no-unused-prop-types" : "error",
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class" : [ "error", "always" ],
    // Enforce stateless React Components to be written as a pure function
    "react/prefer-stateless-function" : "error",
    // Prevent missing props validation in a React component definition
    "react/prop-types" : "error",
    // Enforce a defaultProps definition for every prop that is not a required prop
    "react/require-default-props" : "error",
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope" : "error",
    // Enforce React components to have a shouldComponentUpdate method
    "react/require-optimization" : "off",
    // Enforce ES5 or ES6 class for returning value in render function
    "react/require-render-return" : "error",
    // Prevent extra closing tags for components without children
    "react/self-closing-comp" : [ "error", {
      component : true,
      html : true,
    }],
    // Enforce component methods order
    "react/sort-comp" : [ "error", { order : [
      "type-annotations",
      "static-methods",
      "lifecycle",
      "everything-else",
      "render",
    ]}],
    // Enforce propTypes declarations alphabetical sorting
    "react/sort-prop-types" : "off",
    // Enforce style prop value being an object
    "react/style-prop-object" : "error",
    // Prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children
    "react/void-dom-elements-no-children" : "error",
  },
}
