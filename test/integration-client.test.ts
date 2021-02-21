import debugFactory from 'debug';
import { name as pkgName, bin as pkgBin } from '../package.json';
import { run, mockFixtureFactory } from './setup';

import type { FixtureOptions } from './setup';

const TEST_IDENTIFIER = 'integration-client';

const cliBinPath = `${__dirname}/../${pkgBin['dummy-pkg-2']}`;
const debug = debugFactory(`${pkgName}:${TEST_IDENTIFIER}`);

// TODO: configure automatically generated test fixtures
const fixtureOptions = {
  initialFileContents: {
    // 'package.json': `{"name":"dummy-pkg"}}`
  } as FixtureOptions['initialFileContents'],
  use: []
};

const withMockedFixture = mockFixtureFactory(TEST_IDENTIFIER, fixtureOptions);

beforeAll(async () => {
  // TODO: test environment to ensure expected files and executables are present
  if ((await run('test', ['-e', cliBinPath])).code != 0) {
    debug(`unable to find main distributable: ${cliBinPath}`);
    throw new Error('must build distributables first (try `npm run build-dist`)');
  }
});

it('executes when called directly (shebang test)', async () => {
  expect.hasAssertions();

  await withMockedFixture(async () => {
    const { code, stdout } = await run(cliBinPath);

    expect(code).toBe(0);
    expect(stdout).toInclude('hello, world');
  });
});
