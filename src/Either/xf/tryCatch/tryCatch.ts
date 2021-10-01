/** @since 0.0.0 */
import type { I_Left } from '../../Left';
import { Left } from '../../Left';
import type { I_Right } from '../../Right';
import { Right } from '../../Right';

/** @since 0.0.0 */
export function tryCatch<T extends Error>(f: () => T): I_Left<T>;
export function tryCatch<T>(f: () => T): I_Right<T>;
export function tryCatch<T>(f: () => T): I_Left<unknown> | I_Right<T> {
  try {
    return Right(f());
  } catch (e) {
    if (e instanceof Error) {
      return Left(e.message);
    }
    return Left(e);
  }
}
