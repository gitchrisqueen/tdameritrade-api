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

import ApiClient from '../ApiClient';
import AssetType from './AssetType';

/**
* The EquityAssetType model module.
* @module model/EquityAssetType
* @version 0.1.4
*/
export default class EquityAssetType {
    /**
    * Constructs a new <code>EquityAssetType</code>.
    * @alias module:model/EquityAssetType
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>EquityAssetType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EquityAssetType} obj Optional instance to populate.
    * @return {module:model/EquityAssetType} The populated <code>EquityAssetType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EquityAssetType();
                        
            
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = AssetType.constructFromObject(data['schema']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AssetType} schema
    */
    'schema' = undefined;




}