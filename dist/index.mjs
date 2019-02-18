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
var isInstanceOf = function isInstanceOf(constructor) {
  return function (value) {
    return value instanceof constructor;
  };
};

/**
 * Check if value is `null`.
 * @example
 * isNull(undefined)
 * //=> false
 * isNull(null)
 * //=> true
 */
var isNull = function isNull(value) {
  return value === null;
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * Returns a predicate to check if value is of type (argument).
 * @example
 * const isString = isTypeOf('string');
 *
 * isString(112);
 * // => false
 * isString('Hello!');
 * // => true
 */
var isTypeOf = function isTypeOf(type) {
  return function (value) {
    return _typeof(value) === type;
  };
};

/**
 * A functional operator for predicates that returns a function to check if
 * value matches every predicate.
 * @example
 * const isObject = AND((value) => !!value, isTypeOf('object'));
 */
var AND = function AND() {
  for (var _len = arguments.length, predicates = new Array(_len), _key = 0; _key < _len; _key++) {
    predicates[_key] = arguments[_key];
  }

  return function (value) {
    return predicates.every(function (predicate) {
      return predicate(value);
    });
  };
};

/**
 * A functional operator for predicates that returns a function to check if
 * value does not matches predicate.
 * @example
 * const isNotNull = NOT((value) => value === null);
 */
var NOT = function NOT(predicate) {
  return function (value) {
    return !predicate(value);
  };
};

/**
 * A functional operator for predicates that returns a function to check if
 * value matches at least one predicate.
 * @example
 * const isNone = OR((value) => value === null, isTypeOf('undefined'));
 */
var OR = function OR() {
  for (var _len = arguments.length, predicates = new Array(_len), _key = 0; _key < _len; _key++) {
    predicates[_key] = arguments[_key];
  }

  return function (value) {
    return predicates.some(function (predicate) {
      return predicate(value);
    });
  };
};

/**
 * Check if value is an object.
 * @example
 * isObject(null);
 * //=> false
 * isObject({});
 * //=> true
 */

var isObject = AND(NOT(isNull), isTypeOf('object'));

export { isInstanceOf, isObject, isNull, isTypeOf, AND, NOT, OR };
