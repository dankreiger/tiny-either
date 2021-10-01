/** @since 0.0.0 */
import type { I_Left } from '../../Left';
import { Left } from '../../Left';
import type { I_Right } from '../../Right';
import { Right } from '../../Right';

/** @since 0.0.0 */
export function fromNullable<T>(x: NonNullable<T>): I_Right<T>;
export function fromNullable<T extends null | undefined>(x: T): I_Left<T>;
export function fromNullable<T>(x: T): I_Left<T> | I_Right<T> {
  if (x === null) return Left(x);
  if (x === undefined) return Left(x);
  return Right(x);
}
