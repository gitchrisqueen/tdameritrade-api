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

  beforeEach(function() {
    instance = new GitChrisQueen_TDA_JS.OptionChainsApi();
  });

  describe('(package)', function() {
    describe('OptionChainsApi', function() {
      describe('marketdataChainsGET', function() {
        it('should call marketdataChainsGET successfully', function(done) {
          // TODO: uncomment, update parameter values for marketdataChainsGET call and complete the assertions
          /*
          var opts = {};
          opts.apikey = "apikey_example";
          opts.symbol = "symbol_example";
          opts.contractType = "ALL";
          opts.strikeCount = 56;
          opts.includeQuotes = false;
          opts.strategy = "strategy_example";
          opts.interval = 56;
          opts.strike = 8.14;
          opts.range = "range_example";
          opts.fromDate = new Date("2013-10-20T19:20:30+01:00");
          opts.toDate = new Date("2013-10-20T19:20:30+01:00");
          opts.volatility = 8.14;
          opts.underlyingPrice = 8.14;
          opts.interestRate = 8.14;
          opts.daysToExpiration = 56;
          opts.expMonth = "ALL";
          opts.optionType = "ALL";

          instance.marketdataChainsGET(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(GitChrisQueen_TDA_JS.GetOptionChainResponse);

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
