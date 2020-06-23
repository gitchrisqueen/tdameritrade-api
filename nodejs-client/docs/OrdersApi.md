# @GitchrisqueenTdameritradeApiJsClient.OrdersApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdOrdersOrderIdDELETE**](OrdersApi.md#accountsAccountIdOrdersOrderIdDELETE) | **DELETE** /accounts/{accountId}/orders/{orderId} | Cancel Order


<a name="accountsAccountIdOrdersOrderIdDELETE"></a>
# **accountsAccountIdOrdersOrderIdDELETE**
> EASObject accountsAccountIdOrdersOrderIdDELETE(AccountId, OrderId)

Cancel Order

Cancel a specific order for a spcific account

### Example
```javascript
var @GitchrisqueenTdameritradeApiJsClient = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = @GitchrisqueenTdameritradeApiJsClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new @GitchrisqueenTdameritradeApiJsClient.OrdersApi();

var AccountId = 56; // Number | 

var OrderId = 56; // Number | 

apiInstance.accountsAccountIdOrdersOrderIdDELETE(AccountId, OrderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AccountId** | **Number**|  | 
 **OrderId** | **Number**|  | 

### Return type

[**EASObject**](EASObject.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

