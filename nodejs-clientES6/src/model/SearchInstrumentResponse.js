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

/**
* The SearchInstrumentResponse model module.
* @module model/SearchInstrumentResponse
* @version 0.1.4
*/
export default class SearchInstrumentResponse {
    /**
    * Constructs a new <code>SearchInstrumentResponse</code>.
    * @alias module:model/SearchInstrumentResponse
    * @class
    * @extends Object
    */

    constructor() {
        
        
        return this;
    }

    /**
    * Constructs a <code>SearchInstrumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SearchInstrumentResponse} obj Optional instance to populate.
    * @return {module:model/SearchInstrumentResponse} The populated <code>SearchInstrumentResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchInstrumentResponse();
            ApiClient.constructFromObject(data, obj, 'Object');
            
            
        }
        return obj;
    }





}