/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 1.0.0-oas3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 1.0.0-oas3
*/
export default class AuthenticationApi {

    /**
    * Constructs a new AuthenticationApi. 
    * @alias module:api/AuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Post Access Token
     * The token endpoint returns an access token along with an optional refresh token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    oauth2TokenPOSTWithHttpInfo(GrantType, RefreshToken, AccessType, Code, ClientId, RedirectUri) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'grant_type': GrantType,
        'refresh_token': RefreshToken,
        'access_type': AccessType,
        'code': Code,
        'client_id': ClientId,
        'redirect_uri': RedirectUri
      };

      let authNames = ['application'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/oauth2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post Access Token
     * The token endpoint returns an access token along with an optional refresh token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    oauth2TokenPOST(GrantType, RefreshToken, AccessType, Code, ClientId, RedirectUri) {
      return this.oauth2TokenPOSTWithHttpInfo(GrantType, RefreshToken, AccessType, Code, ClientId, RedirectUri)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
