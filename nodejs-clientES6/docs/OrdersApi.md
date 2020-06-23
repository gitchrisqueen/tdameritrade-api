# GitChrisQueen_TDA_JS.OrdersApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdOrdersOrderIdDELETE**](OrdersApi.md#accountsAccountIdOrdersOrderIdDELETE) | **DELETE** /accounts/{accountId}/orders/{orderId} | Cancel Order

<a name="accountsAccountIdOrdersOrderIdDELETE"></a>
# **accountsAccountIdOrdersOrderIdDELETE**
> EASObject accountsAccountIdOrdersOrderIdDELETE(accountId, orderId)

Cancel Order

Cancel a specific order for a spcific account

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.OrdersApi();
let accountId = 56; // Number | 
let orderId = 56; // Number | 

apiInstance.accountsAccountIdOrdersOrderIdDELETE(accountId, orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **orderId** | **Number**|  | 

### Return type

[**EASObject**](EASObject.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

