'use strict';


/**
 * Get price history for a symbol
 *
 * symbol String 
 * periodType PeriodType 
 * apikey String  (optional)
 * period Integer  (optional)
 * frequencyType FrequencyType  (optional)
 * frequency Integer  (optional)
 * endDate Integer  (optional)
 * startDate Integer  (optional)
 * needExtendedHoursData Boolean  (optional)
 * returns CandleList
 **/
exports.marketdataSymbolPricehistoryGET = function(symbol,periodType,apikey,period,frequencyType,frequency,endDate,startDate,needExtendedHoursData) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "symbol",
  "candles" : [ {
    "volume" : 2.3021358869347655,
    "datetime" : 6,
    "high" : 1.4658129805029452,
    "low" : 5.962133916683182,
    "close" : 0.8008281904610115,
    "open" : 5.637376656633329
  }, {
    "volume" : 2.3021358869347655,
    "datetime" : 6,
    "high" : 1.4658129805029452,
    "low" : 5.962133916683182,
    "close" : 0.8008281904610115,
    "open" : 5.637376656633329
  } ],
  "empty" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

