'use strict';

var utils = require('../utils/writer.js');
var MarketHours = require('../service/MarketHoursService');

module.exports.marketdataHoursGET = function marketdataHoursGET (req, res, next, apiKey, markets, date) {
  MarketHours.marketdataHoursGET(apiKey, markets, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.marketdataMarketHoursGET = function marketdataMarketHoursGET (req, res, next, market, apiKey, date) {
  MarketHours.marketdataMarketHoursGET(market, apiKey, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
