'use strict';

var utils = require('../utils/writer.js');
var Authentication = require('../service/AuthenticationService');

module.exports.oauth2TokenPOST = function oauth2TokenPOST (req, res, next, grant_type, refresh_token, access_type, code, client_id, redirect_uri) {
  Authentication.oauth2TokenPOST(grant_type, refresh_token, access_type, code, client_id, redirect_uri)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
