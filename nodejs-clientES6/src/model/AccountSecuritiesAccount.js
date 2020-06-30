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
import SecuritiesAccount from './SecuritiesAccount';

/**
* The AccountSecuritiesAccount model module.
* @module model/AccountSecuritiesAccount
* @version 0.1.4
*/
export default class AccountSecuritiesAccount {
    /**
    * Constructs a new <code>AccountSecuritiesAccount</code>.
    * @alias module:model/AccountSecuritiesAccount
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AccountSecuritiesAccount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountSecuritiesAccount} obj Optional instance to populate.
    * @return {module:model/AccountSecuritiesAccount} The populated <code>AccountSecuritiesAccount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountSecuritiesAccount();
                        
            
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = SecuritiesAccount.constructFromObject(data['schema']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/SecuritiesAccount} schema
    */
    'schema' = undefined;




}