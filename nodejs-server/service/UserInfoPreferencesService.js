'use strict';


/**
 * Get Preferences
 * Preferences for a specific account.
 *
 * accountId String 
 * returns Preferences
 **/
exports.accountsAccountIdPreferencesGET = function(accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "directOptionsRouting" : false,
  "defaultEquityOrderLegInstruction" : "BUY",
  "expressTrading" : false,
  "authTokenTimeout" : "FIFTY_FIVE_MINUTES",
  "defaultEquityQuantity" : 0,
  "defaultEquityOrderType" : "MARKET",
  "defaultEquityOrderDuration" : "DAY",
  "mutualFundTaxLotMethod" : {
    "schema" : "FIFO"
  },
  "defaultAdvancedToolLaunch" : "TA",
  "defaultEquityOrderPriceLinkType" : "VALUE",
  "directEquityRouting" : false,
  "defaultEquityOrderMarketSession" : "AM"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Preferences
 * Update preferences for a specific account. Please note that the directOptionsRouting and directEquityRouting values cannot be modified via this operation.
 *
 * body Preferences  (optional)
 * accountId String 
 * no response value expected for this operation
 **/
exports.accountsAccountIdPreferencesPUT = function(body,accountId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get User Principals
 * User Principal details.
 *
 * fields String A comma separated String which allows one to specify additional fields to return. None of these fields are returned by default. Possible values in this String can be: streamerSubscriptionKeys,streamerConnectionInfo,preferences, surrogateIds. Example: fields=streamerSubscriptionKeys,streamerConnectionInfo (optional)
 * returns UserPrincipal
 **/
exports.userprincipalsGET = function(fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accessLevel" : "accessLevel",
  "streamerInfo" : {
    "streamerSocketUrl" : "streamerSocketUrl",
    "accessLevel" : "accessLevel",
    "streamerBinaryUrl" : "streamerBinaryUrl",
    "appId" : "appId",
    "acl" : "acl",
    "userGroup" : "userGroup",
    "tokenTimestamp" : "2000-01-23T04:56:07.000+00:00",
    "token" : "token"
  },
  "professionalStatus" : "PROFESSIONAL",
  "authToken" : "authToken",
  "userCdDomainId" : "userCdDomainId",
  "userId" : "userId",
  "tokenExpirationTime" : "2000-01-23T04:56:07.000+00:00",
  "quotes" : {
    "isForexDelayed" : false,
    "isOpraDelayed" : false,
    "isAmexDelayed" : false,
    "isNasdaqDelayed" : false,
    "isIceDelayed" : false,
    "isCmeDelayed" : false,
    "isNyseDelayed" : false
  },
  "lastLoginTime" : "2000-01-23T04:56:07.000+00:00",
  "loginTime" : "2000-01-23T04:56:07.000+00:00",
  "stalePassword" : false,
  "primaryAccountId" : "primaryAccountId",
  "streamerSubscriptionKeys" : {
    "schema" : {
      "keys" : [ {
        "key" : "key"
      }, {
        "key" : "key"
      } ]
    }
  },
  "accounts" : [ {
    "accountId" : "accountId",
    "preferences" : {
      "directOptionsRouting" : false,
      "defaultEquityOrderLegInstruction" : "BUY",
      "expressTrading" : false,
      "authTokenTimeout" : "FIFTY_FIVE_MINUTES",
      "defaultEquityQuantity" : 0,
      "defaultEquityOrderType" : "MARKET",
      "defaultEquityOrderDuration" : "DAY",
      "mutualFundTaxLotMethod" : {
        "schema" : "FIFO"
      },
      "defaultAdvancedToolLaunch" : "TA",
      "defaultEquityOrderPriceLinkType" : "VALUE",
      "directEquityRouting" : false,
      "defaultEquityOrderMarketSession" : "AM"
    },
    "displayName" : "displayName",
    "segment" : "segment",
    "authorizations" : {
      "levelTwoQuotes" : false,
      "optionTradingLevel" : "COVERED",
      "streamerAccess" : false,
      "marginTrading" : false,
      "streamingNews" : false,
      "scottradeAccount" : false,
      "advancedMargin" : false,
      "apex" : false,
      "stockTrading" : false
    },
    "description" : "description",
    "company" : "company",
    "acl" : "acl",
    "surrogateIds" : {
      "key" : "surrogateIds"
    },
    "accountCdDomainId" : "accountCdDomainId"
  }, {
    "accountId" : "accountId",
    "preferences" : {
      "directOptionsRouting" : false,
      "defaultEquityOrderLegInstruction" : "BUY",
      "expressTrading" : false,
      "authTokenTimeout" : "FIFTY_FIVE_MINUTES",
      "defaultEquityQuantity" : 0,
      "defaultEquityOrderType" : "MARKET",
      "defaultEquityOrderDuration" : "DAY",
      "mutualFundTaxLotMethod" : {
        "schema" : "FIFO"
      },
      "defaultAdvancedToolLaunch" : "TA",
      "defaultEquityOrderPriceLinkType" : "VALUE",
      "directEquityRouting" : false,
      "defaultEquityOrderMarketSession" : "AM"
    },
    "displayName" : "displayName",
    "segment" : "segment",
    "authorizations" : {
      "levelTwoQuotes" : false,
      "optionTradingLevel" : "COVERED",
      "streamerAccess" : false,
      "marginTrading" : false,
      "streamingNews" : false,
      "scottradeAccount" : false,
      "advancedMargin" : false,
      "apex" : false,
      "stockTrading" : false
    },
    "description" : "description",
    "company" : "company",
    "acl" : "acl",
    "surrogateIds" : {
      "key" : "surrogateIds"
    },
    "accountCdDomainId" : "accountCdDomainId"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Streamer Subscription Keys
 * SubscriptionKey for provided accounts or default accounts.
 *
 * accountIds String A comma separated string of account IDs, to fetch subscription keys for each of them. (optional)
 * returns SubscriptionKey
 **/
exports.userprincipalsStreamersubscriptionkeysGET = function(accountIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keys" : [ {
    "key" : "key"
  }, {
    "key" : "key"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

