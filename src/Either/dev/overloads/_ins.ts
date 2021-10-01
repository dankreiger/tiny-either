/**
 * @since 1.0.6
 * @internal
 */
import type { T_InspectVal } from '../types';

/**
 * @since 1.0.6
 * @internal
 */
export function _ins<T extends 'Left' | 'Right', U>(
  Type: T,
  x: U
): T_InspectVal<T>;
export function _ins<T extends 'Left' | 'Right', U>(
  Type: T,
  x: U
): T_InspectVal<T> {
  return `${Type}(${JSON.stringify(x, null, 2)})`;
}
