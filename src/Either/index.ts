import type { I_Either } from './interfaces';
import { Left } from './Left';
import { Right } from './Right';
import { fromNullable, tryCatch } from './xf';

/**
 * @since 1.0.0
 */
export const Either: I_Either = {
  fromNullable,
  tryCatch,
  Left,
  Right,
};
