/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EASObject', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EASObject'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.SearchInstrumentsApi = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.EASObject, root.GitChrisQueen_TDA_JS.InlineResponse200);
  }
}(this, function(ApiClient, EASObject, InlineResponse200) {
  'use strict';

  /**
   * SearchInstruments service.
   * @module api/SearchInstrumentsApi
   * @version 0.1.4
   */

  /**
   * Constructs a new SearchInstrumentsApi. 
   * @alias module:api/SearchInstrumentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Search or retrieve instrument data, including fundamental data
     * @param {String} symbol Value to pass to the search. See projection description for more information.
     * @param {String} projection The type of request: symbol-search: Retrieve instrument data of a specific symbol or cusip symbol-regex: Retrieve instrument data for all symbols matching regex. Example: symbol=XYZ.* will return all symbols beginning with XYZ desc-search: Retrieve instrument data for instruments whose description contains the word supplied. Example: symbol=FakeCompany will return all instruments with FakeCompany in the description. desc-regex: Search description with full regex support. Example: symbol=XYZ.[A-C] returns all instruments whose descriptions contain a word beginning with XYZ followed by a character A through C. fundamental: Returns fundamental data for a single instrument specified by exact symbol.
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey Pass your OAuth User ID to make an unauthenticated request for delayed data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    this.instrumentsGETWithHttpInfo = function(symbol, projection, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling instrumentsGET");
      }

      // verify the required parameter 'projection' is set
      if (projection === undefined || projection === null) {
        throw new Error("Missing the required parameter 'projection' when calling instrumentsGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apikey': opts['apikey'],
        'symbol': symbol,
        'projection': projection,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/instruments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search or retrieve instrument data, including fundamental data
     * @param {String} symbol Value to pass to the search. See projection description for more information.
     * @param {String} projection The type of request: symbol-search: Retrieve instrument data of a specific symbol or cusip symbol-regex: Retrieve instrument data for all symbols matching regex. Example: symbol=XYZ.* will return all symbols beginning with XYZ desc-search: Retrieve instrument data for instruments whose description contains the word supplied. Example: symbol=FakeCompany will return all instruments with FakeCompany in the description. desc-regex: Search description with full regex support. Example: symbol=XYZ.[A-C] returns all instruments whose descriptions contain a word beginning with XYZ followed by a character A through C. fundamental: Returns fundamental data for a single instrument specified by exact symbol.
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey Pass your OAuth User ID to make an unauthenticated request for delayed data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    this.instrumentsGET = function(symbol, projection, opts) {
      return this.instrumentsGETWithHttpInfo(symbol, projection, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));