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
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.PriceHistoryApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'apikey': "apikey_example", // String | 
  'periodType': new GitChrisQueen_TDA_JS.PeriodType(), // PeriodType | 
  'period': 56, // Number | 
  'frequencyType': new GitChrisQueen_TDA_JS.FrequencyType(), // FrequencyType | 
  'frequency': 56, // Number | 
  'endDate': 56, // Number | 
  'startDate': 56, // Number | 
  'needExtendedHoursData': true // Boolean | 
};
apiInstance.marketdataSymbolPricehistoryGET(symbol, opts).then((data) => {
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
 **periodType** | [**PeriodType**](.md)|  | [optional] 
 **period** | **Number**|  | [optional] 
 **frequencyType** | [**FrequencyType**](.md)|  | [optional] 
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

