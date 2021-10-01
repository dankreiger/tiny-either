/** @since 0.0.0 */
import type { I_Left } from './interfaces';

/** @since 0.0.0 */
export const Left = <T>(x: T): I_Left<T> => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  chain: (_) => Left(x),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  map: (_) => Left(x),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fold: (f, _) => f(x),
  inspect: () => `Left(${JSON.stringify(x, null, 2)})`,
});
