'use strict';

var utils = require('../utils/writer.js');
var OptionChains = require('../service/OptionChainsService');

module.exports.marketdataChainsGET = function marketdataChainsGET (req, res, next, apikey, symbol, contractType, strikeCount, includeQuotes, strategy, interval, strike, range, fromDate, toDate, volatility, underlyingPrice, interestRate, daysToExpiration, expMonth, optionType) {
  OptionChains.marketdataChainsGET(apikey, symbol, contractType, strikeCount, includeQuotes, strategy, interval, strike, range, fromDate, toDate, volatility, underlyingPrice, interestRate, daysToExpiration, expMonth, optionType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
