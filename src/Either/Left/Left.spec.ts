import { Left } from '.';

describe('Left', () => {
  test('smoke', () => {
    expect(
      Left(10).fold(
        (err) => err,
        (_) => undefined
      )
    ).toBe(10);
  });
});
