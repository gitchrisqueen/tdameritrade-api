# GitChrisQueen_TDA_JS.AuthenticationApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth2TokenPOST**](AuthenticationApi.md#oauth2TokenPOST) | **POST** /oauth2/token | Post Access Token


<a name="oauth2TokenPOST"></a>
# **oauth2TokenPOST**
> EASObject oauth2TokenPOST(GrantType, ClientId, opts)

Post Access Token

The token endpoint returns an access token along with an optional refresh token.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');

var apiInstance = new GitChrisQueen_TDA_JS.AuthenticationApi();

var GrantType = "GrantType_example"; // String | The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token

var ClientId = 56; // Number | OAuth User ID of your application

var opts = { 
  'RefreshToken': "RefreshToken_example", // String | Required if using refresh token grant
  'AccessType': "AccessType_example", // String | Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request.
  'Code': "Code_example", // String | Required if trying to use authorization code grant
  'RedirectUri': "RedirectUri_example" // String | Required if trying to use authorization code grant
};
apiInstance.oauth2TokenPOST(GrantType, ClientId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **GrantType** | **String**| The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token | 
 **ClientId** | **Number**| OAuth User ID of your application | 
 **RefreshToken** | **String**| Required if using refresh token grant | [optional] 
 **AccessType** | **String**| Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request. | [optional] 
 **Code** | **String**| Required if trying to use authorization code grant | [optional] 
 **RedirectUri** | **String**| Required if trying to use authorization code grant | [optional] 

### Return type

[**EASObject**](EASObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json
