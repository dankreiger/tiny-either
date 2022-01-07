/** @since 1.0.12 */
import { I_Left, Left } from '../../Left';
import { I_Right, Right } from '../../Right';

type T_Predicate<T> = (value: T) => boolean;
/**
 * @since 1.0.12
 * @description
 * Given type T_Predicate<T>:
 * - If Predicate<T> returns `false`, we return `I_Left<T>`.
 * - Otherwise, returns `I_Right<T>`
 *
 * @usage
 * import * as E from 'tiny-either';
 * E.of(5).chain(
 *    E.fromPredicate(
 *      (x) => x === 5,
 *      (x) => `sorry ${x}`
 *    ) // I_Right<5>)
 *  )
 * E.of(5).chain(
 *    E.fromPredicate(
 *      (x) => x === 4,
 *      (x) => `sorry ${x}`
 *    ) // I_Left<'sorry 5'>)
 *  )
 */

export function /*#__PURE__*/ fromPredicate<T>(
  predicate: T_Predicate<T>,
  errMessage: (value: T) => string
) {
  return function check(value: T): I_Left<string> | I_Right<T> {
    if (predicate(value)) return Right(value);
    return Left(errMessage(value));
  };
}
