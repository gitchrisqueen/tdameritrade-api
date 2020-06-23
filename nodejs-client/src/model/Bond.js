/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 1.0.0-oas3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Bond model module.
* @module model/Bond
* @version 1.0.0-oas3
*/
export default class Bond {
    /**
    * Constructs a new <code>Bond</code>.
    * @alias module:model/Bond
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Bond</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Bond} obj Optional instance to populate.
    * @return {module:model/Bond} The populated <code>Bond</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Bond();
                        
            
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
            if (data.hasOwnProperty('bondPrice')) {
                obj['bondPrice'] = ApiClient.convertToType(data['bondPrice'], 'Number');
            }
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Bond.AssetTypeEnum} assetType
    */
    'assetType' = undefined;
    /**
    * @member {Number} bondPrice
    */
    'bondPrice' = undefined;
    /**
    * @member {String} cusip
    */
    'cusip' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {String} exchange
    */
    'exchange' = undefined;
    /**
    * @member {String} symbol
    */
    'symbol' = undefined;



    /**
    * Allowed values for the <code>assetType</code> property.
    * @enum {String}
    * @readonly
    */
    static AssetTypeEnum = {
        /**
         * value: "BOND"
         * @const
         */
        "BOND": "BOND"    };

}
