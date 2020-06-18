'use strict';


/**
 * Cancel Order
 * Cancel a specific order for a spcific account
 *
 * accountId Integer 
 * orderId Integer 
 * returns EASObject
 **/
exports.accountsAccountIdOrdersOrderIdDELETE = function(accountId,orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "access_token" : "access_token",
  "refresh_token_expires_in" : 6,
  "refresh_token" : "refresh_token",
  "scope" : "scope",
  "token_type" : "token_type",
  "expires_in" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

