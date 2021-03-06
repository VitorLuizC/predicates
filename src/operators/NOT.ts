import Predicate from '../model/Predicate';

/**
 * A functional operator for predicates that returns a function to check if
 * value does not matches predicate.
 * @example
 * const isNotNull = NOT((value) => value === null);
 */
const NOT = (predicate: Predicate) => (value: any): value is any => !predicate(value);

export default NOT;
