/** @since 0.0.0 */
import type { I_Left } from '../../Left';
import { Left } from '../../Left';
import type { I_Right } from '../../Right';
import { Right } from '../../Right';

/**
 * @since 1.0.7
 * @description
 * Given type T:
 * - If T is `null` or `undefined`, returns `Left<T>`.
 * - Otherwise, returns `Right<T>`
 *
 *
 * @usage
 * import * as E from 'tiny-either';
 * E.fromNullable(null); // I_Left<null>
 * E.fromNullable(undefined); // I_Left<undefined>
 * E.fromNullable(1); // I_Right<number>
 * E.fromNullable('a'); // I_Right<string>
 */
export function fromNullable<T>(value: NonNullable<T>): I_Right<T>;
export function fromNullable<T extends null | undefined>(value: T): I_Left<T>;
export function /*#__PURE__*/ fromNullable<T>(
  value: T
): I_Left<T> | I_Right<T> {
  if (value === null) return Left(value);
  if (value === undefined) return Left(value);
  return Right(value);
}
