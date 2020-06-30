'use strict';

var utils = require('../utils/writer.js');
var Watchlist = require('../service/WatchlistService');

module.exports.accountsAccountIdWatchlistsGET = function accountsAccountIdWatchlistsGET (req, res, next, accountId) {
  Watchlist.accountsAccountIdWatchlistsGET(accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdWatchlistsPOST = function accountsAccountIdWatchlistsPOST (req, res, next, body, accountId) {
  Watchlist.accountsAccountIdWatchlistsPOST(body, accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdWatchlistsWatchlistIdGET = function accountsAccountIdWatchlistsWatchlistIdGET (req, res, next, accountId, watchlistId) {
  Watchlist.accountsAccountIdWatchlistsWatchlistIdGET(accountId, watchlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdWatchlistsWatchlistIdPATCH = function accountsAccountIdWatchlistsWatchlistIdPATCH (req, res, next, body, accountId, watchlistId) {
  Watchlist.accountsAccountIdWatchlistsWatchlistIdPATCH(body, accountId, watchlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdWatchlistsWatchlistIdPUT = function accountsAccountIdWatchlistsWatchlistIdPUT (req, res, next, body, accountId, watchlistId) {
  Watchlist.accountsAccountIdWatchlistsWatchlistIdPUT(body, accountId, watchlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsWatchlistsGET = function accountsWatchlistsGET (req, res, next) {
  Watchlist.accountsWatchlistsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
