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
    instance = new @GitchrisqueenTdameritradeApiJsClient.PostAccessBody();
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

  describe('PostAccessBody', function() {
    it('should create an instance of PostAccessBody', function() {
      // uncomment below and update the code to test PostAccessBody
      //var instane = new @GitchrisqueenTdameritradeApiJsClient.PostAccessBody();
      //expect(instance).to.be.a(@GitchrisqueenTdameritradeApiJsClient.PostAccessBody);
    });

    it('should have the property AccessType (base name: "access_type")', function() {
      // uncomment below and update the code to test the property AccessType
      //var instane = new @GitchrisqueenTdameritradeApiJsClient.PostAccessBody();
      //expect(instance).to.be();
    });

    it('should have the property ClientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property ClientId
      //var instane = new @GitchrisqueenTdameritradeApiJsClient.PostAccessBody();
      //expect(instance).to.be();
    });

    it('should have the property Code (base name: "code")', function() {
      // uncomment below and update the code to test the property Code
      //var instane = new @GitchrisqueenTdameritradeApiJsClient.PostAccessBody();
      //expect(instance).to.be();
    });

    it('should have the property GrantType (base name: "grant_type")', function() {
      // uncomment below and update the code to test the property GrantType
      //var instane = new @GitchrisqueenTdameritradeApiJsClient.PostAccessBody();
      //expect(instance).to.be();
    });

    it('should have the property RedirectUri (base name: "redirect_uri")', function() {
      // uncomment below and update the code to test the property RedirectUri
      //var instane = new @GitchrisqueenTdameritradeApiJsClient.PostAccessBody();
      //expect(instance).to.be();
    });

    it('should have the property RefreshToken (base name: "refresh_token")', function() {
      // uncomment below and update the code to test the property RefreshToken
      //var instane = new @GitchrisqueenTdameritradeApiJsClient.PostAccessBody();
      //expect(instance).to.be();
    });

  });

}));