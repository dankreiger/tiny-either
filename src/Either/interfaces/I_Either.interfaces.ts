/**
 * @since 1.0.0
 */
import type { Left } from '../Left';
import type { Right } from '../Right';
import type { fromNullable, tryCatch } from '../transformers';

/**
 * @since 1.0.0
 */
export interface I_Either {
  Left: typeof Left;
  Right: typeof Right;
  fromNullable: typeof fromNullable;
  tryCatch: typeof tryCatch;
  of: typeof Right;
}
