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
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.AccountsApi();
let accountId = 56; // Number | 
let opts = { 
  'fields': "fields_example" // String | Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders
};
apiInstance.accountsAccountIdGET(accountId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **fields** | **String**| Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields&#x3D;positions,orders | [optional] 

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
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.AccountsApi();
let opts = { 
  'fields': "fields_example" // String | Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders
};
apiInstance.accountsGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields&#x3D;positions,orders | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

