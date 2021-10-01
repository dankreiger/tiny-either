/** @since 1.0.6 */
import type { I_Either } from '../interfaces';
import { Left } from '../Left';
import { Right } from '../Right';
import { _ins } from './overloads/_ins';
import type { T_EitherInspect } from './types';

/**
 * @since 1.0.5
 * @description
 * attaches a dev inspect propery to the Monad
 * @param {I_Either} E
 */
export function inspect(E: I_Either): T_EitherInspect {
  return {
    ...E,
    Left: <T>(x: T) => ({
      ...Left(x),
      inspect: () => _ins<'Left', T>('Left', x),
    }),
    Right: <T>(x: T) => ({
      ...Right(x),
      inspect: () => _ins<'Right', T>('Right', x),
    }),
  };
}
