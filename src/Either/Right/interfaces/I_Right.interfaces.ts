/** @since 0.0.0 */
export interface I_Right<T> {
  chain: <U>(f: (x: T) => U) => U;
  map: <U>(f: (x: T) => U) => I_Right<U>;
  fold: <R>(_: never, g: (x: T) => R) => R;
  inspect: () => `Right(${string})`;
}
