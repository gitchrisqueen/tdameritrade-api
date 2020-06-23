# GitChrisQueen_TDA_JS.PostAccessBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grant_type** | **String** | The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token | 
**refresh_token** | **String** | Required if using refresh token grant | [optional] 
**access_type** | **String** | Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request. | [optional] 
**code** | **String** | Required if trying to use authorization code grant | [optional] 
**client_id** | **Number** | OAuth User ID of your application | 
**redirect_uri** | **String** | Required if trying to use authorization code grant | [optional] 
