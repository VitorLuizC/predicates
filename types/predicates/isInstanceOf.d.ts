/**
 * Returns a predicate to check if value is an instance of constructor (argument).
 * @example
 * const isDate = isInstanceOf(Date);
 *
 * isDate('2018-03-28');
 * // => false
 * isDate(new Date('2018-03-28'));
 * // => true
 */
declare const isInstanceOf: <T>(constructor: new (...args: any[]) => T) => (value: any) => value is T;
export default isInstanceOf;
