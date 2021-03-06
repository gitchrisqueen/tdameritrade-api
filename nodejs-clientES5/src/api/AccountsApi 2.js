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
    define(['ApiClient', 'model/Account', 'model/EASObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Account'), require('../model/EASObject'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.AccountsApi = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.Account, root.GitChrisQueen_TDA_JS.EASObject);
  }
}(this, function(ApiClient, Account, EASObject) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 0.1.4
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Account
     * Account balances, positions, and orders for a specific account.
     * @param {Number} accountId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Account} and HTTP response
     */
    this.accountsAccountIdGETWithHttpInfo = function(accountId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling accountsAccountIdGET");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'fields': opts['fields'],
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
      var returnType = Account;

      return this.apiClient.callApi(
        '/accounts/{accountId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Account
     * Account balances, positions, and orders for a specific account.
     * @param {Number} accountId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Account}
     */
    this.accountsAccountIdGET = function(accountId, opts) {
      return this.accountsAccountIdGETWithHttpInfo(accountId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Accounts
     * Account balances, positions, and orders for all linked accounts.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Account} and HTTP response
     */
    this.accountsGETWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
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
      var returnType = Account;

      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Accounts
     * Account balances, positions, and orders for all linked accounts.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Account}
     */
    this.accountsGET = function(opts) {
      return this.accountsGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
