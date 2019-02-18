/**
 * A function that returns `true` if value matches a check and `false`
 * otherwise (AKA Check Function).
 * @example
 * const isNull: Predicate = (value: any) => value === null;
 */
declare type Predicate = (value: any) => boolean;
export default Predicate;
