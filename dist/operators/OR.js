/**
 * A functional operator for predicates that returns a function to check if
 * value matches at least one predicate.
 * @example
 * const isNone = OR((value) => value === null, isTypeOf('undefined'));
 */
const OR = (...predicates) => (value) => {
    return predicates.some((predicate) => predicate(value));
};
export default OR;
