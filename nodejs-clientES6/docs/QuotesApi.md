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
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.QuotesApi();
let opts = { 
  'apikey': "apikey_example", // String | 
  'symbol': "symbol_example" // String | 
};
apiInstance.marketdataQuotesGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.QuotesApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'apikey': "apikey_example" // String | 
};
apiInstance.marketdataSymbolQuotesGET(symbol, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

