import { Right } from '.';

describe('Right', () => {
  test('map', () => {
    const mapped = Right(10).map((x) => x + 20);
    expect(
      mapped.fold(
        (_) => undefined,
        (x) => x
      )
    ).toEqual(30);
  });

  test('chain', () => {
    const chained = Right(10).chain((x) => Right(20 + x));
    expect(
      chained.fold(
        (_) => undefined,
        (x) => x
      )
    ).toEqual(30);
  });

  test('_meta', () => {
    expect(Right(10)._meta).toEqual({ _tag: 'Right', _value: 10 });
  });
});
