/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The CandleListCandles model module.
* @module model/CandleListCandles
* @version 0.1.3
*/
export default class CandleListCandles {
    /**
    * Constructs a new <code>CandleListCandles</code>.
    * @alias module:model/CandleListCandles
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CandleListCandles</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CandleListCandles} obj Optional instance to populate.
    * @return {module:model/CandleListCandles} The populated <code>CandleListCandles</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CandleListCandles();
                        
            
            if (data.hasOwnProperty('close')) {
                obj['close'] = ApiClient.convertToType(data['close'], 'Number');
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Number');
            }
            if (data.hasOwnProperty('high')) {
                obj['high'] = ApiClient.convertToType(data['high'], 'Number');
            }
            if (data.hasOwnProperty('low')) {
                obj['low'] = ApiClient.convertToType(data['low'], 'Number');
            }
            if (data.hasOwnProperty('open')) {
                obj['open'] = ApiClient.convertToType(data['open'], 'Number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Close
    * @member {Number} close
    */
    'close' = undefined;
    /**
    * DateTime
    * @member {Number} datetime
    */
    'datetime' = undefined;
    /**
    * High
    * @member {Number} high
    */
    'high' = undefined;
    /**
    * Low
    * @member {Number} low
    */
    'low' = undefined;
    /**
    * Open
    * @member {Number} open
    */
    'open' = undefined;
    /**
    * Volume
    * @member {Number} volume
    */
    'volume' = undefined;




}
