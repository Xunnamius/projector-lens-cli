import { configureProgram } from '../src/index';
import {
  asMockedFunction,
  isolatedImportFactory,
  withMockedOutputAndExit
} from './setup';

import type { Context } from '../src/index';

const CLI_PATH = '../src/cli';

// ! Note:
// !   - jest.mock calls are hoisted to the top even above imports
// !   - factory function of jest.mock(...) is not guaranteed to run early
// !   - better to manipulate mock in beforeAll() vs using a factory function
jest.mock('../src/index');

let mockSilent = false;

const isolatedImport = isolatedImportFactory(CLI_PATH);
const mockedParse = jest.fn(async () => ({}));
const mockedConfigureProgram = asMockedFunction(configureProgram).mockImplementation(
  () =>
    (({
      program: { argv: { silent: mockSilent } },
      parse: mockedParse
    } as unknown) as Context)
);

afterEach(() => {
  jest.clearAllMocks();
});

it('executes program on import', async () => {
  expect.hasAssertions();

  await withMockedOutputAndExit(async () => {
    await isolatedImport();

    expect(mockedConfigureProgram).toBeCalledWith();
    expect(mockedParse).toBeCalledWith();
  });
});

it('errors gracefully on exception (with Error instance)', async () => {
  expect.hasAssertions();

  mockedParse.mockImplementationOnce(async () => {
    throw new Error('problems!');
  });

  await withMockedOutputAndExit(async ({ errorSpy, exitSpy }) => {
    await isolatedImport();

    expect(mockedConfigureProgram).toBeCalledWith();
    expect(mockedParse).toBeCalledWith();
    expect(errorSpy).toBeCalledWith(expect.toInclude('problems!'));
    expect(exitSpy).toBeCalledWith(1);
  });

  mockedParse.mockReset();
});

it('errors gracefully on exception (with error string)', async () => {
  expect.hasAssertions();

  mockedParse.mockImplementationOnce(() => Promise.reject('problems!'));

  await withMockedOutputAndExit(async ({ errorSpy, exitSpy }) => {
    await isolatedImport();

    expect(mockedConfigureProgram).toBeCalledWith();
    expect(mockedParse).toBeCalledWith();
    expect(errorSpy).toBeCalledWith(expect.toInclude('problems!'));
    expect(exitSpy).toBeCalledWith(1);
  });

  mockedParse.mockReset();
});

it('respects --silent flag', async () => {
  expect.hasAssertions();

  mockSilent = true;
  mockedParse.mockImplementationOnce(() => Promise.reject('BIG BOY ERROR'));

  await withMockedOutputAndExit(async ({ errorSpy, exitSpy }) => {
    await isolatedImport();

    expect(mockedConfigureProgram).toBeCalledWith();
    expect(mockedParse).toBeCalledWith();
    expect(errorSpy).not.toHaveBeenCalled();
    expect(exitSpy).toBeCalledWith(1);
  });

  mockedParse.mockReset();
});
