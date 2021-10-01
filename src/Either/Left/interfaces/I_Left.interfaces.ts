/**
 * @since 1.0.0
 */
export interface I_Left<T> {
  chain: (f: (x: any) => any) => I_Left<T>;
  map: (f: (x: any) => any) => I_Left<T>;
  fold: <R>(f: (x: T) => R, g: (x: any) => any) => R;
  inspect: () => `Left(${string})`;
}
