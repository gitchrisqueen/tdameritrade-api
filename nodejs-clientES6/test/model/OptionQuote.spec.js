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
    instance = new GitChrisQueen_TDA_JS.OptionQuote();
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

  describe('OptionQuote', function() {
    it('should create an instance of OptionQuote', function() {
      // uncomment below and update the code to test OptionQuote
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.OptionQuote);
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property bidPrice (base name: "bidPrice")', function() {
      // uncomment below and update the code to test the property bidPrice
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property bidSize (base name: "bidSize")', function() {
      // uncomment below and update the code to test the property bidSize
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property askPrice (base name: "askPrice")', function() {
      // uncomment below and update the code to test the property askPrice
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property askSize (base name: "askSize")', function() {
      // uncomment below and update the code to test the property askSize
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property lastPrice (base name: "lastPrice")', function() {
      // uncomment below and update the code to test the property lastPrice
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property lastSize (base name: "lastSize")', function() {
      // uncomment below and update the code to test the property lastSize
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property openPrice (base name: "openPrice")', function() {
      // uncomment below and update the code to test the property openPrice
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property highPrice (base name: "highPrice")', function() {
      // uncomment below and update the code to test the property highPrice
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property lowPrice (base name: "lowPrice")', function() {
      // uncomment below and update the code to test the property lowPrice
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property closePrice (base name: "closePrice")', function() {
      // uncomment below and update the code to test the property closePrice
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property netChange (base name: "netChange")', function() {
      // uncomment below and update the code to test the property netChange
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property totalVolume (base name: "totalVolume")', function() {
      // uncomment below and update the code to test the property totalVolume
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property quoteTimeInLong (base name: "quoteTimeInLong")', function() {
      // uncomment below and update the code to test the property quoteTimeInLong
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property tradeTimeInLong (base name: "tradeTimeInLong")', function() {
      // uncomment below and update the code to test the property tradeTimeInLong
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property mark (base name: "mark")', function() {
      // uncomment below and update the code to test the property mark
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property openInterest (base name: "openInterest")', function() {
      // uncomment below and update the code to test the property openInterest
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property volatility (base name: "volatility")', function() {
      // uncomment below and update the code to test the property volatility
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property moneyIntrinsicValue (base name: "moneyIntrinsicValue")', function() {
      // uncomment below and update the code to test the property moneyIntrinsicValue
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property multiplier (base name: "multiplier")', function() {
      // uncomment below and update the code to test the property multiplier
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property strikePrice (base name: "strikePrice")', function() {
      // uncomment below and update the code to test the property strikePrice
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property contractType (base name: "contractType")', function() {
      // uncomment below and update the code to test the property contractType
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property underlying (base name: "underlying")', function() {
      // uncomment below and update the code to test the property underlying
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property timeValue (base name: "timeValue")', function() {
      // uncomment below and update the code to test the property timeValue
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property deliverables (base name: "deliverables")', function() {
      // uncomment below and update the code to test the property deliverables
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property delta (base name: "delta")', function() {
      // uncomment below and update the code to test the property delta
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property gamma (base name: "gamma")', function() {
      // uncomment below and update the code to test the property gamma
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property theta (base name: "theta")', function() {
      // uncomment below and update the code to test the property theta
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property vega (base name: "vega")', function() {
      // uncomment below and update the code to test the property vega
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property rho (base name: "rho")', function() {
      // uncomment below and update the code to test the property rho
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property securityStatus (base name: "securityStatus")', function() {
      // uncomment below and update the code to test the property securityStatus
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property theoreticalOptionValue (base name: "theoreticalOptionValue")', function() {
      // uncomment below and update the code to test the property theoreticalOptionValue
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property underlyingPrice (base name: "underlyingPrice")', function() {
      // uncomment below and update the code to test the property underlyingPrice
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property uvExpirationType (base name: "uvExpirationType")', function() {
      // uncomment below and update the code to test the property uvExpirationType
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property exchange (base name: "exchange")', function() {
      // uncomment below and update the code to test the property exchange
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property exchangeName (base name: "exchangeName")', function() {
      // uncomment below and update the code to test the property exchangeName
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

    it('should have the property settlementType (base name: "settlementType")', function() {
      // uncomment below and update the code to test the property settlementType
      //var instane = new GitChrisQueen_TDA_JS.OptionQuote();
      //expect(instance).to.be();
    });

  });

}));
