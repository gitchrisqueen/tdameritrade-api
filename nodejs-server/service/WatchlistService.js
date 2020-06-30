'use strict';


/**
 * Get Watchlists for Single Account
 * all watchlist for an account.
 *
 * accountId String 
 * returns WatchListResponse
 **/
exports.accountsAccountIdWatchlistsGET = function(accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : {
    "schema" : {
      "accountId" : "accountId",
      "watchlistId" : "watchlistId",
      "name" : "name",
      "watchlistItems" : [ {
        "quantity" : 6.027456183070403,
        "purchasedDate" : { },
        "commission" : 0.5962133916683182,
        "instrument" : {
          "symbol" : "symbol",
          "description" : "description",
          "assetType" : "EQUITY"
        },
        "averagePrice" : 0.14658129805029452,
        "sequenceId" : 0,
        "status" : "UNCHANGED"
      }, {
        "quantity" : 6.027456183070403,
        "purchasedDate" : { },
        "commission" : 0.5962133916683182,
        "instrument" : {
          "symbol" : "symbol",
          "description" : "description",
          "assetType" : "EQUITY"
        },
        "averagePrice" : 0.14658129805029452,
        "sequenceId" : 0,
        "status" : "UNCHANGED"
      } ],
      "status" : "UNCHANGED"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Watchlist
 * Create watchlist for specific account.This method does not verify that the symbol or asset type are valid.
 *
 * body WatchListRequest  (optional)
 * accountId String 
 * no response value expected for this operation
 **/
exports.accountsAccountIdWatchlistsPOST = function(body,accountId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Watchlists
 * Specific watchlist for a specific account.
 *
 * accountId String 
 * watchlistId String 
 * returns WatchListResponse
 **/
exports.accountsAccountIdWatchlistsWatchlistIdGET = function(accountId,watchlistId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : {
    "schema" : {
      "accountId" : "accountId",
      "watchlistId" : "watchlistId",
      "name" : "name",
      "watchlistItems" : [ {
        "quantity" : 6.027456183070403,
        "purchasedDate" : { },
        "commission" : 0.5962133916683182,
        "instrument" : {
          "symbol" : "symbol",
          "description" : "description",
          "assetType" : "EQUITY"
        },
        "averagePrice" : 0.14658129805029452,
        "sequenceId" : 0,
        "status" : "UNCHANGED"
      }, {
        "quantity" : 6.027456183070403,
        "purchasedDate" : { },
        "commission" : 0.5962133916683182,
        "instrument" : {
          "symbol" : "symbol",
          "description" : "description",
          "assetType" : "EQUITY"
        },
        "averagePrice" : 0.14658129805029452,
        "sequenceId" : 0,
        "status" : "UNCHANGED"
      } ],
      "status" : "UNCHANGED"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Watchlist
 * Partially update watchlist for a specific account: change watchlist name, add to the beginning/end of a watchlist, update or delete items in a watchlist. This method does not verify that the symbol or asset type are valid.
 *
 * body WatchListRequest  (optional)
 * accountId String 
 * watchlistId String 
 * no response value expected for this operation
 **/
exports.accountsAccountIdWatchlistsWatchlistIdPATCH = function(body,accountId,watchlistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Replace Watchlist
 * Replace watchlist for a specific account.
 *
 * body WatchListRequest  (optional)
 * accountId String 
 * watchlistId String 
 * no response value expected for this operation
 **/
exports.accountsAccountIdWatchlistsWatchlistIdPUT = function(body,accountId,watchlistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Watchlists for Multiple Accounts
 * All watchlists for all of the user's linked accounts.
 *
 * returns WatchListResponse
 **/
exports.accountsWatchlistsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : {
    "schema" : {
      "accountId" : "accountId",
      "watchlistId" : "watchlistId",
      "name" : "name",
      "watchlistItems" : [ {
        "quantity" : 6.027456183070403,
        "purchasedDate" : { },
        "commission" : 0.5962133916683182,
        "instrument" : {
          "symbol" : "symbol",
          "description" : "description",
          "assetType" : "EQUITY"
        },
        "averagePrice" : 0.14658129805029452,
        "sequenceId" : 0,
        "status" : "UNCHANGED"
      }, {
        "quantity" : 6.027456183070403,
        "purchasedDate" : { },
        "commission" : 0.5962133916683182,
        "instrument" : {
          "symbol" : "symbol",
          "description" : "description",
          "assetType" : "EQUITY"
        },
        "averagePrice" : 0.14658129805029452,
        "sequenceId" : 0,
        "status" : "UNCHANGED"
      } ],
      "status" : "UNCHANGED"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

