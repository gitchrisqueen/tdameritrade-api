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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.@GitchrisqueenTdameritradeApiJsClient);
  }
}(this, function(expect, @GitchrisqueenTdameritradeApiJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @GitchrisqueenTdameritradeApiJsClient.PriceHistoryApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PriceHistoryApi', function() {
    describe('marketdataSymbolPricehistoryGET', function() {
      it('should call marketdataSymbolPricehistoryGET successfully', function(done) {
        //uncomment below and update the code to test marketdataSymbolPricehistoryGET
        //instance.marketdataSymbolPricehistoryGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
