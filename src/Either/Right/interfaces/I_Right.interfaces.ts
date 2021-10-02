/**
 * @since 1.0.7
 * @description
 * Given the type T:
 * - Always returns `Right<T>`
 *
 * @alias of {I_Right}
 *
 *
 * @usage
 * import { of } from 'tiny-either';
 * of(undefined); // Right<undefined>
 * of(1); // Right<number>
 * of('a'); // Right<string>
 */
export interface I_Right<T> {
  readonly _meta: { _tag: 'Right'; _value: T };
  readonly chain: <U>(f: (x: T) => U) => U;
  readonly map: <U>(f: (x: T) => U) => I_Right<U>;
  readonly fold: <R>(f: (x: unknown) => unknown, g: (x: T) => R) => R;
}
