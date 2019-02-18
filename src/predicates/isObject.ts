import isNull from './isNull';
import isTypeOf from './isTypeOf';
import { AND, NOT } from '../operators';

/**
 * Check if value is an object.
 * @example
 * isObject(null);
 * //=> false
 * isObject({});
 * //=> true
 */
const isObject: (value: any) => value is Object = AND(
  NOT(isNull),
  isTypeOf('object'),
);

export default isObject;
