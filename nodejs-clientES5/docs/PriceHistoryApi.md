# GitChrisQueen_TDA_JS.PriceHistoryApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketdataSymbolPricehistoryGET**](PriceHistoryApi.md#marketdataSymbolPricehistoryGET) | **GET** /marketdata/{symbol}/pricehistory | Get price history for a symbol


<a name="marketdataSymbolPricehistoryGET"></a>
# **marketdataSymbolPricehistoryGET**
> CandleList marketdataSymbolPricehistoryGET(symbol, opts)

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

var apiInstance = new GitChrisQueen_TDA_JS.PriceHistoryApi();

var symbol = "symbol_example"; // String | 

var opts = { 
  'apikey': "apikey_example", // String | 
  'periodType': "periodType_example", // String | 
  'period': 56, // Number | 
  'frequencyType': "frequencyType_example", // String | 
  'frequency': 56, // Number | 
  'endDate': 56, // Number | 
  'startDate': 56, // Number | 
  'needExtendedHoursData': true // Boolean | 
};
apiInstance.marketdataSymbolPricehistoryGET(symbol, opts).then(function(data) {
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
 **periodType** | **String**|  | [optional] 
 **period** | **Number**|  | [optional] 
 **frequencyType** | **String**|  | [optional] 
 **frequency** | **Number**|  | [optional] 
 **endDate** | **Number**|  | [optional] 
 **startDate** | **Number**|  | [optional] 
 **needExtendedHoursData** | **Boolean**|  | [optional] [default to true]

### Return type

[**CandleList**](CandleList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

