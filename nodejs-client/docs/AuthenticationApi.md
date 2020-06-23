# @GitchrisqueenTdameritradeApiJsClient.AuthenticationApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth2TokenPOST**](AuthenticationApi.md#oauth2TokenPOST) | **POST** /oauth2/token | Post Access Token

<a name="oauth2TokenPOST"></a>
# **oauth2TokenPOST**
> oauth2TokenPOST(opts)

Post Access Token

The token endpoint returns an access token along with an optional refresh token.

### Example
```javascript
import @GitchrisqueenTdameritradeApiJsClient from '@gitchrisqueen/tdameritrade-api-js-client';

let apiInstance = new @GitchrisqueenTdameritradeApiJsClient.AuthenticationApi();
let opts = { 
  'GrantType': "GrantType_example" // String | 
  'RefreshToken': "RefreshToken_example" // String | 
  'AccessType': "AccessType_example" // String | 
  'Code': "Code_example" // String | 
  'ClientId': 56 // Number | 
  'RedirectUri': "RedirectUri_example" // String | 
};
apiInstance.oauth2TokenPOST(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **GrantType** | **String**|  | [optional] 
 **RefreshToken** | **String**|  | [optional] 
 **AccessType** | **String**|  | [optional] 
 **Code** | **String**|  | [optional] 
 **ClientId** | **Number**|  | [optional] 
 **RedirectUri** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

