/**
 * Check if value is an object.
 * @example
 * isObject(null);
 * //=> false
 * isObject({});
 * //=> true
 */
declare const isObject: (value: any) => value is Object;
export default isObject;
