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
    instance = new GitChrisQueen_TDA_JS.WatchlistApi();
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

  describe('WatchlistApi', function() {
    describe('accountsAccountIdWatchlistsGET', function() {
      it('should call accountsAccountIdWatchlistsGET successfully', function(done) {
        //uncomment below and update the code to test accountsAccountIdWatchlistsGET
        //instance.accountsAccountIdWatchlistsGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountsAccountIdWatchlistsPOST', function() {
      it('should call accountsAccountIdWatchlistsPOST successfully', function(done) {
        //uncomment below and update the code to test accountsAccountIdWatchlistsPOST
        //instance.accountsAccountIdWatchlistsPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountsAccountIdWatchlistsWatchlistIdGET', function() {
      it('should call accountsAccountIdWatchlistsWatchlistIdGET successfully', function(done) {
        //uncomment below and update the code to test accountsAccountIdWatchlistsWatchlistIdGET
        //instance.accountsAccountIdWatchlistsWatchlistIdGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountsAccountIdWatchlistsWatchlistIdPATCH', function() {
      it('should call accountsAccountIdWatchlistsWatchlistIdPATCH successfully', function(done) {
        //uncomment below and update the code to test accountsAccountIdWatchlistsWatchlistIdPATCH
        //instance.accountsAccountIdWatchlistsWatchlistIdPATCH(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountsAccountIdWatchlistsWatchlistIdPUT', function() {
      it('should call accountsAccountIdWatchlistsWatchlistIdPUT successfully', function(done) {
        //uncomment below and update the code to test accountsAccountIdWatchlistsWatchlistIdPUT
        //instance.accountsAccountIdWatchlistsWatchlistIdPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountsWatchlistsGET', function() {
      it('should call accountsWatchlistsGET successfully', function(done) {
        //uncomment below and update the code to test accountsWatchlistsGET
        //instance.accountsWatchlistsGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
