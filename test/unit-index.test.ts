import { configureProgram } from '../src/index';
import { asMockedFunction, withMockedArgv, withMockedOutput } from './setup';
import { functionality } from '../src/lib';

import type { Context } from '../src/index';

// TODO: replace src/lib where appropriate

// ! Note:
// !   - jest.mock calls are hoisted to the top even above imports
// !   - factory function of jest.mock(...) is not guaranteed to run early
// !   - better to manipulate mock in beforeAll() vs using a factory function
jest.mock('../src/lib');

// TODO: ensure lib functionality is mocked appropriately
const mockedFunctionality = asMockedFunction(functionality);

const getProgram = () => {
  const ctx = configureProgram();
  ctx.program.exitProcess(false);
  return ctx;
};

const runProgram = async (argv: string[], ctx?: Context) => {
  return (ctx || getProgram()).parse(argv);
};

// ? Captures output and mocks argv
const withMocks = async (
  fn: Parameters<typeof withMockedOutput>[0],
  argv: string[] = [],
  options?: Parameters<typeof withMockedArgv>[2]
) => withMockedArgv(() => withMockedOutput(fn), argv, options);

afterEach(() => {
  jest.clearAllMocks();
});

describe('::configureProgram', () => {
  it('creates new yargs instance when called with 0 arguments', async () => {
    expect.hasAssertions();
    await withMocks(async () => {
      expect(configureProgram().program).not.toBeNil();
    });
  });

  it('does the right thing when called with no args', async () => {
    expect.hasAssertions();
    await withMocks(async () => {
      await expect(getProgram().parse()).toResolve();
    });
  });

  it('calls functionality', async () => {
    expect.hasAssertions();
    await withMocks(async () => {
      await expect(runProgram([])).toResolve();
      expect(mockedFunctionality).toBeCalled();
    });
  });
});
