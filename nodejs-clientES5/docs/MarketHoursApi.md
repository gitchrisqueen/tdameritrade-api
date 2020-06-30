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
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.MarketHoursApi();

var opts = { 
  'apiKey': "apiKey_example", // String | 
  'markets': "markets_example", // String | 
  '_date': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.marketdataHoursGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.MarketHoursApi();

var market = "market_example"; // String | 

var opts = { 
  'apiKey': "apiKey_example", // String | 
  '_date': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.marketdataMarketHoursGET(market, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

