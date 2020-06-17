'use strict';


/**
 * Post Access Token
 * The token endpoint returns an access token along with an optional refresh token.
 *
 * grant_type String  (optional)
 * refresh_token String  (optional)
 * access_type String  (optional)
 * code String  (optional)
 * client_id Integer  (optional)
 * redirect_uri String  (optional)
 * no response value expected for this operation
 **/
exports.oauth2TokenPOST = function(grant_type,refresh_token,access_type,code,client_id,redirect_uri) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

