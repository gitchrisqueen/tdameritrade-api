'use strict';

var utils = require('../utils/writer.js');
var UserInfoPreferences = require('../service/UserInfoPreferencesService');

module.exports.accountsAccountIdPreferencesGET = function accountsAccountIdPreferencesGET (req, res, next, accountId) {
  UserInfoPreferences.accountsAccountIdPreferencesGET(accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdPreferencesPUT = function accountsAccountIdPreferencesPUT (req, res, next, body, accountId) {
  UserInfoPreferences.accountsAccountIdPreferencesPUT(body, accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userprincipalsGET = function userprincipalsGET (req, res, next, fields) {
  UserInfoPreferences.userprincipalsGET(fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userprincipalsStreamersubscriptionkeysGET = function userprincipalsStreamersubscriptionkeysGET (req, res, next, accountIds) {
  UserInfoPreferences.userprincipalsStreamersubscriptionkeysGET(accountIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
