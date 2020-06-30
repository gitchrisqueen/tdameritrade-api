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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.MarginAccountBalances = factory(root.GitChrisQueen_TDA_JS.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MarginAccountBalances model module.
   * @module model/MarginAccountBalances
   * @version 0.1.4
   */

  /**
   * Constructs a new <code>MarginAccountBalances</code>.
   * @alias module:model/MarginAccountBalances
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MarginAccountBalances</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarginAccountBalances} obj Optional instance to populate.
   * @return {module:model/MarginAccountBalances} The populated <code>MarginAccountBalances</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accruedInterest'))
        obj.accruedInterest = ApiClient.convertToType(data['accruedInterest'], 'Number');
      if (data.hasOwnProperty('availableFunds'))
        obj.availableFunds = ApiClient.convertToType(data['availableFunds'], 'Number');
      if (data.hasOwnProperty('availableFundsNonMarginableTrade'))
        obj.availableFundsNonMarginableTrade = ApiClient.convertToType(data['availableFundsNonMarginableTrade'], 'Number');
      if (data.hasOwnProperty('bondValue'))
        obj.bondValue = ApiClient.convertToType(data['bondValue'], 'Number');
      if (data.hasOwnProperty('buyingPower'))
        obj.buyingPower = ApiClient.convertToType(data['buyingPower'], 'Number');
      if (data.hasOwnProperty('buyingPowerNonMarginableTrade'))
        obj.buyingPowerNonMarginableTrade = ApiClient.convertToType(data['buyingPowerNonMarginableTrade'], 'Number');
      if (data.hasOwnProperty('cashBalance'))
        obj.cashBalance = ApiClient.convertToType(data['cashBalance'], 'Number');
      if (data.hasOwnProperty('cashReceipts'))
        obj.cashReceipts = ApiClient.convertToType(data['cashReceipts'], 'Number');
      if (data.hasOwnProperty('dayTradingBuyingPower'))
        obj.dayTradingBuyingPower = ApiClient.convertToType(data['dayTradingBuyingPower'], 'Number');
      if (data.hasOwnProperty('dayTradingBuyingPowerCall'))
        obj.dayTradingBuyingPowerCall = ApiClient.convertToType(data['dayTradingBuyingPowerCall'], 'Number');
      if (data.hasOwnProperty('equity'))
        obj.equity = ApiClient.convertToType(data['equity'], 'Number');
      if (data.hasOwnProperty('equityPercentage'))
        obj.equityPercentage = ApiClient.convertToType(data['equityPercentage'], 'Number');
      if (data.hasOwnProperty('isInCall'))
        obj.isInCall = ApiClient.convertToType(data['isInCall'], 'Boolean');
      if (data.hasOwnProperty('liquidationValue'))
        obj.liquidationValue = ApiClient.convertToType(data['liquidationValue'], 'Number');
      if (data.hasOwnProperty('longMarginValue'))
        obj.longMarginValue = ApiClient.convertToType(data['longMarginValue'], 'Number');
      if (data.hasOwnProperty('longMarketValue'))
        obj.longMarketValue = ApiClient.convertToType(data['longMarketValue'], 'Number');
      if (data.hasOwnProperty('longOptionMarketValue'))
        obj.longOptionMarketValue = ApiClient.convertToType(data['longOptionMarketValue'], 'Number');
      if (data.hasOwnProperty('maintenanceCall'))
        obj.maintenanceCall = ApiClient.convertToType(data['maintenanceCall'], 'Number');
      if (data.hasOwnProperty('maintenanceRequirement'))
        obj.maintenanceRequirement = ApiClient.convertToType(data['maintenanceRequirement'], 'Number');
      if (data.hasOwnProperty('marginBalance'))
        obj.marginBalance = ApiClient.convertToType(data['marginBalance'], 'Number');
      if (data.hasOwnProperty('moneyMarketFund'))
        obj.moneyMarketFund = ApiClient.convertToType(data['moneyMarketFund'], 'Number');
      if (data.hasOwnProperty('mutualFundValue'))
        obj.mutualFundValue = ApiClient.convertToType(data['mutualFundValue'], 'Number');
      if (data.hasOwnProperty('optionBuyingPower'))
        obj.optionBuyingPower = ApiClient.convertToType(data['optionBuyingPower'], 'Number');
      if (data.hasOwnProperty('pendingDeposits'))
        obj.pendingDeposits = ApiClient.convertToType(data['pendingDeposits'], 'Number');
      if (data.hasOwnProperty('regTCall'))
        obj.regTCall = ApiClient.convertToType(data['regTCall'], 'Number');
      if (data.hasOwnProperty('savings'))
        obj.savings = ApiClient.convertToType(data['savings'], 'Number');
      if (data.hasOwnProperty('shortBalance'))
        obj.shortBalance = ApiClient.convertToType(data['shortBalance'], 'Number');
      if (data.hasOwnProperty('shortMarginValue'))
        obj.shortMarginValue = ApiClient.convertToType(data['shortMarginValue'], 'Number');
      if (data.hasOwnProperty('shortMarketValue'))
        obj.shortMarketValue = ApiClient.convertToType(data['shortMarketValue'], 'Number');
      if (data.hasOwnProperty('shortOptionMarketValue'))
        obj.shortOptionMarketValue = ApiClient.convertToType(data['shortOptionMarketValue'], 'Number');
      if (data.hasOwnProperty('sma'))
        obj.sma = ApiClient.convertToType(data['sma'], 'Number');
      if (data.hasOwnProperty('stockBuyingPower'))
        obj.stockBuyingPower = ApiClient.convertToType(data['stockBuyingPower'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} accruedInterest
   */
  exports.prototype.accruedInterest = undefined;

  /**
   * @member {Number} availableFunds
   */
  exports.prototype.availableFunds = undefined;

  /**
   * @member {Number} availableFundsNonMarginableTrade
   */
  exports.prototype.availableFundsNonMarginableTrade = undefined;

  /**
   * @member {Number} bondValue
   */
  exports.prototype.bondValue = undefined;

  /**
   * @member {Number} buyingPower
   */
  exports.prototype.buyingPower = undefined;

  /**
   * @member {Number} buyingPowerNonMarginableTrade
   */
  exports.prototype.buyingPowerNonMarginableTrade = undefined;

  /**
   * @member {Number} cashBalance
   */
  exports.prototype.cashBalance = undefined;

  /**
   * @member {Number} cashReceipts
   */
  exports.prototype.cashReceipts = undefined;

  /**
   * @member {Number} dayTradingBuyingPower
   */
  exports.prototype.dayTradingBuyingPower = undefined;

  /**
   * @member {Number} dayTradingBuyingPowerCall
   */
  exports.prototype.dayTradingBuyingPowerCall = undefined;

  /**
   * @member {Number} equity
   */
  exports.prototype.equity = undefined;

  /**
   * @member {Number} equityPercentage
   */
  exports.prototype.equityPercentage = undefined;

  /**
   * @member {Boolean} isInCall
   * @default false
   */
  exports.prototype.isInCall = false;

  /**
   * @member {Number} liquidationValue
   */
  exports.prototype.liquidationValue = undefined;

  /**
   * @member {Number} longMarginValue
   */
  exports.prototype.longMarginValue = undefined;

  /**
   * @member {Number} longMarketValue
   */
  exports.prototype.longMarketValue = undefined;

  /**
   * @member {Number} longOptionMarketValue
   */
  exports.prototype.longOptionMarketValue = undefined;

  /**
   * @member {Number} maintenanceCall
   */
  exports.prototype.maintenanceCall = undefined;

  /**
   * @member {Number} maintenanceRequirement
   */
  exports.prototype.maintenanceRequirement = undefined;

  /**
   * @member {Number} marginBalance
   */
  exports.prototype.marginBalance = undefined;

  /**
   * @member {Number} moneyMarketFund
   */
  exports.prototype.moneyMarketFund = undefined;

  /**
   * @member {Number} mutualFundValue
   */
  exports.prototype.mutualFundValue = undefined;

  /**
   * @member {Number} optionBuyingPower
   */
  exports.prototype.optionBuyingPower = undefined;

  /**
   * @member {Number} pendingDeposits
   */
  exports.prototype.pendingDeposits = undefined;

  /**
   * @member {Number} regTCall
   */
  exports.prototype.regTCall = undefined;

  /**
   * @member {Number} savings
   */
  exports.prototype.savings = undefined;

  /**
   * @member {Number} shortBalance
   */
  exports.prototype.shortBalance = undefined;

  /**
   * @member {Number} shortMarginValue
   */
  exports.prototype.shortMarginValue = undefined;

  /**
   * @member {Number} shortMarketValue
   */
  exports.prototype.shortMarketValue = undefined;

  /**
   * @member {Number} shortOptionMarketValue
   */
  exports.prototype.shortOptionMarketValue = undefined;

  /**
   * @member {Number} sma
   */
  exports.prototype.sma = undefined;

  /**
   * @member {Number} stockBuyingPower
   */
  exports.prototype.stockBuyingPower = undefined;

  return exports;

}));