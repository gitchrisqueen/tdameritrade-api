# @GitchrisqueenTdameritradeApiJsClient.AccountsAndTradingApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdOrdersOrderIdDELETE**](AccountsAndTradingApi.md#accountsAccountIdOrdersOrderIdDELETE) | **DELETE** /accounts/{accountId}/orders/{orderId} | Cancel Order

<a name="accountsAccountIdOrdersOrderIdDELETE"></a>
# **accountsAccountIdOrdersOrderIdDELETE**
> EASObject accountsAccountIdOrdersOrderIdDELETE(AccountId, OrderId)

Cancel Order

Cancel a specific order for a spcific account

### Example
```javascript
import @GitchrisqueenTdameritradeApiJsClient from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = @GitchrisqueenTdameritradeApiJsClient.ApiClient.instance;


let apiInstance = new @GitchrisqueenTdameritradeApiJsClient.AccountsAndTradingApi();
let AccountId = 56; // Number | 
let OrderId = 56; // Number | 

apiInstance.accountsAccountIdOrdersOrderIdDELETE(AccountId, OrderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

