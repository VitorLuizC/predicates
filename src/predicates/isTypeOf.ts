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
const isTypeOf: {
  (type: 'number'): (value: any) => value is number;
  (type: 'string'): (value: any) => value is string;
  (type: 'symbol'): (value: any) => value is symbol;
  (type: 'object'): (value: any) => value is (null | Object);
  (type: 'boolean'): (value: any) => value is boolean;
  (type: 'function'): (value: any) => value is (...args: any[]) => any;
  (type: 'undefined'): (value: any) => value is undefined;
} = (type: string) => (value: any): value is any => typeof value === type;

export default isTypeOf;
