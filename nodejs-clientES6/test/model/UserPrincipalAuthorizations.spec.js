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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitChrisQueen_TDA_JS);
  }
}(this, function(expect, GitChrisQueen_TDA_JS) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
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

  describe('UserPrincipalAuthorizations', function() {
    it('should create an instance of UserPrincipalAuthorizations', function() {
      // uncomment below and update the code to test UserPrincipalAuthorizations
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.UserPrincipalAuthorizations);
    });

    it('should have the property apex (base name: "apex")', function() {
      // uncomment below and update the code to test the property apex
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be();
    });

    it('should have the property levelTwoQuotes (base name: "levelTwoQuotes")', function() {
      // uncomment below and update the code to test the property levelTwoQuotes
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be();
    });

    it('should have the property stockTrading (base name: "stockTrading")', function() {
      // uncomment below and update the code to test the property stockTrading
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be();
    });

    it('should have the property marginTrading (base name: "marginTrading")', function() {
      // uncomment below and update the code to test the property marginTrading
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be();
    });

    it('should have the property streamingNews (base name: "streamingNews")', function() {
      // uncomment below and update the code to test the property streamingNews
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be();
    });

    it('should have the property optionTradingLevel (base name: "optionTradingLevel")', function() {
      // uncomment below and update the code to test the property optionTradingLevel
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be();
    });

    it('should have the property streamerAccess (base name: "streamerAccess")', function() {
      // uncomment below and update the code to test the property streamerAccess
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be();
    });

    it('should have the property advancedMargin (base name: "advancedMargin")', function() {
      // uncomment below and update the code to test the property advancedMargin
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be();
    });

    it('should have the property scottradeAccount (base name: "scottradeAccount")', function() {
      // uncomment below and update the code to test the property scottradeAccount
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalAuthorizations();
      //expect(instance).to.be();
    });

  });

}));