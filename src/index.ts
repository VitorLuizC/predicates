/**
 * Returns a predicate to check if value is of type (argument).
 * @example ```js
 * const isString = isTypeOf('string');
 * isString(112);
 * // => false
 * isString('Hello!');
 * // => true
 * ```
 * @param type
 */
export const isTypeOf: {
  (type: 'number'): (value: any) => value is number;
  (type: 'string'): (value: any) => value is string;
  (type: 'symbol'): (value: any) => value is symbol;
  (type: 'object'): (value: any) => value is (Object | null);
  (type: 'boolean'): (value: any) => value is boolean;
  (type: 'function'): (value: any) => value is Function;
  (type: 'undefined'): (value: any) => value is undefined;
} = (type: string) => (value: any): value is any => typeof value === type;

/**
 * Returns a predicate to check if value is an instance of constructor (argument).
 * @example ```js
 * const isDate = isInstanceOf(Date);
 * isDate('2018-03-28');
 * // => false
 * isDate(new Date('2018-03-28'));
 * // => true
 * ```
 * @param constructor
 */
export const isInstanceOf = <T extends Function>(constructor: T) => (value: any): value is T => (
  value instanceof constructor
);
