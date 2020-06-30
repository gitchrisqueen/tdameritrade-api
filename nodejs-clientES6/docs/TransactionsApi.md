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
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.TransactionsApi();
let accountId = "accountId_example"; // String | 
let opts = { 
  'type': "type_example", // String | Only transactions with the specified type will be returned.
  'symbol': "symbol_example", // String | Only transactions with the specified symbol will be returned.
  'startDate': "startDate_example", // String | Only transactions after the Start Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd.
  'endDate': "endDate_example" // String | Only transactions after the end Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd.
};
apiInstance.accountsAccountIdTransactionsGET(accountId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.TransactionsApi();
let accountId = "accountId_example"; // String | 
let transactionId = "transactionId_example"; // String | 

apiInstance.accountsAccountIdTransactionsTransactionIdGET(accountId, transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

