/**
 * Check if value is `null`.
 * @example
 * isNull(undefined)
 * //=> false
 * isNull(null)
 * //=> true
 */
declare const isNull: (value: any) => value is null;
export default isNull;
