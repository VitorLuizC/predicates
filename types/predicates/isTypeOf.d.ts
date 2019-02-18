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
declare function isTypeOf(type: 'number'): (value: any) => value is number;
declare function isTypeOf(type: 'string'): (value: any) => value is string;
declare function isTypeOf(type: 'symbol'): (value: any) => value is symbol;
declare function isTypeOf(type: 'object'): (value: any) => value is ({} | null);
declare function isTypeOf(type: 'boolean'): (value: any) => value is boolean;
declare function isTypeOf(type: 'function'): (value: any) => value is (...args: any[]) => any;
declare function isTypeOf(type: 'undefined'): (value: any) => value is undefined;
export default isTypeOf;
