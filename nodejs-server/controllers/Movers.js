'use strict';

var utils = require('../utils/writer.js');
var Movers = require('../service/MoversService');

module.exports.marketdataIndexMoversGET = function marketdataIndexMoversGET (req, res, next, index, apikey, direction, change) {
  Movers.marketdataIndexMoversGET(index, apikey, direction, change)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
