'use strict';


/**
 * Get Transactions
 * Transaction for a specific account.
 *
 * accountId String 
 * type String Only transactions with the specified type will be returned. (optional)
 * symbol String Only transactions with the specified symbol will be returned. (optional)
 * startDate String Only transactions after the Start Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd. (optional)
 * endDate String Only transactions after the end Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd. (optional)
 * returns Transaction
 **/
exports.accountsAccountIdTransactionsGET = function(accountId,type,symbol,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fees" : {
    "key" : 7.061401241503109
  },
  "clearingReferenceNumber" : "clearingReferenceNumber",
  "orderId" : "orderId",
  "netAmount" : 5.962133916683182,
  "achStatus" : "Approved",
  "sma" : 0.8008281904610115,
  "description" : "description",
  "accruedInterest" : 2.3021358869347655,
  "settlementDate" : "2000-01-23T04:56:07.000+00:00",
  "type" : "TRADE",
  "transactionDate" : "2000-01-23T04:56:07.000+00:00",
  "subAccount" : "subAccount",
  "transactionId" : 5,
  "transactionSubType" : "transactionSubType",
  "transactionItem" : {
    "accountId" : 9,
    "amount" : 3.616076749251911,
    "cost" : 4.145608029883936,
    "price" : 2.027123023002322,
    "instruction" : "BUY",
    "instrument" : {
      "symbol" : "symbol",
      "cusip" : "cusip",
      "underlyingSymbol" : "underlyingSymbol",
      "optionStrikePrice" : 1.2315135367772556,
      "bondInterestRate" : 1.0246457001441578,
      "description" : "description",
      "bondMaturityDate" : "2000-01-23T04:56:07.000+00:00",
      "putCall" : "PUT",
      "optionExpirationDate" : "2000-01-23T04:56:07.000+00:00",
      "assetType" : "EQUITY"
    },
    "parentOrderKey" : 7,
    "positionEffect" : "OPENING",
    "parentChildIndicator" : "parentChildIndicator"
  },
  "dayTradeBuyingPowerEffect" : 1.4658129805029452,
  "requirementReallocationAmount" : 6.027456183070403,
  "cashBalanceEffectFlag" : false,
  "orderDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Transaction
 * Transaction for a specific account.
 *
 * accountId String 
 * transactionId String 
 * returns Transaction
 **/
exports.accountsAccountIdTransactionsTransactionIdGET = function(accountId,transactionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fees" : {
    "key" : 7.061401241503109
  },
  "clearingReferenceNumber" : "clearingReferenceNumber",
  "orderId" : "orderId",
  "netAmount" : 5.962133916683182,
  "achStatus" : "Approved",
  "sma" : 0.8008281904610115,
  "description" : "description",
  "accruedInterest" : 2.3021358869347655,
  "settlementDate" : "2000-01-23T04:56:07.000+00:00",
  "type" : "TRADE",
  "transactionDate" : "2000-01-23T04:56:07.000+00:00",
  "subAccount" : "subAccount",
  "transactionId" : 5,
  "transactionSubType" : "transactionSubType",
  "transactionItem" : {
    "accountId" : 9,
    "amount" : 3.616076749251911,
    "cost" : 4.145608029883936,
    "price" : 2.027123023002322,
    "instruction" : "BUY",
    "instrument" : {
      "symbol" : "symbol",
      "cusip" : "cusip",
      "underlyingSymbol" : "underlyingSymbol",
      "optionStrikePrice" : 1.2315135367772556,
      "bondInterestRate" : 1.0246457001441578,
      "description" : "description",
      "bondMaturityDate" : "2000-01-23T04:56:07.000+00:00",
      "putCall" : "PUT",
      "optionExpirationDate" : "2000-01-23T04:56:07.000+00:00",
      "assetType" : "EQUITY"
    },
    "parentOrderKey" : 7,
    "positionEffect" : "OPENING",
    "parentChildIndicator" : "parentChildIndicator"
  },
  "dayTradeBuyingPowerEffect" : 1.4658129805029452,
  "requirementReallocationAmount" : 6.027456183070403,
  "cashBalanceEffectFlag" : false,
  "orderDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

