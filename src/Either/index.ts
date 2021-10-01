import { inspect } from './dev';
import type { I_Either } from './interfaces';
import { Left } from './Left';
import { Right } from './Right';
import { fromNullable, tryCatch } from './transformers';

/**
 * @since 1.0.0
 */
const Either: I_Either = {
  fromNullable,
  tryCatch,
  Left,
  Right,
};

export { inspect };
export default Either;
