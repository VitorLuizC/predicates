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
function isInstanceOf(constructor) {
    return (value) => value instanceof constructor;
}
export default isInstanceOf;
