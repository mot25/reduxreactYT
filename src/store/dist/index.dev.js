"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _cashReducer = require("./cashReducer");

var _customerReducer = require("./customerReducer");

var rootReducer = (0, _redux.combineReducers)({
  cashReducer: _cashReducer.reducer,
  custom: _customerReducer.customReducer
});
var store = (0, _redux.createStore)(rootReducer, (0, _reduxDevtoolsExtension.composeWithDevTools)());
exports.store = store;