import { AND, OR } from "../operators";
import { isTypeOf } from ".";

/**
 * Check if value's length is equals number or between min and max.
 * @example
 * const isTweet = isLength(0, 255);
 *
 * isTweet('Hello world!');
 * //=> true
 * isTweet();
 * //=> false
 * isTweet([1, 2, …, 100]);
 * //=> true
 */
const isLength: {
  (min: number, max?: number): (value: any) => value is (any[] | string);
  (number: number): (value: any) => value is (any[] | string);
} = (min: number, max: number = min) => AND(
  OR(isTypeOf('string'), Array.isArray),
  (value: any[] | string) => value.length >= min && value.length <= max,
);

export default isLength;
