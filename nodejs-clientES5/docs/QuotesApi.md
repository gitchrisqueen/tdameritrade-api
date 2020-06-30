# GitChrisQueen_TDA_JS.QuotesApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketdataQuotesGET**](QuotesApi.md#marketdataQuotesGET) | **GET** /marketdata/quotes | Get Quotes
[**marketdataSymbolQuotesGET**](QuotesApi.md#marketdataSymbolQuotesGET) | **GET** /marketdata/{symbol}/quotes | Get Quote


<a name="marketdataQuotesGET"></a>
# **marketdataQuotesGET**
> GetQuoteResponse marketdataQuotesGET(opts)

Get Quotes

Get quote for one or more symbols

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.QuotesApi();

var opts = { 
  'apikey': "apikey_example", // String | 
  'symbol': "symbol_example" // String | 
};
apiInstance.marketdataQuotesGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **String**|  | [optional] 
 **symbol** | **String**|  | [optional] 

### Return type

[**GetQuoteResponse**](GetQuoteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="marketdataSymbolQuotesGET"></a>
# **marketdataSymbolQuotesGET**
> GetQuoteResponse marketdataSymbolQuotesGET(symbol, opts)

Get Quote

Get quote for a symbol

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.QuotesApi();

var symbol = "symbol_example"; // String | 

var opts = { 
  'apikey': "apikey_example" // String | 
};
apiInstance.marketdataSymbolQuotesGET(symbol, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**|  | 
 **apikey** | **String**|  | [optional] 

### Return type

[**GetQuoteResponse**](GetQuoteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

