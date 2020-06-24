'use strict';

var utils = require('../utils/writer.js');
var SearchInstruments = require('../service/SearchInstrumentsService');

module.exports.instrumentsGET = function instrumentsGET (req, res, next, symbol, projection, apikey) {
  SearchInstruments.instrumentsGET(symbol, projection, apikey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
