import { Left } from '.';

describe('Left', () => {
  test('fold', () => {
    expect(
      Left(10).fold(
        (err) => err,
        (_) => undefined
      )
    ).toBe(10);
  });

  test('_meta', () => {
    expect(Left(10)._meta).toEqual({ _tag: 'Left', _value: 10 });
  });
});
