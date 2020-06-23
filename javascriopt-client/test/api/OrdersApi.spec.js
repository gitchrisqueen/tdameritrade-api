/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 1.0.0-oas3
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
    factory(root.expect, root.@GitchrisqueenTdameritradeApi);
  }
}(this, function(expect, @GitchrisqueenTdameritradeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @GitchrisqueenTdameritradeApi.OrdersApi();
  });

  describe('(package)', function() {
    describe('OrdersApi', function() {
      describe('accountsAccountIdOrdersOrderIdDELETE', function() {
        it('should call accountsAccountIdOrdersOrderIdDELETE successfully', function(done) {
          // TODO: uncomment, update parameter values for accountsAccountIdOrdersOrderIdDELETE call and complete the assertions
          /*
          var AccountId = 56;
          var OrderId = 56;

          instance.accountsAccountIdOrdersOrderIdDELETE(AccountId, OrderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(@GitchrisqueenTdameritradeApi.EASObject);
            expect(data.AccessToken).to.be.a('string');
            expect(data.AccessToken).to.be("");
            expect(data.ExpiresIn).to.be.a('number');
            expect(data.ExpiresIn).to.be(0);
            expect(data.RefreshToken).to.be.a('string');
            expect(data.RefreshToken).to.be("");
            expect(data.RefreshTokenExpiresIn).to.be.a('number');
            expect(data.RefreshTokenExpiresIn).to.be(0);
            expect(data.Scope).to.be.a('string');
            expect(data.Scope).to.be("");
            expect(data.TokenType).to.be.a('string');
            expect(data.TokenType).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
