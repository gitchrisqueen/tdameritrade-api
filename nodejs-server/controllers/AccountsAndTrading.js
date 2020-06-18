'use strict';

var utils = require('../utils/writer.js');
var AccountsAndTrading = require('../service/AccountsAndTradingService');

module.exports.accountsAccountIdOrdersOrderIdDELETE = function accountsAccountIdOrdersOrderIdDELETE (req, res, next, accountId, orderId) {
  AccountsAndTrading.accountsAccountIdOrdersOrderIdDELETE(accountId, orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
