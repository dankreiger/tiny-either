/** @since 0.0.0 */
import type { I_Left } from './interfaces';

/** @since 0.0.0 */
export const Left = /*#__PURE__*/ <T>(x: T): I_Left<T> => ({
  chain: (_) => Left(x),
  map: (_) => Left(x),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fold: (f, _) => f(x),
  inspect: () => `Left(${JSON.stringify(x, null, 2)})`,
});
