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
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.MoversApi();
let index = "index_example"; // String | 
let opts = { 
  'apikey': "apikey_example", // String | 
  'direction': "direction_example", // String | 
  'change': "change_example" // String | 
};
apiInstance.marketdataIndexMoversGET(index, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

