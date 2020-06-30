'use strict';

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.accountsAccountIdTransactionsGET = function accountsAccountIdTransactionsGET (req, res, next, accountId, type, symbol, startDate, endDate) {
  Transactions.accountsAccountIdTransactionsGET(accountId, type, symbol, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdTransactionsTransactionIdGET = function accountsAccountIdTransactionsTransactionIdGET (req, res, next, accountId, transactionId) {
  Transactions.accountsAccountIdTransactionsTransactionIdGET(accountId, transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
