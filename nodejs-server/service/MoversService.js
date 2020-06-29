'use strict';


/**
 * Get price history for a symbol
 *
 * index String 
 * apikey String  (optional)
 * direction String  (optional)
 * change String  (optional)
 * returns Mover
 **/
exports.marketdataIndexMoversGET = function(index,apikey,direction,change) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalVolume" : 1,
  "symbol" : "symbol",
  "last" : 6.027456183070403,
  "change" : 0.8008281904610115,
  "description" : "description",
  "direction" : "up"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

