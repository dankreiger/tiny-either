/** @since 0.0.0 */
import type { I_Right } from '.';

/**
 * @since 0.0.0
 * @category Either
 *
 */
export const Right = /*#__PURE__*/ <T>(x: T): I_Right<T> => ({
  _meta: { _tag: 'Right', _value: x },
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (_, g) => g(x),
});
