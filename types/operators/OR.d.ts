import Predicate from '../model/Predicate';
/**
 * A functional operator for predicates that returns a function to check if
 * value matches at least one predicate.
 * @example
 * const isNone = OR((value) => value === null, isTypeOf('undefined'));
 */
declare const OR: (...predicates: Predicate[]) => (value: any) => value is any;
export default OR;
