# GitChrisQueen_TDA_JS.OrdersApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdOrdersGET**](OrdersApi.md#accountsAccountIdOrdersGET) | **GET** /accounts/{accountId}/orders | Get Orders by Path
[**accountsAccountIdOrdersOrderIdDELETE**](OrdersApi.md#accountsAccountIdOrdersOrderIdDELETE) | **DELETE** /accounts/{accountId}/orders/{orderId} | Cancel Order
[**accountsAccountIdOrdersOrderIdGET**](OrdersApi.md#accountsAccountIdOrdersOrderIdGET) | **GET** /accounts/{accountId}/orders/{orderId} | Get Order
[**accountsAccountIdOrdersOrderIdPUT**](OrdersApi.md#accountsAccountIdOrdersOrderIdPUT) | **PUT** /accounts/{accountId}/orders/{orderId} | Replace Order
[**ordersGET**](OrdersApi.md#ordersGET) | **GET** /orders | Get Orders By Query
[**ordersPOST**](OrdersApi.md#ordersPOST) | **POST** /orders | Place Order


<a name="accountsAccountIdOrdersGET"></a>
# **accountsAccountIdOrdersGET**
> OrderGet accountsAccountIdOrdersGET(accountId, opts)

Get Orders by Path

Orders for a specific account.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.OrdersApi();

var accountId = 56; // Number | 

var opts = { 
  'maxResults': 56, // Number | 
  'fromEnteredTime': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'toEnteredTime': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'status': "status_example" // String | 
};
apiInstance.accountsAccountIdOrdersGET(accountId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **maxResults** | **Number**|  | [optional] 
 **fromEnteredTime** | **Date**|  | [optional] 
 **toEnteredTime** | **Date**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**OrderGet**](OrderGet.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

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

var apiInstance = new GitChrisQueen_TDA_JS.OrdersApi();

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

<a name="accountsAccountIdOrdersOrderIdGET"></a>
# **accountsAccountIdOrdersOrderIdGET**
> OrderGet accountsAccountIdOrdersOrderIdGET(accountId, orderId)

Get Order

Get a specific order for a specific account.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.OrdersApi();

var accountId = 56; // Number | 

var orderId = 56; // Number | 

apiInstance.accountsAccountIdOrdersOrderIdGET(accountId, orderId).then(function(data) {
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

[**OrderGet**](OrderGet.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdOrdersOrderIdPUT"></a>
# **accountsAccountIdOrdersOrderIdPUT**
> OrderGet accountsAccountIdOrdersOrderIdPUT(accountId, orderId)

Replace Order

Replace an existing order for an account. The existing order will be replaced by the new order. Once replaced, the old order will be canceled and a new order will be created. See our Place Order Samples Guide - https://developer.tdameritrade.com/content/place-order-samples.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.OrdersApi();

var accountId = 56; // Number | 

var orderId = 56; // Number | 

apiInstance.accountsAccountIdOrdersOrderIdPUT(accountId, orderId).then(function(data) {
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

[**OrderGet**](OrderGet.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersGET"></a>
# **ordersGET**
> OrderGet ordersGET(opts)

Get Orders By Query

All orders for a specific account or, if account ID isn't specified, orders will be returned for all linked accounts.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.OrdersApi();

var opts = { 
  'accountId': 56, // Number | 
  'maxResults': 56, // Number | 
  'fromEnteredTime': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'toEnteredTime': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'status': "status_example" // String | 
};
apiInstance.ordersGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | [optional] 
 **maxResults** | **Number**|  | [optional] 
 **fromEnteredTime** | **Date**|  | [optional] 
 **toEnteredTime** | **Date**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**OrderGet**](OrderGet.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersPOST"></a>
# **ordersPOST**
> OrderGet ordersPOST(accountId, opts)

Place Order

Place an order for a specific account. See our Place Order Samples Guide - https://developer.tdameritrade.com/content/place-order-samples.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.OrdersApi();

var accountId = 56; // Number | 

var opts = { 
  'body': new GitChrisQueen_TDA_JS.OrderGet() // OrderGet | 
};
apiInstance.ordersPOST(accountId, opts).then(function(data) {
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

