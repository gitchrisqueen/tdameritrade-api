# GitChrisQueen_TDA_JS.MoversApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketdataIndexMoversGET**](MoversApi.md#marketdataIndexMoversGET) | **GET** /marketdata/{index}/movers | Get price history for a symbol


<a name="marketdataIndexMoversGET"></a>
# **marketdataIndexMoversGET**
> Mover marketdataIndexMoversGET(index, opts)

Get price history for a symbol

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.MoversApi();

var index = "index_example"; // String | 

var opts = { 
  'apikey': "apikey_example", // String | 
  'direction': "direction_example", // String | 
  'change': "change_example" // String | 
};
apiInstance.marketdataIndexMoversGET(index, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**|  | 
 **apikey** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **change** | **String**|  | [optional] 

### Return type

[**Mover**](Mover.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

