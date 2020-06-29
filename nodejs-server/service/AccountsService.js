'use strict';


/**
 * Get Account
 * Account balances, positions, and orders for a specific account.
 *
 * accountId Integer 
 * fields String Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders (optional)
 * returns Account
 **/
exports.accountsAccountIdGET = function(accountId,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "securitiesAccount" : {
    "schema" : {
      "schema" : ""
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
 * Get Accounts
 * Account balances, positions, and orders for all linked accounts.
 *
 * fields String Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders (optional)
 * returns Account
 **/
exports.accountsGET = function(fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "securitiesAccount" : {
    "schema" : {
      "schema" : ""
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

