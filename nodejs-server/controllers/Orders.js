'use strict';

var utils = require('../utils/writer.js');
var Orders = require('../service/OrdersService');

module.exports.accountsAccountIdOrdersGET = function accountsAccountIdOrdersGET (req, res, next, accountId, maxResults, fromEnteredTime, toEnteredTime, status) {
  Orders.accountsAccountIdOrdersGET(accountId, maxResults, fromEnteredTime, toEnteredTime, status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdOrdersOrderIdDELETE = function accountsAccountIdOrdersOrderIdDELETE (req, res, next, accountId, orderId) {
  Orders.accountsAccountIdOrdersOrderIdDELETE(accountId, orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdOrdersOrderIdGET = function accountsAccountIdOrdersOrderIdGET (req, res, next, accountId, orderId) {
  Orders.accountsAccountIdOrdersOrderIdGET(accountId, orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdOrdersOrderIdPUT = function accountsAccountIdOrdersOrderIdPUT (req, res, next, accountId, orderId) {
  Orders.accountsAccountIdOrdersOrderIdPUT(accountId, orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ordersGET = function ordersGET (req, res, next, accountId, maxResults, fromEnteredTime, toEnteredTime, status) {
  Orders.ordersGET(accountId, maxResults, fromEnteredTime, toEnteredTime, status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ordersPOST = function ordersPOST (req, res, next, body, accountId) {
  Orders.ordersPOST(body, accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
