'use strict';

var utils = require('../utils/writer.js');
var Insntruments = require('../service/InsntrumentsService');

module.exports.instrumentsGET = function instrumentsGET (req, res, next, symbol, projection, apikey) {
  Insntruments.instrumentsGET(symbol, projection, apikey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
