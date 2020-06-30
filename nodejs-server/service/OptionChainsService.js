'use strict';


/**
 * Get Option Chain
 * Get option chain for an optionable Symbol
 *
 * apikey String Pass your OAuth User ID to make an unauthenticated request for delayed data. (optional)
 * symbol String Enter one symbol (optional)
 * contractType String Type of contracts to return in the chain. Can be CALL, PUT, or ALL. Default is ALL. (optional)
 * strikeCount Integer The number of strikes to return above and below the at-the-money price. (optional)
 * includeQuotes Boolean Include quotes for options in the option chain. Can be TRUE or FALSE. Default is FALSE. (optional)
 * strategy Strategy Passing a value returns a Strategy Chain. Possible values are SINGLE, ANALYTICAL (allows use of the volatility, underlyingPrice, interestRate, and daysToExpiration params to calculate theoretical values), COVERED, VERTICAL, CALENDAR, STRANGLE, STRADDLE, BUTTERFLY, CONDOR, DIAGONAL, COLLAR, or ROLL. Default is SINGLE. (optional)
 * interval Integer Strike interval for spread strategy chains (see strategy param). (optional)
 * strike BigDecimal Provide a strike price to return options only at that strike price. (optional)
 * range String Returns options for the given range. Possible values are: ITM: In-the-money NTM: Near-the-money OTM: Out-of-the-money SAK: Strikes Above Market SBK: Strikes Below Market SNK: Strikes Near Market ALL: All Strikes Default is ALL. (optional)
 * fromDate Date Only return expirations after this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz. (optional)
 * toDate Date Only return expirations before this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz. (optional)
 * volatility BigDecimal Volatility to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param). (optional)
 * underlyingPrice BigDecimal Underlying price to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param). (optional)
 * interestRate BigDecimal Interest rate to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param). (optional)
 * daysToExpiration Integer Days to expiration to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param) (optional)
 * expMonth String Return only options expiring in the specified month. Month is given in the three character format. Example: JAN Default is ALL. (optional)
 * optionType String Type of contracts to return. Possible values are: S: Standard contract NS: Non-standard contract ALL: All contracts Default is ALL. (optional)
 * returns OptionChain
 **/
exports.marketdataChainsGET = function(apikey,symbol,contractType,strikeCount,includeQuotes,strategy,interval,strike,range,fromDate,toDate,volatility,underlyingPrice,interestRate,daysToExpiration,expMonth,optionType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "symbol",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

