# GitChrisQueen_TDA_JS.AuthenticationApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth2TokenPOST**](AuthenticationApi.md#oauth2TokenPOST) | **POST** /oauth2/token | Post Access Token


<a name="oauth2TokenPOST"></a>
# **oauth2TokenPOST**
> EASObject oauth2TokenPOST(grant_type, client_id, opts)

Post Access Token

The token endpoint returns an access token along with an optional refresh token.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');

var apiInstance = new GitChrisQueen_TDA_JS.AuthenticationApi();

var grant_type = "grant_type_example"; // String | The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token

var client_id = 56; // Number | OAuth User ID of your application

var opts = { 
  'refresh_token': "refresh_token_example", // String | Required if using refresh token grant
  'access_type': "access_type_example", // String | Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request.
  'code': "code_example", // String | Required if trying to use authorization code grant
  'redirect_uri': "redirect_uri_example" // String | Required if trying to use authorization code grant
};
apiInstance.oauth2TokenPOST(grant_type, client_id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant_type** | **String**| The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token | 
 **client_id** | **Number**| OAuth User ID of your application | 
 **refresh_token** | **String**| Required if using refresh token grant | [optional] 
 **access_type** | **String**| Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request. | [optional] 
 **code** | **String**| Required if trying to use authorization code grant | [optional] 
 **redirect_uri** | **String**| Required if trying to use authorization code grant | [optional] 

### Return type

[**EASObject**](EASObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

