# @GitchrisqueenTdameritradeApiJsClient.AuthenticationApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth2TokenPOST**](AuthenticationApi.md#oauth2TokenPOST) | **POST** /oauth2/token | Post Access Token

<a name="oauth2TokenPOST"></a>
# **oauth2TokenPOST**
> oauth2TokenPOST(GrantTypeRefreshTokenAccessTypeCodeClientIdRedirectUri)

Post Access Token

The token endpoint returns an access token along with an optional refresh token.

### Example
```javascript
import @GitchrisqueenTdameritradeApiJsClient from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = @GitchrisqueenTdameritradeApiJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GitchrisqueenTdameritradeApiJsClient.AuthenticationApi();
let GrantType = "GrantType_example"; // String | 
let RefreshToken = "RefreshToken_example"; // String | 
let AccessType = "AccessType_example"; // String | 
let Code = "Code_example"; // String | 
let ClientId = 56; // Number | 
let RedirectUri = "RedirectUri_example"; // String | 

apiInstance.oauth2TokenPOST(GrantTypeRefreshTokenAccessTypeCodeClientIdRedirectUri).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **GrantType** | **String**|  | 
 **RefreshToken** | **String**|  | 
 **AccessType** | **String**|  | 
 **Code** | **String**|  | 
 **ClientId** | **Number**|  | 
 **RedirectUri** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

