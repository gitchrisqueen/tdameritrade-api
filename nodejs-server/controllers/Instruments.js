'use strict';

var utils = require('../utils/writer.js');
var Instruments = require('../service/InstrumentsService');

module.exports.instrumentsGET = function instrumentsGET (req, res, next, symbol, projection, apikey) {
  Instruments.instrumentsGET(symbol, projection, apikey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
