'use strict';

var utils = require('../utils/writer.js');
var Inntruments = require('../service/InntrumentsService');

module.exports.instrumentsGET = function instrumentsGET (req, res, next, symbol, projection, apikey) {
  Inntruments.instrumentsGET(symbol, projection, apikey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
