import { Right } from './Right';
import { fromNullable, fromPredicate, tryCatch } from './transformers';

const of = Right;

/**
 * @since 1.0.0
 * @category Either
 */
export { fromNullable, fromPredicate, tryCatch, of };
