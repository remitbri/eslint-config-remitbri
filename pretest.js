"use strict"

const shelljs = require("shelljs")
const path = require("path")

const currentDir = shelljs.pwd().stdout
const nodeModulesDir = path.join(currentDir, "node_modules")
const configDir = path.join(nodeModulesDir, "eslint-config-remitbri")

if (!shelljs.test("-d", configDir)) {
  shelljs.ln("-s", currentDir, configDir)
}
