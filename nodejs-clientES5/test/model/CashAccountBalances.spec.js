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
    describe('CashAccountBalances', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.CashAccountBalances();
      });

      it('should create an instance of CashAccountBalances', function() {
        // TODO: update the code to test CashAccountBalances
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.CashAccountBalances);
      });

      it('should have the property accruedInterest (base name: "accruedInterest")', function() {
        // TODO: update the code to test the property accruedInterest
        expect(instance).to.have.property('accruedInterest');
        // expect(instance.accruedInterest).to.be(expectedValueLiteral);
      });

      it('should have the property bondValue (base name: "bondValue")', function() {
        // TODO: update the code to test the property bondValue
        expect(instance).to.have.property('bondValue');
        // expect(instance.bondValue).to.be(expectedValueLiteral);
      });

      it('should have the property cashAvailableForTrading (base name: "cashAvailableForTrading")', function() {
        // TODO: update the code to test the property cashAvailableForTrading
        expect(instance).to.have.property('cashAvailableForTrading');
        // expect(instance.cashAvailableForTrading).to.be(expectedValueLiteral);
      });

      it('should have the property cashAvailableForWithdrawal (base name: "cashAvailableForWithdrawal")', function() {
        // TODO: update the code to test the property cashAvailableForWithdrawal
        expect(instance).to.have.property('cashAvailableForWithdrawal');
        // expect(instance.cashAvailableForWithdrawal).to.be(expectedValueLiteral);
      });

      it('should have the property cashBalance (base name: "cashBalance")', function() {
        // TODO: update the code to test the property cashBalance
        expect(instance).to.have.property('cashBalance');
        // expect(instance.cashBalance).to.be(expectedValueLiteral);
      });

      it('should have the property cashCall (base name: "cashCall")', function() {
        // TODO: update the code to test the property cashCall
        expect(instance).to.have.property('cashCall');
        // expect(instance.cashCall).to.be(expectedValueLiteral);
      });

      it('should have the property cashDebitCallValue (base name: "cashDebitCallValue")', function() {
        // TODO: update the code to test the property cashDebitCallValue
        expect(instance).to.have.property('cashDebitCallValue');
        // expect(instance.cashDebitCallValue).to.be(expectedValueLiteral);
      });

      it('should have the property cashReceipts (base name: "cashReceipts")', function() {
        // TODO: update the code to test the property cashReceipts
        expect(instance).to.have.property('cashReceipts');
        // expect(instance.cashReceipts).to.be(expectedValueLiteral);
      });

      it('should have the property liquidationValue (base name: "liquidationValue")', function() {
        // TODO: update the code to test the property liquidationValue
        expect(instance).to.have.property('liquidationValue');
        // expect(instance.liquidationValue).to.be(expectedValueLiteral);
      });

      it('should have the property longMarketValue (base name: "longMarketValue")', function() {
        // TODO: update the code to test the property longMarketValue
        expect(instance).to.have.property('longMarketValue');
        // expect(instance.longMarketValue).to.be(expectedValueLiteral);
      });

      it('should have the property longNonMarginableMarketValue (base name: "longNonMarginableMarketValue")', function() {
        // TODO: update the code to test the property longNonMarginableMarketValue
        expect(instance).to.have.property('longNonMarginableMarketValue');
        // expect(instance.longNonMarginableMarketValue).to.be(expectedValueLiteral);
      });

      it('should have the property longOptionMarketValue (base name: "longOptionMarketValue")', function() {
        // TODO: update the code to test the property longOptionMarketValue
        expect(instance).to.have.property('longOptionMarketValue');
        // expect(instance.longOptionMarketValue).to.be(expectedValueLiteral);
      });

      it('should have the property moneyMarketFund (base name: "moneyMarketFund")', function() {
        // TODO: update the code to test the property moneyMarketFund
        expect(instance).to.have.property('moneyMarketFund');
        // expect(instance.moneyMarketFund).to.be(expectedValueLiteral);
      });

      it('should have the property mutualFundValue (base name: "mutualFundValue")', function() {
        // TODO: update the code to test the property mutualFundValue
        expect(instance).to.have.property('mutualFundValue');
        // expect(instance.mutualFundValue).to.be(expectedValueLiteral);
      });

      it('should have the property pendingDeposits (base name: "pendingDeposits")', function() {
        // TODO: update the code to test the property pendingDeposits
        expect(instance).to.have.property('pendingDeposits');
        // expect(instance.pendingDeposits).to.be(expectedValueLiteral);
      });

      it('should have the property savings (base name: "savings")', function() {
        // TODO: update the code to test the property savings
        expect(instance).to.have.property('savings');
        // expect(instance.savings).to.be(expectedValueLiteral);
      });

      it('should have the property shortMarketValue (base name: "shortMarketValue")', function() {
        // TODO: update the code to test the property shortMarketValue
        expect(instance).to.have.property('shortMarketValue');
        // expect(instance.shortMarketValue).to.be(expectedValueLiteral);
      });

      it('should have the property shortOptionMarketValue (base name: "shortOptionMarketValue")', function() {
        // TODO: update the code to test the property shortOptionMarketValue
        expect(instance).to.have.property('shortOptionMarketValue');
        // expect(instance.shortOptionMarketValue).to.be(expectedValueLiteral);
      });

      it('should have the property totalCash (base name: "totalCash")', function() {
        // TODO: update the code to test the property totalCash
        expect(instance).to.have.property('totalCash');
        // expect(instance.totalCash).to.be(expectedValueLiteral);
      });

      it('should have the property unsettledCash (base name: "unsettledCash")', function() {
        // TODO: update the code to test the property unsettledCash
        expect(instance).to.have.property('unsettledCash');
        // expect(instance.unsettledCash).to.be(expectedValueLiteral);
      });

    });
  });

}));
