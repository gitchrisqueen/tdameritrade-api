'use strict';


/**
 * Get Quotes
 * Get quote for one or more symbols
 *
 * apikey String  (optional)
 * symbol String  (optional)
 * returns GetQuoteResponse
 **/
exports.marketdataQuotesGET = function(apikey,symbol) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : {
    "schemas" : ""
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
 * Get Quote
 * Get quote for a symbol
 *
 * symbol String 
 * apikey String  (optional)
 * returns GetQuoteResponse
 **/
exports.marketdataSymbolQuotesGET = function(symbol,apikey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : {
    "schemas" : ""
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

