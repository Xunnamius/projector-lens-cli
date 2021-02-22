# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits][19], and this project adheres to
[Semantic Versioning][20].

## [1.0.5][21] (2021-02-22)

### Build System

- Remove shelljs and withMockedOutputAndExit ([22accd2][22])
- Update sort-package-json ([fa334f7][23])

## [1.0.4][1] (2021-02-21)

### Build System

- **build-test-deploy.yml:** reduce retries to 6, timeout to 10 minutes
  ([fd086f2][2])

## [1.0.3][3] (2021-02-21)

### Build System

- **.eslintrc.js:** backport updates ([f5febfc][4])
- **expect-env.js:** rename ([8582e6d][5])
- **package.json:** chmod cli during build-dist step ([1d2b6f7][6])
- **package.json:** increase jest timeout to 60 seconds ([09065dc][7])
- **package.json:** update dependencies ([dfc1ad1][8])
- **setup.ts:** fix use fixture bug ([a9e855a][9])
- **test:** backport testing infrastructure upgrades ([6d837fc][10])
- **webpack.config.js:** rename external.js to dummy.js ([d40d68d][11])

## [1.0.2][12] (2021-02-15)

### Build System

- **package.json:** add private:false ([3541ed7][13])

## [1.0.1][14] (2021-02-14)

### Bug Fixes

- **webpack.config.js:** call dotenv properly ([4b76029][15])

# [1.0.0][16] (2021-02-14)

### Build System

- Import template from projector-lens-lib-cjs ([0e748d6][17])
- Import updates from production ([25509b4][18])

[1]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.3...v1.0.4
[2]:
  https://github.com/Xunnamius/projector-lens-cli/commit/fd086f2e011a394b3e73ea490390d65eaecaf4dc
[3]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.2...v1.0.3
[4]:
  https://github.com/Xunnamius/projector-lens-cli/commit/f5febfc824418ba7fb7834c6765ed0b1c3583cff
[5]:
  https://github.com/Xunnamius/projector-lens-cli/commit/8582e6d65fb697fb718c94eeca214cad65d952d3
[6]:
  https://github.com/Xunnamius/projector-lens-cli/commit/1d2b6f784974f8bd5b6b48899f7e46e44f0a1233
[7]:
  https://github.com/Xunnamius/projector-lens-cli/commit/09065dc6d1facaf5f1a5f572487ff967bb170a62
[8]:
  https://github.com/Xunnamius/projector-lens-cli/commit/dfc1ad185b70ac694214046f9d2e94226f49d14c
[9]:
  https://github.com/Xunnamius/projector-lens-cli/commit/a9e855a28f9d263bb7dda68bc288e47ac2b06e07
[10]:
  https://github.com/Xunnamius/projector-lens-cli/commit/6d837fcdb1a34b9990567ed34d892462f098a492
[11]:
  https://github.com/Xunnamius/projector-lens-cli/commit/d40d68d2e59e6cb6dbe42c21fcd53f947a3771ba
[12]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.1...v1.0.2
[13]:
  https://github.com/Xunnamius/projector-lens-cli/commit/3541ed70c217f9f86fc38a0aa4aaf901a9c40424
[14]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.0...v1.0.1
[15]:
  https://github.com/Xunnamius/projector-lens-cli/commit/4b76029a0df9929fab072718f23a8c09cbed1beb
[16]:
  https://github.com/Xunnamius/projector-lens-cli/compare/0e748d6c92ca12ba7df846c9245eee0fd6b63e7c...v1.0.0
[17]:
  https://github.com/Xunnamius/projector-lens-cli/commit/0e748d6c92ca12ba7df846c9245eee0fd6b63e7c
[18]:
  https://github.com/Xunnamius/projector-lens-cli/commit/25509b42e6c451aacd3275ea140411147b41ead0
[19]: https://conventionalcommits.org
[20]: https://semver.org
[21]: https://github.com/Xunnamius/projector-lens-cli/compare/v1.0.4...v1.0.5
[22]:
  https://github.com/Xunnamius/projector-lens-cli/commit/22accd285d740156cff58848a9729a7327944866
[23]:
  https://github.com/Xunnamius/projector-lens-cli/commit/fa334f78263c1f72c60e54555e6b728d23cc9f88
