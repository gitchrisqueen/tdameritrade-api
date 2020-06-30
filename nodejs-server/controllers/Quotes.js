'use strict';

var utils = require('../utils/writer.js');
var Quotes = require('../service/QuotesService');

module.exports.marketdataQuotesGET = function marketdataQuotesGET (req, res, next, apikey, symbol) {
  Quotes.marketdataQuotesGET(apikey, symbol)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.marketdataSymbolQuotesGET = function marketdataSymbolQuotesGET (req, res, next, symbol, apikey) {
  Quotes.marketdataSymbolQuotesGET(symbol, apikey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
