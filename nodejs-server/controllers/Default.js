'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.pingGET = function pingGET (req, res, next) {
  Default.pingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
