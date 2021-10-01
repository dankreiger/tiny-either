/**
 * @since 1.0.6
 */
import type { T_InspectVal } from '.';
import type { I_Either } from '../../interfaces';
import type { I_Left } from '../../Left';
import type { I_Right } from '../../Right';

/**
 * @since 1.0.6
 */
export type T_EitherInspect = I_Either & {
  Left: <T>(x: T) => I_Left<T> & { inspect: () => T_InspectVal<'Left'> };
  Right: <T>(x: T) => I_Right<T> & { inspect: () => T_InspectVal<'Right'> };
};
