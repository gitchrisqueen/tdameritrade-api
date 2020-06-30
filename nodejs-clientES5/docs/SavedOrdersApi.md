# GitChrisQueen_TDA_JS.SavedOrdersApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdSavedordersGET**](SavedOrdersApi.md#accountsAccountIdSavedordersGET) | **GET** /accounts/{accountId}/savedorders | Get Saved Orders by Path
[**accountsAccountIdSavedordersPOST**](SavedOrdersApi.md#accountsAccountIdSavedordersPOST) | **POST** /accounts/{accountId}/savedorders | Create Saved Orders
[**accountsAccountIdSavedordersSavedOrderIdDELETE**](SavedOrdersApi.md#accountsAccountIdSavedordersSavedOrderIdDELETE) | **DELETE** /accounts/{accountId}/savedorders/{savedOrderId} | Delete Saved Orders
[**accountsAccountIdSavedordersSavedOrderIdGET**](SavedOrdersApi.md#accountsAccountIdSavedordersSavedOrderIdGET) | **GET** /accounts/{accountId}/savedorders/{savedOrderId} | Get Saved Orders
[**accountsAccountIdSavedordersSavedOrderIdPUT**](SavedOrdersApi.md#accountsAccountIdSavedordersSavedOrderIdPUT) | **PUT** /accounts/{accountId}/savedorders/{savedOrderId} | Replace Saved Orders


<a name="accountsAccountIdSavedordersGET"></a>
# **accountsAccountIdSavedordersGET**
> OrderGet accountsAccountIdSavedordersGET(accountId)

Get Saved Orders by Path

Saved orders for a specific account.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.SavedOrdersApi();

var accountId = 56; // Number | 

apiInstance.accountsAccountIdSavedordersGET(accountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 

### Return type

[**OrderGet**](OrderGet.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdSavedordersPOST"></a>
# **accountsAccountIdSavedordersPOST**
> OrderGet accountsAccountIdSavedordersPOST(accountId, opts)

Create Saved Orders

Save an order for a specific account. See our Place Order Samples Guide - https://developer.tdameritrade.com/content/place-order-samples.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.SavedOrdersApi();

var accountId = 56; // Number | 

var opts = { 
  'body': new GitChrisQueen_TDA_JS.OrderGet() // OrderGet | 
};
apiInstance.accountsAccountIdSavedordersPOST(accountId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **body** | [**OrderGet**](OrderGet.md)|  | [optional] 

### Return type

[**OrderGet**](OrderGet.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/Json
 - **Accept**: application/json

<a name="accountsAccountIdSavedordersSavedOrderIdDELETE"></a>
# **accountsAccountIdSavedordersSavedOrderIdDELETE**
> EASObject accountsAccountIdSavedordersSavedOrderIdDELETE(accountId, savedOrderId)

Delete Saved Orders

Delete a specific saved order for a specific account.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.SavedOrdersApi();

var accountId = 56; // Number | 

var savedOrderId = 56; // Number | 

apiInstance.accountsAccountIdSavedordersSavedOrderIdDELETE(accountId, savedOrderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **savedOrderId** | **Number**|  | 

### Return type

[**EASObject**](EASObject.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdSavedordersSavedOrderIdGET"></a>
# **accountsAccountIdSavedordersSavedOrderIdGET**
> OrderGet accountsAccountIdSavedordersSavedOrderIdGET(accountId, savedOrderId)

Get Saved Orders

Specific saved order by its ID, for a specific account.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.SavedOrdersApi();

var accountId = 56; // Number | 

var savedOrderId = 56; // Number | 

apiInstance.accountsAccountIdSavedordersSavedOrderIdGET(accountId, savedOrderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **savedOrderId** | **Number**|  | 

### Return type

[**OrderGet**](OrderGet.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdSavedordersSavedOrderIdPUT"></a>
# **accountsAccountIdSavedordersSavedOrderIdPUT**
> OrderGet accountsAccountIdSavedordersSavedOrderIdPUT(accountId, savedOrderId, opts)

Replace Saved Orders

Replace an existing saved order for an account. The existing saved order will be replaced by the new order. see our Place Order Samples Guide - Click here.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.SavedOrdersApi();

var accountId = 56; // Number | 

var savedOrderId = 56; // Number | 

var opts = { 
  'body': new GitChrisQueen_TDA_JS.OrderGet() // OrderGet | 
};
apiInstance.accountsAccountIdSavedordersSavedOrderIdPUT(accountId, savedOrderId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **savedOrderId** | **Number**|  | 
 **body** | [**OrderGet**](OrderGet.md)|  | [optional] 

### Return type

[**OrderGet**](OrderGet.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/Json
 - **Accept**: application/json

