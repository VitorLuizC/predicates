/**
 * Returns a predicate to check if value is of type (argument).
 * @example
 * const isString = isTypeOf('string');
 *
 * isString(112);
 * // => false
 * isString('Hello!');
 * // => true
 */
const isTypeOf = (type) => (value) => typeof value === type;
export default isTypeOf;
