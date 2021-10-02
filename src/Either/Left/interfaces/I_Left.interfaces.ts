/**
 * @since 1.0.7
 */
export interface I_Left<T> {
  readonly _meta: { _tag: 'Left'; _value: T };
  readonly chain: (f: (x: unknown) => unknown) => I_Left<T>;
  readonly map: (f: (x: unknown) => unknown) => I_Left<T>;
  readonly fold: <R>(f: (x: T) => R, g: (x: unknown) => unknown) => R;
}
