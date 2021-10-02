/**
 * @since 1.0.6
 */
import type { I_Inspect } from './interfaces';

/**
 * @since 1.0.6
 */
export function inspect<T extends 'Left' | 'Right', U>(
  Type: T,
  x: U
): I_Inspect<T, U> {
  return {
    tag: Type,
    value: x,
  };
}
