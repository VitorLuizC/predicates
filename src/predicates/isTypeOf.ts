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
function isTypeOf (type: 'number'): (value: any) => value is number;
function isTypeOf (type: 'string'): (value: any) => value is string;
function isTypeOf (type: 'symbol'): (value: any) => value is symbol;
function isTypeOf (type: 'object'): (value: any) => value is ({} | null);
function isTypeOf (type: 'boolean'): (value: any) => value is boolean;
function isTypeOf (type: 'function'): (value: any) => value is (...args: any[]) => any;
function isTypeOf (type: 'undefined'): (value: any) => value is undefined;
function isTypeOf (type: string) {
  return (value: any): value is any => typeof value === type;
}

export default isTypeOf;
