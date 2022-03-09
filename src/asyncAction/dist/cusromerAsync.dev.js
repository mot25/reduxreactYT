"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCustomer = void 0;

var _customerReducer = require("../store/customerReducer");

var fetchCustomer = function fetchCustomer() {
  return function (dispath) {
    fetch('https://jsonplaceholder.typicode.com/users').then(function (res) {
      return res.json();
    }).then(function (data) {
      return dispath((0, _customerReducer.addManyCustomers)(data));
    });
  };
};

exports.fetchCustomer = fetchCustomer;