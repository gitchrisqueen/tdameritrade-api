/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import EASObject from '../model/EASObject';
import SearchInstrumentResponse from '../model/SearchInstrumentResponse';

/**
* SearchInstruments service.
* @module api/SearchInstrumentsApi
* @version 0.1.4
*/
export default class SearchInstrumentsApi {

    /**
    * Constructs a new SearchInstrumentsApi. 
    * @alias module:api/SearchInstrumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Search or retrieve instrument data, including fundamental data
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchInstrumentResponse} and HTTP response
     */
    instrumentsGETWithHttpInfo(symbol, projection, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'apikey': opts['apikey'],
        'symbol': symbol,
        'projection': projection
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SearchInstrumentResponse;

      return this.apiClient.callApi(
        '/instruments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search or retrieve instrument data, including fundamental data
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchInstrumentResponse}
     */
    instrumentsGET(symbol, projection, opts) {
      return this.instrumentsGETWithHttpInfo(symbol, projection, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
