import { withMockedOutput } from './setup';
import * as lib from '../src/lib';

afterEach(() => {
  jest.clearAllMocks();
});

describe('::functionality', () => {
  it('functions', async () => {
    expect.hasAssertions();
    await withMockedOutput(({ logSpy }) => {
      lib.functionality();
      expect(logSpy).toHaveBeenCalled();
    });
  });
});
