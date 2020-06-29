'use strict';


/**
 * Get Hours for Multiple Markets
 *
 * apiKey String  (optional)
 * markets String  (optional)
 * date Date  (optional)
 * returns Hours
 **/
exports.marketdataHoursGET = function(apiKey,markets,date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "product" : "product",
  "isOpen" : true,
  "exchange" : "exchange",
  "sessionHours" : {
    "additionalProperties" : [ "additionalProperties", "additionalProperties" ]
  },
  "category" : "category",
  "marketType" : "BOND",
  "productName" : "productName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Hours for Multiple Markets
 *
 * market String 
 * apiKey String  (optional)
 * date Date  (optional)
 * returns Hours
 **/
exports.marketdataMarketHoursGET = function(market,apiKey,date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "product" : "product",
  "isOpen" : true,
  "exchange" : "exchange",
  "sessionHours" : {
    "additionalProperties" : [ "additionalProperties", "additionalProperties" ]
  },
  "category" : "category",
  "marketType" : "BOND",
  "productName" : "productName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

