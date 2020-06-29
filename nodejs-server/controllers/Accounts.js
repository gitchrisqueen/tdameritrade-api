'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../service/AccountsService');

module.exports.accountsAccountIdGET = function accountsAccountIdGET (req, res, next, accountId, fields) {
  Accounts.accountsAccountIdGET(accountId, fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsGET = function accountsGET (req, res, next, fields) {
  Accounts.accountsGET(fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
