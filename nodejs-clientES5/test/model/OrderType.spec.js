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
    describe('OrderType', function() {
      beforeEach(function() {
        instance = GitChrisQueen_TDA_JS.OrderType;
      });

      it('should create an instance of OrderType', function() {
        // TODO: update the code to test OrderType
        expect(instance).to.be.a('object');
      });

      it('should have the property MARKET', function() {
        expect(instance).to.have.property('MARKET');
        expect(instance.MARKET).to.be("MARKET");
      });

      it('should have the property LIMIT', function() {
        expect(instance).to.have.property('LIMIT');
        expect(instance.LIMIT).to.be("LIMIT");
      });

      it('should have the property STOP', function() {
        expect(instance).to.have.property('STOP');
        expect(instance.STOP).to.be("STOP");
      });

      it('should have the property STOP_LIMIT', function() {
        expect(instance).to.have.property('STOP_LIMIT');
        expect(instance.STOP_LIMIT).to.be("STOP_LIMIT");
      });

      it('should have the property TRAILING_STOP', function() {
        expect(instance).to.have.property('TRAILING_STOP');
        expect(instance.TRAILING_STOP).to.be("TRAILING_STOP");
      });

      it('should have the property MARKET_ON_CLOSE', function() {
        expect(instance).to.have.property('MARKET_ON_CLOSE');
        expect(instance.MARKET_ON_CLOSE).to.be("MARKET_ON_CLOSE");
      });

      it('should have the property EXERCISE', function() {
        expect(instance).to.have.property('EXERCISE');
        expect(instance.EXERCISE).to.be("EXERCISE");
      });

      it('should have the property TRAILING_STOP_LIMIT', function() {
        expect(instance).to.have.property('TRAILING_STOP_LIMIT');
        expect(instance.TRAILING_STOP_LIMIT).to.be("TRAILING_STOP_LIMIT");
      });

      it('should have the property NET_DEBIT', function() {
        expect(instance).to.have.property('NET_DEBIT');
        expect(instance.NET_DEBIT).to.be("NET_DEBIT");
      });

      it('should have the property NET_CREDIT', function() {
        expect(instance).to.have.property('NET_CREDIT');
        expect(instance.NET_CREDIT).to.be("NET_CREDIT");
      });

      it('should have the property NET_ZERO', function() {
        expect(instance).to.have.property('NET_ZERO');
        expect(instance.NET_ZERO).to.be("NET_ZERO");
      });

    });
  });

}));