# GitChrisQueen_TDA_JS.TransactionsApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdTransactionsGET**](TransactionsApi.md#accountsAccountIdTransactionsGET) | **GET** /accounts/{accountId}/transactions | Get Transactions
[**accountsAccountIdTransactionsTransactionIdGET**](TransactionsApi.md#accountsAccountIdTransactionsTransactionIdGET) | **GET** /accounts/{accountId}/transactions/{transactionId} | Get Transaction


<a name="accountsAccountIdTransactionsGET"></a>
# **accountsAccountIdTransactionsGET**
> Transaction accountsAccountIdTransactionsGET(accountId, opts)

Get Transactions

Transaction for a specific account.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.TransactionsApi();

var accountId = "accountId_example"; // String | 

var opts = { 
  'type': "type_example", // String | Only transactions with the specified type will be returned.
  'symbol': "symbol_example", // String | Only transactions with the specified symbol will be returned.
  'startDate': "startDate_example", // String | Only transactions after the Start Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd.
  'endDate': "endDate_example" // String | Only transactions after the end Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd.
};
apiInstance.accountsAccountIdTransactionsGET(accountId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **type** | **String**| Only transactions with the specified type will be returned. | [optional] 
 **symbol** | **String**| Only transactions with the specified symbol will be returned. | [optional] 
 **startDate** | **String**| Only transactions after the Start Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd. | [optional] 
 **endDate** | **String**| Only transactions after the end Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd. | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdTransactionsTransactionIdGET"></a>
# **accountsAccountIdTransactionsTransactionIdGET**
> Transaction accountsAccountIdTransactionsTransactionIdGET(accountId, transactionId)

Get Transaction

Transaction for a specific account.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.TransactionsApi();

var accountId = "accountId_example"; // String | 

var transactionId = "transactionId_example"; // String | 

apiInstance.accountsAccountIdTransactionsTransactionIdGET(accountId, transactionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **transactionId** | **String**|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

