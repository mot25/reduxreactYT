"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCustomerAction = exports.addManyCustomers = exports.removeCustomerAction = exports.customReducer = exports.ADD_MANY_CUSTOMER = exports.REMOVE_CUSTOMER = exports.ADD_CUSTOMER = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {
  custom: []
};
var ADD_CUSTOMER = 'ADD_CUSTOMER';
exports.ADD_CUSTOMER = ADD_CUSTOMER;
var REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
exports.REMOVE_CUSTOMER = REMOVE_CUSTOMER;
var ADD_MANY_CUSTOMER = 'ADD_MANY_CUSTOMER';
exports.ADD_MANY_CUSTOMER = ADD_MANY_CUSTOMER;

var customReducer = function customReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_MANY_CUSTOMER:
      return _objectSpread({}, state, {
        custom: [].concat(_toConsumableArray(state.custom), _toConsumableArray(action.payload))
      });

    case ADD_CUSTOMER:
      return _objectSpread({}, state, {
        custom: [].concat(_toConsumableArray(state.custom), [action.payload])
      });

    case REMOVE_CUSTOMER:
      return _objectSpread({}, state, {
        custom: state.custom.filter(function (item) {
          return item.id !== action.payload;
        })
      });

    default:
      return state;
  }
};

exports.customReducer = customReducer;

var removeCustomerAction = function removeCustomerAction(payload) {
  return {
    type: REMOVE_CUSTOMER,
    payload: payload
  };
};

exports.removeCustomerAction = removeCustomerAction;

var addManyCustomers = function addManyCustomers(payload) {
  return {
    type: ADD_MANY_CUSTOMER,
    payload: payload
  };
};

exports.addManyCustomers = addManyCustomers;

var addCustomerAction = function addCustomerAction(payload) {
  return {
    type: ADD_CUSTOMER,
    payload: payload
  };
};

exports.addCustomerAction = addCustomerAction;