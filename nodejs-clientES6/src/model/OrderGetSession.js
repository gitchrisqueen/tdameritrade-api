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
import Session from './Session';

/**
* The OrderGetSession model module.
* @module model/OrderGetSession
* @version 0.1.4
*/
export default class OrderGetSession {
    /**
    * Constructs a new <code>OrderGetSession</code>.
    * @alias module:model/OrderGetSession
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OrderGetSession</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderGetSession} obj Optional instance to populate.
    * @return {module:model/OrderGetSession} The populated <code>OrderGetSession</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderGetSession();
                        
            
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = Session.constructFromObject(data['schema']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Session} schema
    */
    'schema' = undefined;




}