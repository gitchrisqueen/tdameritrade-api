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
* The PostAccessBody model module.
* @module model/PostAccessBody
* @version 0.1.3
*/
export default class PostAccessBody {
    /**
    * Constructs a new <code>PostAccessBody</code>.
    * Body Parmeers for the Post Access Token Endpoint
    * @alias module:model/PostAccessBody
    * @class
    * @param GrantType {String} The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token
    * @param ClientId {Number} OAuth User ID of your application
    */

    constructor(GrantType, ClientId) {
        
        
        this['grant_type'] = GrantType;
        this['client_id'] = ClientId;
        
    }

    /**
    * Constructs a <code>PostAccessBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostAccessBody} obj Optional instance to populate.
    * @return {module:model/PostAccessBody} The populated <code>PostAccessBody</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccessBody();
                        
            
            if (data.hasOwnProperty('grant_type')) {
                obj['grant_type'] = ApiClient.convertToType(data['grant_type'], 'String');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
            if (data.hasOwnProperty('access_type')) {
                obj['access_type'] = ApiClient.convertToType(data['access_type'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
            }
            if (data.hasOwnProperty('redirect_uri')) {
                obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
            }
        }
        return obj;
    }

    /**
    * The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token
    * @member {String} grant_type
    */
    'grant_type' = undefined;
    /**
    * Required if using refresh token grant
    * @member {String} refresh_token
    */
    'refresh_token' = undefined;
    /**
    * Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request.
    * @member {String} access_type
    */
    'access_type' = undefined;
    /**
    * Required if trying to use authorization code grant
    * @member {String} code
    */
    'code' = undefined;
    /**
    * OAuth User ID of your application
    * @member {Number} client_id
    */
    'client_id' = undefined;
    /**
    * Required if trying to use authorization code grant
    * @member {String} redirect_uri
    */
    'redirect_uri' = undefined;




}
