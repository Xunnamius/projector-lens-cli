<!-- badges-start -->

[![Black Lives Matter!][badge-blm]][link-blm]
[![!!UNMAINTAINED!!][badge-unmaintained]][link-unmaintained]

<!-- badges-end -->

# ⛔️ DEPRECATED/UNMAINTAINED

> [!CAUTION]
>
> This project has been superseded (and all of its useful bits subsumed) by the
> [`xscripts project init --template cli`](https://github.com/Xunnamius/xscripts)
> command.

A CLI template with GitHub Action workflows, CI/CD publishing and deployment
automation scripts, and the like.

> Published package not meant for public consumption! Do not install this!

## Install

> Note: NPM versions >=7 may need `npm install --legacy-peer-deps` until
> [upstream peer dependency problems are resolved][1].

```shell
npm install @xunnamius/dummy-pkg-2
```

<details><summary><strong>[additional details]</strong></summary>

> Note: **you probably don't need to read through this!** This information is
> primarily useful for those attempting to bundle this package or for people who
> have an opinion on ESM versus CJS.

This is a [dual CJS2/ES module][dual-module] package. That means this package
exposes both CJS2 and ESM entry points.

Loading this package via `require(...)` will cause Node and Webpack to use the
[CJS2 bundle][cjs2] entry point, disable [tree shaking][tree-shaking] in Webpack
4, and lead to larger bundles in Webpack 5. Alternatively, loading this package
via `import { ... } from ...` or `import(...)` will cause Node to use the ESM
entry point in [versions that support it][node-esm-support], as will Webpack.
Using the `import` syntax is the modern, preferred choice.

For backwards compatibility with Webpack 4 (_compat with Webpack 4 is not
guaranteed!_) and Node versions < 14, [`package.json`][package-json] retains the
[`module`][module-key] key, which points to the ESM entry point, and the
[`main`][exports-main-key] key, which points to the CJS2 entry point explicitly
(using the .js file extension). For Webpack 5 and Node versions >= 14,
[`package.json`][package-json] includes the [`exports`][exports-main-key] key,
which points to both entry points explicitly.

Though [`package.json`][package-json] includes
[`{ "type": "commonjs"}`][local-pkg], note that the ESM entry points are ES
module (`.mjs`) files. [`package.json`][package-json] also includes the
[`sideEffects`][side-effects-key] key, which is `false` for [optimal tree
shaking][tree-shaking], and the `types` key, which points to a TypeScript
declarations file.

Additionally, this package does not maintain shared state and so does not
exhibit the [dual package hazard][hazard]. However, setting global configuration
may not actually be "globally" recognized by third-party code importing this
package.

</details>

## Quick Start

```typescript
import { sum } from '@xunnamius/dummy-pkg-2';

sum(2, 2); // = 4
```

## Documentation

Project documentation can be found under [`docs/`][docs].

## Contributing and Support

**[New issues][choose-new-issue] and [pull requests][pr-compare] are always
welcome and greatly appreciated! 🤩** Just as well, you can star 🌟 this project
to let me know you found it useful! ✊🏿 Thank you!

See [CONTRIBUTING.md][contributing] and [SUPPORT.md][support] for more
information.

[badge-blm]: https://xunn.at/badge-blm 'Join the movement!'
[link-blm]: https://xunn.at/donate-blm
[badge-unmaintained]:
  https://xunn.at/badge-unmaintained
  'Unfortunately, this project is unmaintained (forks welcome!)'
[link-unmaintained]: https://xunn.at/link-unmaintained
[badge-maintenance]:
  https://img.shields.io/maintenance/active/2023
  'Is this package maintained?'
[link-repo]: https://github.com/xunnamius/projector-lens-cli
[badge-last-commit]:
  https://img.shields.io/github/last-commit/xunnamius/projector-lens-cli
  'When was the last commit to the official repo?'
[badge-issues]:
  https://isitmaintained.com/badge/open/Xunnamius/projector-lens-cli.svg
  'Number of known issues with this package'
[link-issues]: https://github.com/Xunnamius/projector-lens-cli/issues?q=
[badge-pulls]:
  https://img.shields.io/github/issues-pr/xunnamius/projector-lens-cli
  'Number of open pull requests'
[link-pulls]: https://github.com/xunnamius/projector-lens-cli/pulls
[badge-codecov]:
  https://codecov.io/gh/Xunnamius/projector-lens-cli/branch/main/graph/badge.svg?token=HWRIOBAAPW
  'Is this package well-tested?'
[link-codecov]: https://codecov.io/gh/Xunnamius/projector-lens-cli
[badge-license]:
  https://img.shields.io/npm/l/@xunnamius/dummy-pkg-2
  "This package's source license"
[link-license]:
  https://github.com/Xunnamius/projector-lens-cli/blob/main/LICENSE
[badge-npm]:
  https://xunn.at/npm-pkg-version/@xunnamius/dummy-pkg-2
  'Install this package using npm or yarn!'
[link-npm]: https://www.npmjs.com/package/@xunnamius/dummy-pkg-2
[badge-semantic-release]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
  'This repo practices continuous integration and deployment!'
[link-semantic-release]: https://github.com/semantic-release/semantic-release
[package-json]: package.json
[docs]: docs
[choose-new-issue]:
  https://github.com/Xunnamius/projector-lens-cli/issues/new/choose
[pr-compare]: https://github.com/Xunnamius/projector-lens-cli/compare
[contributing]: CONTRIBUTING.md
[support]: .github/SUPPORT.md
[cjs2]: https://webpack.js.org/configuration/output/#module-definition-systems
[dual-module]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#dual-commonjses-module-packages
[exports-main-key]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#package-entry-points
[hazard]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#dual-package-hazard
[local-pkg]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#type
[module-key]: https://webpack.js.org/guides/author-libraries/#final-steps
[node-esm-support]:
  https://medium.com/%40nodejs/node-js-version-14-available-now-8170d384567e#2368
[side-effects-key]:
  https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free
[tree-shaking]: https://webpack.js.org/guides/tree-shaking
[1]:
  https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/#user-content-breaking-changes
