/**
 * A generic function to contains any function.
 */
type Function = (...args: any[]) => any;

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
export function isTypeOf (type: 'number'): (value: any) => value is number;
export function isTypeOf (type: 'string'): (value: any) => value is string;
export function isTypeOf (type: 'symbol'): (value: any) => value is symbol;
export function isTypeOf (type: 'object'): (value: any) => value is ({} | null);
export function isTypeOf (type: 'boolean'): (value: any) => value is boolean;
export function isTypeOf (type: 'function'): (value: any) => value is Function;
export function isTypeOf (type: 'undefined'): (value: any) => value is undefined;
export function isTypeOf (type: string) {
  return (value: any): value is any => typeof value === type;
}

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
export function isInstanceOf <T>(constructor: { new(...args: any[]): T }) {
  return (value: any): value is T => value instanceof constructor;
}
