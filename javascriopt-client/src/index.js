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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Bond', 'model/CandleList', 'model/CandleListCandles', 'model/EASObject', 'model/FrequencyType', 'model/Fundamental', 'model/FundamentalData', 'model/FundamentalFundamental', 'model/InlineResponse200', 'model/Instrument', 'model/PeriodType', 'model/PostAccessBody', 'api/AccountsAndTradingApi', 'api/AuthenticationApi', 'api/InntrumentsApi', 'api/OrdersApi', 'api/PriceHistoryApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Bond'), require('./model/CandleList'), require('./model/CandleListCandles'), require('./model/EASObject'), require('./model/FrequencyType'), require('./model/Fundamental'), require('./model/FundamentalData'), require('./model/FundamentalFundamental'), require('./model/InlineResponse200'), require('./model/Instrument'), require('./model/PeriodType'), require('./model/PostAccessBody'), require('./api/AccountsAndTradingApi'), require('./api/AuthenticationApi'), require('./api/InntrumentsApi'), require('./api/OrdersApi'), require('./api/PriceHistoryApi'));
  }
}(function(ApiClient, Bond, CandleList, CandleListCandles, EASObject, FrequencyType, Fundamental, FundamentalData, FundamentalFundamental, InlineResponse200, Instrument, PeriodType, PostAccessBody, AccountsAndTradingApi, AuthenticationApi, InntrumentsApi, OrdersApi, PriceHistoryApi) {
  'use strict';

  /**
   * This_is_replication_of_the_TD_Ameritrade_API_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var @GitchrisqueenTdameritradeApi = require('index'); // See note below*.
   * var xxxSvc = new @GitchrisqueenTdameritradeApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new @GitchrisqueenTdameritradeApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new @GitchrisqueenTdameritradeApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new @GitchrisqueenTdameritradeApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0-oas3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Bond model constructor.
     * @property {module:model/Bond}
     */
    Bond: Bond,
    /**
     * The CandleList model constructor.
     * @property {module:model/CandleList}
     */
    CandleList: CandleList,
    /**
     * The CandleListCandles model constructor.
     * @property {module:model/CandleListCandles}
     */
    CandleListCandles: CandleListCandles,
    /**
     * The EASObject model constructor.
     * @property {module:model/EASObject}
     */
    EASObject: EASObject,
    /**
     * The FrequencyType model constructor.
     * @property {module:model/FrequencyType}
     */
    FrequencyType: FrequencyType,
    /**
     * The Fundamental model constructor.
     * @property {module:model/Fundamental}
     */
    Fundamental: Fundamental,
    /**
     * The FundamentalData model constructor.
     * @property {module:model/FundamentalData}
     */
    FundamentalData: FundamentalData,
    /**
     * The FundamentalFundamental model constructor.
     * @property {module:model/FundamentalFundamental}
     */
    FundamentalFundamental: FundamentalFundamental,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The Instrument model constructor.
     * @property {module:model/Instrument}
     */
    Instrument: Instrument,
    /**
     * The PeriodType model constructor.
     * @property {module:model/PeriodType}
     */
    PeriodType: PeriodType,
    /**
     * The PostAccessBody model constructor.
     * @property {module:model/PostAccessBody}
     */
    PostAccessBody: PostAccessBody,
    /**
     * The AccountsAndTradingApi service constructor.
     * @property {module:api/AccountsAndTradingApi}
     */
    AccountsAndTradingApi: AccountsAndTradingApi,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The InntrumentsApi service constructor.
     * @property {module:api/InntrumentsApi}
     */
    InntrumentsApi: InntrumentsApi,
    /**
     * The OrdersApi service constructor.
     * @property {module:api/OrdersApi}
     */
    OrdersApi: OrdersApi,
    /**
     * The PriceHistoryApi service constructor.
     * @property {module:api/PriceHistoryApi}
     */
    PriceHistoryApi: PriceHistoryApi
  };

  return exports;
}));
