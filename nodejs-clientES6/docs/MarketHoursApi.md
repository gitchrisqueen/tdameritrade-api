# GitChrisQueen_TDA_JS.MarketHoursApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketdataHoursGET**](MarketHoursApi.md#marketdataHoursGET) | **GET** /marketdata/hours | Get Hours for Multiple Markets
[**marketdataMarketHoursGET**](MarketHoursApi.md#marketdataMarketHoursGET) | **GET** /marketdata/{market}/hours | Get Hours for Multiple Markets

<a name="marketdataHoursGET"></a>
# **marketdataHoursGET**
> Hours marketdataHoursGET(opts)

Get Hours for Multiple Markets

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.MarketHoursApi();
let opts = { 
  'apiKey': "apiKey_example", // String | 
  'markets': "markets_example", // String | 
  '_date': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.marketdataHoursGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [optional] 
 **markets** | **String**|  | [optional] 
 **_date** | **Date**|  | [optional] 

### Return type

[**Hours**](Hours.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="marketdataMarketHoursGET"></a>
# **marketdataMarketHoursGET**
> Hours marketdataMarketHoursGET(market, opts)

Get Hours for Multiple Markets

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.MarketHoursApi();
let market = "market_example"; // String | 
let opts = { 
  'apiKey': "apiKey_example", // String | 
  '_date': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.marketdataMarketHoursGET(market, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**|  | 
 **apiKey** | **String**|  | [optional] 
 **_date** | **Date**|  | [optional] 

### Return type

[**Hours**](Hours.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

