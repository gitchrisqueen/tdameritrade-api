# @GitchrisqueenTdameritradeApiJsClient.PriceHistoryApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketdataSymbolPricehistoryGET**](PriceHistoryApi.md#marketdataSymbolPricehistoryGET) | **GET** /marketdata/{symbol}/pricehistory | Get price history for a symbol

<a name="marketdataSymbolPricehistoryGET"></a>
# **marketdataSymbolPricehistoryGET**
> CandleList marketdataSymbolPricehistoryGET(Symbol, opts)

Get price history for a symbol

### Example
```javascript
import @GitchrisqueenTdameritradeApiJsClient from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = @GitchrisqueenTdameritradeApiJsClient.ApiClient.instance;


let apiInstance = new @GitchrisqueenTdameritradeApiJsClient.PriceHistoryApi();
let Symbol = "Symbol_example"; // String | 
let opts = { 
  'Apikey': "Apikey_example", // String | 
  'PeriodType': new @GitchrisqueenTdameritradeApiJsClient.PeriodType(), // PeriodType | 
  'Period': 56, // Number | 
  'FrequencyType': new @GitchrisqueenTdameritradeApiJsClient.FrequencyType(), // FrequencyType | 
  'Frequency': 56, // Number | 
  'EndDate': 56, // Number | 
  'StartDate': 56, // Number | 
  'NeedExtendedHoursData': true // Boolean | 
};
apiInstance.marketdataSymbolPricehistoryGET(Symbol, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Symbol** | **String**|  | 
 **Apikey** | **String**|  | [optional] 
 **PeriodType** | [**PeriodType**](.md)|  | [optional] 
 **Period** | **Number**|  | [optional] 
 **FrequencyType** | [**FrequencyType**](.md)|  | [optional] 
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

