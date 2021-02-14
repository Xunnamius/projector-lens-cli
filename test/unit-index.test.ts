import { name as pkgName } from '../package.json';
import { configureProgram } from '../src/index';
import { asMockedFunction, setArgv } from './setup';

import { functionality } from '../src/lib';

import type { Context } from '../src/index';

const TEST_IDENTIFIER = 'unit-index';

// ! Note:
// !   - jest.mock calls are hoisted to the top even above imports
// !   - factory function of jest.mock(...) is not guaranteed to run early
// !   - better to manipulate mock in beforeAll() vs using a factory function
jest.mock('../src/lib');

const mockedFunctionality = asMockedFunction(functionality);

const getProgram = () => {
  const ctx = configureProgram();
  ctx.program.exitProcess(false);
  return ctx;
};

const runProgram = async (argv: string[], ctx?: Context) => {
  return (ctx || getProgram()).parse(argv);
};

let resetArgv: ReturnType<typeof setArgv>;
let stderrSpy: ReturnType<typeof jest.spyOn>;

beforeAll(() => {
  // ? Store original arguments passed to process
  resetArgv = setArgv([]);

  // ? Suppress Yargs help output to keep test output clean
  if (!process.env.DEBUG)
    stderrSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  resetArgv();
  if (!process.env.DEBUG) stderrSpy.mockRestore();
});

describe(`${pkgName} [${TEST_IDENTIFIER}]`, () => {
  describe('::configureProgram', () => {
    it('creates new yargs instance when called with 0 arguments', () => {
      expect.hasAssertions();
      expect(configureProgram().program).not.toBeNil();
    });

    it('does the right thing when called with no args', async () => {
      expect.hasAssertions();
      await expect(getProgram().parse()).toResolve();
    });

    it('calls functionality', async () => {
      expect.hasAssertions();
      await expect(runProgram([])).toResolve();
      expect(mockedFunctionality).toHaveBeenCalled();
    });
  });
});
