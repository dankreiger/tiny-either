/** @since 0.0.0 */
import type { I_Left } from '../../Left';
import { Left } from '../../Left';
import type { I_Right } from '../../Right';
import { Right } from '../../Right';

/**
 * @category Either
 * @since 1.0.7
 * @description
 * Given the type () => T:
 * - If an error is caught, returns `Left<T>.
 * - Otherwise, returns `Right<T>`
 *
 *
 * @usage
 * import * as E from 'tiny-either';
 *
 * E.tryCatch(() => JSON.parse(''))._meta; // { _tag: 'Left', _value: [SyntaxError: Unexpected end of JSON input] }
 * E.tryCatch(() => { throw new Error('oh no') })._meta; // { _tag: 'Left', _value: [Error: oh no] }
 *
 * E.tryCatch(undefined); // Right<undefined>
 * E.tryCatch(1); // Right<number>
 * E.tryCatch('a'); // Right<string>
 */
export function tryCatch<T>(f: () => T): I_Right<T>;
export function /*#__PURE__*/ tryCatch<T>(
  f: () => T
): I_Left<unknown> | I_Right<T> {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
}
