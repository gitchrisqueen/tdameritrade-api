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
    instance = new GitChrisQueen_TDA_JS.EASObject();
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

  describe('EASObject', function() {
    it('should create an instance of EASObject', function() {
      // uncomment below and update the code to test EASObject
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.EASObject);
    });

    it('should have the property access_token (base name: "access_token")', function() {
      // uncomment below and update the code to test the property access_token
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property refresh_token (base name: "refresh_token")', function() {
      // uncomment below and update the code to test the property refresh_token
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property token_type (base name: "token_type")', function() {
      // uncomment below and update the code to test the property token_type
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property expires_in (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expires_in
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property refresh_token_expires_in (base name: "refresh_token_expires_in")', function() {
      // uncomment below and update the code to test the property refresh_token_expires_in
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

  });

}));