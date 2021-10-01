/** @since 0.0.0 */
import type { I_Right } from '.';

/** @since 0.0.0 */
export const Right = /*#__PURE__*/ <T>(x: T): I_Right<T> => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (_, g) => g(x),
  inspect: () => `Right(${JSON.stringify(x, null, 2)})`,
});
