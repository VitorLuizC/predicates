import { AND } from '../operators';

/**
 * Check if value is an Array and every value matches predicate.
 * @example
 * const isStringArray = isEvery(isTypeOf('string'));
 *
 * isStringArray(['one', 'two']);
 * //=> true
 * isStringArray([]);
 * //=> true
 * isStringArray([1, '2']);
 * //=> false
 * isStringArray({ 0: '0', 1: '1' });
 * //=> false
 */
const isEvery = <T>(predicate: (value: any) => value is T) => {
  return AND(
    Array.isArray,
    (value: any[]) => value.every(predicate)
  ) as (value: any) => value is T[];
};

export default isEvery;
