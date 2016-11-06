# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](http://keepachangelog.com).

## [Unreleased]
### Added
- New settings and rules for ES2017
- `class-methods-use-this` new rule from eslint v3.4.0
- `func-call-spacing` new rule from eslint v3.3.0
- `func-name-matching` new rule from eslint v3.8.0
- `line-comment-position` new rule from eslint v3.5.0
- `lines-around-directive` new rule from eslint v3.5.0
- `max-lines` new rule from eslint v2.12.0
- `multiline-ternary` new rule from eslint v3.1.0
- `no-global-assign` new rule from eslint v3.3.0
- `no-mixed-operators` new rule from eslint v2.12.0
- `no-prototype-builtins` new rule from eslint v2.11.0
- `no-restricted-properties` new rule from eslint v3.5.0
- `no-tabs` new rule from eslint v3.2.0
- `no-template-curly-in-string` new rule from eslint v3.3.0
- `no-unsafe-finally` new rule from eslint v2.9.0
- `no-unsafe-negation` new rule from eslint v3.3.0
- `no-useless-computed-key` new rule from eslint v2.9.0
- `no-useless-rename` new rule from eslint v2.11.0
- `object-curly-newline` new rule from eslint v2.12.0
- `object-property-newline` new rule from eslint v2.10.0
- `prefer-numeric-literals` new rule from eslint v3.5.0
- `rest-spread-spacing` new rule from eslint v2.12.0
- `sort-keys` new rule from eslint v3.3.0
- `symbol-description` new rule from eslint v3.4.0
- `unicode-bom` new rule from eslint v2.11.0
- `react/jsx-filename-extension` new rule from eslint-plugin-react v5.2.0
- `react/jsx-no-target-blank` new rule from eslint-plugin-react v5.1.0
- `react/no-comment-textnodes` new rule from eslint-plugin-react v5.2.0
- `react/no-render-return-value` new rule from eslint-plugin-react v5.2.0
- `react/require-optimization` new rule from eslint-plugin-react v5.2.0

### Changed
- Amended documentation
- Explicited default values for some rules (without value modification)
- `array-bracket-spacing` option changed to always
- `object-curly-spacing` option changed to always
- `valid-jsdoc` rule turned off
- `react/jsx-space-before-closing` option changed to always

