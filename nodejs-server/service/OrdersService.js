'use strict';


/**
 * Cancel Order
 * Cancel a specific order for a spcific account
 *
 * accountId Integer 
 * orderId Integer 
 * authorization String Supply an access token to make an authenticated request. The formate is Bearer <access token>. (optional)
 * no response value expected for this operation
 **/
exports.accountsAccountIdOrdersOrderIdDELETE = function(accountId,orderId,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

