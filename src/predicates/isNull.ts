/**
 * Check if value is `null`.
 * @example
 * isNull(undefined)
 * //=> false
 * isNull(null)
 * //=> true
 */
const isNull = (value: any): value is null => value === null;

export default isNull;
