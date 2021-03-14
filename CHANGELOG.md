# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits][22], and this project adheres to
[Semantic Versioning][23].

## [1.0.6][24] (2021-03-14)

### Build System

- **package.json:** better documentation ([119474d][25])

## [1.0.5][1] (2021-02-22)

### Build System

- Remove shelljs and withMockedOutputAndExit ([22accd2][2])
- Update sort-package-json ([fa334f7][3])

## [1.0.4][4] (2021-02-21)

### Build System

- **build-test-deploy.yml:** reduce retries to 6, timeout to 10 minutes
  ([fd086f2][5])

## [1.0.3][6] (2021-02-21)

### Build System

- **.eslintrc.js:** backport updates ([f5febfc][7])
- **expect-env.js:** rename ([8582e6d][8])
- **package.json:** chmod cli during build-dist step ([1d2b6f7][9])
- **package.json:** increase jest timeout to 60 seconds ([09065dc][10])
- **package.json:** update dependencies ([dfc1ad1][11])
- **setup.ts:** fix use fixture bug ([a9e855a][12])
- **test:** backport testing infrastructure upgrades ([6d837fc][13])
- **webpack.config.js:** rename external.js to dummy.js ([d40d68d][14])

## [1.0.2][15] (2021-02-15)

### Build System

- **package.json:** add private:false ([3541ed7][16])

## [1.0.1][17] (2021-02-14)

### Bug Fixes

- **webpack.config.js:** call dotenv properly ([4b76029][18])

# [1.0.0][19] (2021-02-14)

### Build System

- Import template from projector-lens-lib-cjs ([0e748d6][20])
- Import updates from production ([25509b4][21])

[1]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.4...v1.0.5
[2]:
  https://github.com/Xunnamius/projector-lens-cli/commit/22accd285d740156cff58848a9729a7327944866
[3]:
  https://github.com/Xunnamius/projector-lens-cli/commit/fa334f78263c1f72c60e54555e6b728d23cc9f88
[4]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.3...v1.0.4
[5]:
  https://github.com/Xunnamius/projector-lens-cli/commit/fd086f2e011a394b3e73ea490390d65eaecaf4dc
[6]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.2...v1.0.3
[7]:
  https://github.com/Xunnamius/projector-lens-cli/commit/f5febfc824418ba7fb7834c6765ed0b1c3583cff
[8]:
  https://github.com/Xunnamius/projector-lens-cli/commit/8582e6d65fb697fb718c94eeca214cad65d952d3
[9]:
  https://github.com/Xunnamius/projector-lens-cli/commit/1d2b6f784974f8bd5b6b48899f7e46e44f0a1233
[10]:
  https://github.com/Xunnamius/projector-lens-cli/commit/09065dc6d1facaf5f1a5f572487ff967bb170a62
[11]:
  https://github.com/Xunnamius/projector-lens-cli/commit/dfc1ad185b70ac694214046f9d2e94226f49d14c
[12]:
  https://github.com/Xunnamius/projector-lens-cli/commit/a9e855a28f9d263bb7dda68bc288e47ac2b06e07
[13]:
  https://github.com/Xunnamius/projector-lens-cli/commit/6d837fcdb1a34b9990567ed34d892462f098a492
[14]:
  https://github.com/Xunnamius/projector-lens-cli/commit/d40d68d2e59e6cb6dbe42c21fcd53f947a3771ba
[15]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.1...v1.0.2
[16]:
  https://github.com/Xunnamius/projector-lens-cli/commit/3541ed70c217f9f86fc38a0aa4aaf901a9c40424
[17]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.0...v1.0.1
[18]:
  https://github.com/Xunnamius/projector-lens-cli/commit/4b76029a0df9929fab072718f23a8c09cbed1beb
[19]:
  https://github.com/Xunnamius/projector-lens-cli/compare/0e748d6c92ca12ba7df846c9245eee0fd6b63e7c...v1.0.0
[20]:
  https://github.com/Xunnamius/projector-lens-cli/commit/0e748d6c92ca12ba7df846c9245eee0fd6b63e7c
[21]:
  https://github.com/Xunnamius/projector-lens-cli/commit/25509b42e6c451aacd3275ea140411147b41ead0
[22]: https://conventionalcommits.org
[23]: https://semver.org
[24]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.5...v1.0.6
[25]:
  https://github.com/Xunnamius/projector-lens-cli/commit/119474dda5c57cc78b33e142a2743f8bcbecc5a7
