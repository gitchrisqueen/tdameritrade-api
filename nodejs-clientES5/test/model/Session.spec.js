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

  describe('(package)', function() {
    describe('Session', function() {
      beforeEach(function() {
        instance = GitChrisQueen_TDA_JS.Session;
      });

      it('should create an instance of Session', function() {
        // TODO: update the code to test Session
        expect(instance).to.be.a('object');
      });

      it('should have the property NORMAL', function() {
        expect(instance).to.have.property('NORMAL');
        expect(instance.NORMAL).to.be("NORMAL");
      });

      it('should have the property AM', function() {
        expect(instance).to.have.property('AM');
        expect(instance.AM).to.be("AM");
      });

      it('should have the property PM', function() {
        expect(instance).to.have.property('PM');
        expect(instance.PM).to.be("PM");
      });

      it('should have the property SEAMLESS', function() {
        expect(instance).to.have.property('SEAMLESS');
        expect(instance.SEAMLESS).to.be("SEAMLESS");
      });

    });
  });

}));