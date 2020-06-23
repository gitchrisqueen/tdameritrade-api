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
 * returns EASObject
 **/
exports.oauth2TokenPOST = function(grant_type,refresh_token,access_type,code,client_id,redirect_uri) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "access_token" : "access_token",
  "refresh_token_expires_in" : 6,
  "refresh_token" : "refresh_token",
  "scope" : "scope",
  "token_type" : "token_type",
  "expires_in" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

