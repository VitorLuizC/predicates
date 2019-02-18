import { AND } from '../operators';
import isTypeOf from './isTypeOf';

/**
 * Check if value matches the pattern.
 * @example
 * const isLineBreak = isPattern(/\r\n|\r|\n/);
 *
 * isLineBreak('\n');
 * //=> true
 * isLineBreak('Pause');
 * //=> false
 * isLineBreak();
 * //=> false
 */
const isPattern = (pattern: RegExp) => AND(
  isTypeOf('string'),
  (value: string) => pattern.test(value),
) as (value: any) => value is string;

export default isPattern;
