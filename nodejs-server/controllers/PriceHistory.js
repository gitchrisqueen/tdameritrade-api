'use strict';

var utils = require('../utils/writer.js');
var PriceHistory = require('../service/PriceHistoryService');

module.exports.marketdataSymbolPricehistoryGET = function marketdataSymbolPricehistoryGET (req, res, next, symbol, periodType, apikey, period, frequencyType, frequency, endDate, startDate, needExtendedHoursData) {
  PriceHistory.marketdataSymbolPricehistoryGET(symbol, periodType, apikey, period, frequencyType, frequency, endDate, startDate, needExtendedHoursData)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
