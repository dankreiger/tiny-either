import { Right } from '.';

describe('Right', () => {
  test('smoke', () => {
    expect(Right(10).inspect()).toBe('Right(10)');
    expect(
      Right(10)
        .map((x) => x + 20)
        .inspect()
    ).toBe('Right(30)');
  });
});
