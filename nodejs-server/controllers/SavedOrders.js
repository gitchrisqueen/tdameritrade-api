'use strict';

var utils = require('../utils/writer.js');
var SavedOrders = require('../service/SavedOrdersService');

module.exports.accountsAccountIdSavedordersGET = function accountsAccountIdSavedordersGET (req, res, next, accountId) {
  SavedOrders.accountsAccountIdSavedordersGET(accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdSavedordersPOST = function accountsAccountIdSavedordersPOST (req, res, next, body, accountId) {
  SavedOrders.accountsAccountIdSavedordersPOST(body, accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdSavedordersSavedOrderIdDELETE = function accountsAccountIdSavedordersSavedOrderIdDELETE (req, res, next, accountId, savedOrderId) {
  SavedOrders.accountsAccountIdSavedordersSavedOrderIdDELETE(accountId, savedOrderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdSavedordersSavedOrderIdGET = function accountsAccountIdSavedordersSavedOrderIdGET (req, res, next, accountId, savedOrderId) {
  SavedOrders.accountsAccountIdSavedordersSavedOrderIdGET(accountId, savedOrderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdSavedordersSavedOrderIdPUT = function accountsAccountIdSavedordersSavedOrderIdPUT (req, res, next, body, accountId, savedOrderId) {
  SavedOrders.accountsAccountIdSavedordersSavedOrderIdPUT(body, accountId, savedOrderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