### Deprecated
- `no-native-reassign` replaced by  `no-global-assign’ in v3.3.0
- `no-negated-in-lhs` replaced by `no-unsafe-negation’ in v3.3.0
- `no-spaced-func` replaced by  `func-call-spacing’ in v3.3.0


## [4.1.0] - 2016-04-22
### Changed
- fix mistakes in documentation

### Added
- `react/jsx-first-prop-new-line` new rule from eslint-plugin-react v5.0.0



## [4.0.1] - 2016-04-16
### Changed
- modification of `maxEOF` value in `no-multiple-empty-lines`
- changelog fix


## [4.0.0] - 2016-04-16
### Added
- `array-callback-return` new rule from eslint v2.0.0
- `id-blacklist` new rule from eslint v2.0.0
- `keyword-spacing` new rule from eslint v2.0.0
- `max-statements-per-line` new rule from eslint v2.5.0
- `newline-before-return` new rule from eslint v2.3.0
- `newline-per-chained-call` new rule from eslint v2.0.0
- `no-confusing-arrow` new rule from eslint v2.0.0
- `no-duplicate-imports` new rule from eslint v2.5.0
- `no-empty-function` new rule from eslint v2.0.0
- `no-extra-label` new rule from eslint v2.0.0
- `no-implicit-globals` new rule from eslint v2.0.0
- `no-new-symbol` new rule from eslint v2.0.0
- `no-restricted-globals` new rule from eslint v2.3.0
- `no-restricted-imports` new rule from eslint v2.0.0
- `no-self-assign` new rule from eslint v2.0.0
- `no-unmodified-loop-condition` new rule from eslint v2.0.0
- `no-unused-labels` new rule from eslint v2.0.0
- `no-useless-constructor` new rule from eslint v2.0.0
- `no-useless-escape` new rule from eslint v2.5.0
- `no-whitespace-before-property` new rule from eslint v2.0.0
- `one-var-declaration-per-line` new rule from eslint v2.0.0
- `prefer-rest-params` new rule from eslint v2.0.0
- `sort-imports` new rule from eslint v2.0.0
- `template-curly-spacing` new rule from eslint v2.0.0
- `yield-star-spacing` new rule from eslint v2.0.0
- `react/jsx-space-before-closing` new rule from eslint-plugin-react v4.0.0
- `react/prefer-stateless-function` new rule from eslint-plugin-react v4.2.0
- `react/require-render-return` new rule from eslint-plugin-react v4.3.0

### Changed
- Peer dependencies update, inc. eslint to v2.8.0 and eslint-plugin-react to v4.3.0
- `brace-style` : now allowing single line
- `camelcase` : `properties` now set to `always`
- `generator-star-spacing` : now no space after `*`
- `max-len` : `ignoreComments` out, `ignoreTrailingComments` in
- `max-params` : maximum now 3
- `no-empty` : now with `allowEmptyCatch` option
- `no-multiple-empty-lines` : new `maxBOF` option
- `no-plusplus` now activated but with `allowForLoopAfterthoughts` option
- `require-jsdoc` now off
- `valid-jsdoc` : only functions with a `return` statement must be documented with a `@return` tag
- `react/display-name` : new option (breaking change)

Also, with eslint v2.0.0, the following rules were removed:
 - `no-arrow-condition`
 - `no-empty-label`
 - `space-after-keywords`
 - `space-before-keywords`
 - `space-return-throw-case`

Also, with eslint-plugin-react v4.0.0, the following rule was removed:
 - `react/jsx-quotes`



## [3.4.0] - 2016-01-25
### Added
- `react/jsx-equals-spacing` new rule from eslint-plugin-react v3.16.0

### Changed
- Peer dependencies update, inc. eslint-plugin-react to v3.16.1


## [3.3.2] - 2016-01-17
### Changed
- Peer dependencies update, inc. eslint-plugin-react to v3.15.0


## [3.3.1] - 2016-01-10
### Changed
- eslint peer dependency fix fixed


## [3.3.0] - 2016-01-10
### Changed
- Peer dependencies loosened

### Added
- `react/jsx-indent` new rule from eslint-plugin-react v3.14.0
- pragma specified for eslint-plugin-react


## [3.2.0] - 2015-12-26
### Added
- `react/no-string-refs` new rule from eslint-plugin-react v3.13.0

### Changed
- Peer dependencies update, inc. eslint-plugin-react to v3.13.1


## [3.1.0] - 2015-12-21
### Added
- `react/no-deprecated` new rule from eslint-plugin-react v3.12.0
- `react/no-is-mounted` new rule from eslint-plugin-react v3.12.0

### Changed
- "react/prefer-es6-class" setting more explicit
- eslint as a dev dependency
- Peer dependencies update, inc. eslint-plugin-react to v3.12.0



## [3.0.1] - 2015-12-14
### Changed
- Peer dependencies update, inc. eslint-plugin-react to v3.11.3


## [3.0.0] - 2015-12-03
### Added
- `react/jsx-handler-names` new rule from eslint-plugin-react v3.11.0
- `react/jsx-key` new rule from eslint-plugin-react v3.9.0
- `react/jsx-pascal-case` new rule from eslint-plugin-react v3.10.0

### Changed
- `radix` setting changed to `[2, "as-needed"]` in "bestPractices", and added with `[2, "always"]` in "ie8"
- Peer dependencies update, inc. eslint to v1.10.3 and eslint-plugin-react to v3.11.2
- `legacy` rules moved to `stylistic issues`


## [2.0.3] - 2015-11-09
### Changed
- `README.md` update


## [2.0.2] - 2015-11-08
### Changed
- `postinstall` script removed
- `test` script updated


## [2.0.1] - 2015-11-08
### Changed
- `README.md` update


## [2.0.0] - 2015-11-08
### Added
- `no-case-declarations` new rule from eslint v1.9.0
- `react/jsx-no-bind` new rule from eslint-plugin-react v3.7.0

### Changed
- `react/jsx-closing-bracket-location` setting changed to `[2, {location : "line-aligned"}]`
- Peer dependencies update, inc. eslint to v1.9.0 and eslint-plugin-react to v3.8.0
- `es7` configuration has moved to its own module, `eslint-config-remitbri-es7`


## [1.8.1] - 2015-11-03
### Added
- postinstall script (linux/osx) for development

### Changed
- node config properly refering to nodeJS rules


## [1.8.0] - 2015-11-01
### Added
- `arrow-body-style` new rule from eslint v1.8.0
- `no-arrow-condition` new rule from eslint v1.8.0

### Changed
- `no-multiple-empty-lines`: new option `maxEOF` set
- Peer dependencies update, inc. eslint to v1.8.0 and eslint-plugin-react to v3.6.3


## [1.7.0] - 2015-10-18
### Added
- `react/prefer-es6-class` new rule from eslint-plugin-react v3.6.0
- `CHANGELOG.md` file

### Changed
- Peer dependencies update, inc. eslint-plugin-react to v3.6.1


## [1.6.0] - 2015-10-18
### Added
- `no-empty-pattern` new rule from eslint v1.7.0
- `no-magic-numbers` new rule from eslint v1.7.0

### Changed
- Peer dependencies update, inc. eslint to v1.7.1
- Documentation improvement


## [1.5.0] - 2015-10-04
### Added
- `no-negated-condition` new rule from eslint v1.6.0
- `react/forbid-prop-types` new rule from eslint-plugin-react v3.5.0
- `react/no-direct-mutation-state` new rule from eslint-plugin-react v3.5.0

### Changed
- Peer dependencies update, inc. eslint to v1.6.0 and eslint-plugin-react to v3.5.1
- `max-len` rule settings modified
- `no-mixed-requires` configuration declaration changed with eslint v1.6.0


## [1.4.0] - 2015-09-20
### Changed
- Peer dependencies update, inc. eslint to v1.5.0 and eslint-plugin-react to v3.4.2

### Deprecated
- `react/jsx-quotes` deprecated in eslint-plugin-react v3.4.0


## [1.3.0] - 2015-09-14
### Added
- `global-require` new rule from eslint v1.4.0
- `jsx-quotes` new rule from eslint v1.4.0
- `no-restricted-syntax` new rule from eslint v1.4.0
- `require-jsdoc` new rule from eslint v1.4.0
- `space-before-keywords` new rule from eslint v1.4.0

### Changed
- `react/jsx-boolean-value` default setting more precise
- Default parser for ES5 rules more precise
- Documentation improvement
- Peer dependencies update, inc. eslint to v1.4.1 and eslint-plugin-react to v3.3.2


## [1.2.0] - 2015-08-29
### Added
- `no-useless-concat` new rule from eslint v1.3.0
- `deploy` npm script added

### Changed
- `README.md` and documentation improvement
- `deep-extend` dependency removed
- Peer dependencies update, inc. eslint to v1.3.0


## [1.1.0] - 2015-08-27
### Added
- `react/jsx-closing-bracket-location` new rule from eslint-plugin-react v3.3.0
- `react/jsx-indent-props` new rule from eslint-plugin-react v3.3.0
- `react/no-set-state` new rule from eslint-plugin-react v3.3.0

### Changed
- Peer dependencies update, inc. eslint to v1.2.1 and eslint-plugin-react to v3.3.0


## [1.0.1] - 2015-08-19
### Added
- `LICENSE` file

### Changed
- `README.md` improvement

## [1.0.0] - 2015-09-19
Initial version

