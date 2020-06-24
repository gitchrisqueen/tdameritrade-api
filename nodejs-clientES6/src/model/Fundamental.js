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
import FundamentalFundamental from './FundamentalFundamental';

/**
* The Fundamental model module.
* @module model/Fundamental
* @version 0.1.3
*/
export default class Fundamental {
    /**
    * Constructs a new <code>Fundamental</code>.
    * @alias module:model/Fundamental
    * @class
    */

    constructor() {
        
        OneOfinlineResponse200.call(this);
        
    }

    /**
    * Constructs a <code>Fundamental</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Fundamental} obj Optional instance to populate.
    * @return {module:model/Fundamental} The populated <code>Fundamental</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Fundamental();
                        
            
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
            if (data.hasOwnProperty('fundamental')) {
                obj['fundamental'] = FundamentalFundamental.constructFromObject(data['fundamental']);
            }
        }
        return obj;
    }

    /**
    * @member {String} cusip
    */
    'cusip' = undefined;
    /**
    * @member {String} symbol
    */
    'symbol' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {String} exchange
    */
    'exchange' = undefined;
    /**
    * @member {module:model/Fundamental.AssetTypeEnum} assetType
    */
    'assetType' = undefined;
    /**
    * @member {module:model/FundamentalFundamental} fundamental
    */
    'fundamental' = undefined;

    // Implement OneOfinlineResponse200 interface:
    

    /**
    * Allowed values for the <code>assetType</code> property.
    * @enum {String}
    * @readonly
    */
    static AssetTypeEnum = {
        /**
         * value: "EQUITY"
         * @const
         */
        "EQUITY": "EQUITY",
        /**
         * value: "ETF"
         * @const
         */
        "ETF": "ETF",
        /**
         * value: "MUTUAL_FUND"
         * @const
         */
        "MUTUAL_FUND": "MUTUAL_FUND",
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN": "UNKNOWN"    };

}
