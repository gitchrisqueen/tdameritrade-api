# @GitchrisqueenTdameritradeApiJsClient.Body

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GrantType** | **String** | The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token | 
**RefreshToken** | **String** | Required if using refresh token grant | [optional] 
**AccessType** | **String** | Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request. | [optional] 
**Code** | **String** | Required if trying to use authorization code grant | [optional] 
**ClientId** | **Number** | OAuth User ID of your application | 
**RedirectUri** | **String** | Required if trying to use authorization code grant | [optional] 
