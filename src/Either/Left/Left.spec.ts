import { Left } from '.';

describe('Left', () => {
  test('smoke', () => {
    expect(Left(10).inspect()).toBe('Left(10)');
  });
});
