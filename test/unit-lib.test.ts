import { name as pkgName } from '../package.json';
import * as lib from '../src/lib';

const TEST_IDENTIFIER = 'unit-lib';

afterEach(() => {
  jest.clearAllMocks();
});

describe(`${pkgName} [${TEST_IDENTIFIER}]`, () => {
  describe('::functionality', () => {
    it('functions', async () => {
      expect.hasAssertions();

      const stdoutSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);
      lib.functionality();
      expect(stdoutSpy).toHaveBeenCalled();

      stdoutSpy.mockRestore();
    });
  });
});
