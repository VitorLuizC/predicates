/**
 * Returns a predicate to check if value is of type (argument).
 * @param type - Argument used to compare type of value.
 */
export const isTypeOf: {
  (type: 'number'): (value: any) => value is number;
  (type: 'string'): (value: any) => value is string;
  (type: 'symbol'): (value: any) => value is symbol;
  (type: 'object'): (value: any) => value is (Object | null);
  (type: 'boolean'): (value: any) => value is boolean;
  (type: 'function'): (value: any) => value is Function;
  (type: 'undefined'): (value: any) => value is undefined;
} = (type: string) => (value: any): value is any => typeof value === type;
