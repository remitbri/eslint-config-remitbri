"use strict"

const reactPluginGeneric = require("./rules/reactPlugin-generic")
const reactPluginJsxSpecific = require("./rules/reactPlugin-jsxSpecific")

const files = [
  {
    name : "reactPlugin-generic",
    rules : reactPluginGeneric.rules,
  },
  {
    name : "reactPlugin-jsxSpecific",
    rules : reactPluginJsxSpecific.rules,
  },
]

const pluginPrefix = "react/"

for (const file of files) {
  for (const rule of Object.keys(file.rules)) {
    if (rule.indexOf(pluginPrefix) < 0) {
      const message = `rule named "${rule}" from "${file.name}" should have started with "${pluginPrefix}"\n`
      throw new Error(message)
    }
  }
}
