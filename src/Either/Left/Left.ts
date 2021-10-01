/** @since 0.0.0 */
import type { I_Left } from './interfaces';

/** @since 0.0.0 */
export const Left = /*#__PURE__*/ <T>(x: T): I_Left<T> => ({
  chain: (_) => Left(x),
  map: (_) => Left(x),
  fold: (f, _) => f(x),
});
