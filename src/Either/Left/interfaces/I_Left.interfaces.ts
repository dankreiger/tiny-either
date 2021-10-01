/**
 * @since 1.0.0
 */
export interface I_Left<T> {
  chain: (f: never) => I_Left<T>;
  map: (f: never) => I_Left<T>;
  fold: <R>(f: (x: T) => R, _: never) => R;
  inspect: () => `Left(${string})`;
}
