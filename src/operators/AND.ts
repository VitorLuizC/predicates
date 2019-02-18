import Predicate from '../model/Predicate';

/**
 * A functional operator for predicates that returns a function to check if
 * value matches every predicate.
 * @example
 * const isObject = AND((value) => !!value, isTypeOf('object'));
 */
const AND = (...predicates: Predicate[]) => (value: any): value is any => {
  return predicates.every((predicate) => predicate(value));
};

export default AND;
