# GitChrisQueen_TDA_JS.AccountsApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdGET**](AccountsApi.md#accountsAccountIdGET) | **GET** /accounts/{accountId} | Get Account
[**accountsGET**](AccountsApi.md#accountsGET) | **GET** /accounts | Get Accounts


<a name="accountsAccountIdGET"></a>
# **accountsAccountIdGET**
> Account accountsAccountIdGET(accountId, opts)

Get Account

Account balances, positions, and orders for a specific account.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.AccountsApi();

var accountId = 56; // Number | 

var opts = { 
  'fields': "fields_example" // String | Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders
};
apiInstance.accountsAccountIdGET(accountId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **fields** | **String**| Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsGET"></a>
# **accountsGET**
> Account accountsGET(opts)

Get Accounts

Account balances, positions, and orders for all linked accounts.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.AccountsApi();

var opts = { 
  'fields': "fields_example" // String | Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders
};
apiInstance.accountsGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

