# @GitchrisqueenTdameritradeApiJsClient.PriceHistoryApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketdataSymbolPricehistoryGET**](PriceHistoryApi.md#marketdataSymbolPricehistoryGET) | **GET** /marketdata/{symbol}/pricehistory | Get price history for a symbol

<a name="marketdataSymbolPricehistoryGET"></a>
# **marketdataSymbolPricehistoryGET**
> CandleList marketdataSymbolPricehistoryGET(Symbol, PeriodType, opts)

Get price history for a symbol

### Example
```javascript
import @GitchrisqueenTdameritradeApiJsClient from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = @GitchrisqueenTdameritradeApiJsClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @GitchrisqueenTdameritradeApiJsClient.PriceHistoryApi();
let Symbol = "Symbol_example"; // String | 
let PeriodType = "PeriodType_example"; // String | 
let opts = { 
  'Apikey': "Apikey_example", // String | 
  'Period': 56, // Number | 
  'FrequencyType': "FrequencyType_example", // String | 
  'Frequency': 56, // Number | 
  'EndDate': 56, // Number | 
  'StartDate': 56, // Number | 
  'NeedExtendedHoursData': true // Boolean | 
};
apiInstance.marketdataSymbolPricehistoryGET(Symbol, PeriodType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Symbol** | **String**|  | 
 **PeriodType** | **String**|  | 
 **Apikey** | **String**|  | [optional] 
 **Period** | **Number**|  | [optional] 
 **FrequencyType** | **String**|  | [optional] 
 **Frequency** | **Number**|  | [optional] 
 **EndDate** | **Number**|  | [optional] 
 **StartDate** | **Number**|  | [optional] 
 **NeedExtendedHoursData** | **Boolean**|  | [optional] [default to true]

### Return type

[**CandleList**](CandleList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

