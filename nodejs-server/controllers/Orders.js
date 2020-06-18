'use strict';

var utils = require('../utils/writer.js');
var Orders = require('../service/OrdersService');

module.exports.accountsAccountIdOrdersOrderIdDELETE = function accountsAccountIdOrdersOrderIdDELETE (req, res, next, accountId, orderId) {
  Orders.accountsAccountIdOrdersOrderIdDELETE(accountId, orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
