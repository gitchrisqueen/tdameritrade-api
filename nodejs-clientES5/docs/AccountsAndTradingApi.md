# GitChrisQueen_TDA_JS.AccountsAndTradingApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdOrdersOrderIdDELETE**](AccountsAndTradingApi.md#accountsAccountIdOrdersOrderIdDELETE) | **DELETE** /accounts/{accountId}/orders/{orderId} | Cancel Order


<a name="accountsAccountIdOrdersOrderIdDELETE"></a>
# **accountsAccountIdOrdersOrderIdDELETE**
> EASObject accountsAccountIdOrdersOrderIdDELETE(accountId, orderId)

Cancel Order

Cancel a specific order for a spcific account

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.AccountsAndTradingApi();

var accountId = 56; // Number | 

var orderId = 56; // Number | 

apiInstance.accountsAccountIdOrdersOrderIdDELETE(accountId, orderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

