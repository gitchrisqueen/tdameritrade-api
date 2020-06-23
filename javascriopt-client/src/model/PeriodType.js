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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.@GitchrisqueenTdameritradeApi) {
      root.@GitchrisqueenTdameritradeApi = {};
    }
    root.@GitchrisqueenTdameritradeApi.PeriodType = factory(root.@GitchrisqueenTdameritradeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class PeriodType.
   * @enum {String}
   * @readonly
   */
  var exports = {
    /**
     * value: "day"
     * @const
     */
    Day: "day",

    /**
     * value: "month"
     * @const
     */
    Month: "month",

    /**
     * value: "year"
     * @const
     */
    Year: "year",

    /**
     * value: "ytd"
     * @const
     */
    Ytd: "ytd"
  };

  /**
   * Returns a <code>PeriodType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/PeriodType} The enum <code>PeriodType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));
