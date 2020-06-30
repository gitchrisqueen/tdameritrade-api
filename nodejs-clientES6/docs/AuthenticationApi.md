# GitChrisQueen_TDA_JS.AuthenticationApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth2TokenPOST**](AuthenticationApi.md#oauth2TokenPOST) | **POST** /oauth2/token | Post Access Token

<a name="oauth2TokenPOST"></a>
# **oauth2TokenPOST**
> EASObject oauth2TokenPOST(opts)

Post Access Token

The token endpoint returns an access token along with an optional refresh token.

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';

let apiInstance = new GitChrisQueen_TDA_JS.AuthenticationApi();
let opts = { 
  'grant_type': "grant_type_example" // String | 
  'refresh_token': "refresh_token_example" // String | 
  'access_type': "access_type_example" // String | 
  'code': "code_example" // String | 
  'client_id': 56 // Number | 
  'redirect_uri': "redirect_uri_example" // String | 
};
apiInstance.oauth2TokenPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant_type** | **String**|  | [optional] 
 **refresh_token** | **String**|  | [optional] 
 **access_type** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **client_id** | **Number**|  | [optional] 
 **redirect_uri** | **String**|  | [optional] 

### Return type

[**EASObject**](EASObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

