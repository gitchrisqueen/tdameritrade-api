# GitChrisQueen_TDA_JS.WatchlistApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdWatchlistsGET**](WatchlistApi.md#accountsAccountIdWatchlistsGET) | **GET** /accounts/{accountId}/watchlists | Get Watchlists for Single Account
[**accountsAccountIdWatchlistsPOST**](WatchlistApi.md#accountsAccountIdWatchlistsPOST) | **POST** /accounts/{accountId}/watchlists | Create Watchlist
[**accountsAccountIdWatchlistsWatchlistIdGET**](WatchlistApi.md#accountsAccountIdWatchlistsWatchlistIdGET) | **GET** /accounts/{accountId}/watchlists/{watchlistId} | Get Watchlists
[**accountsAccountIdWatchlistsWatchlistIdPATCH**](WatchlistApi.md#accountsAccountIdWatchlistsWatchlistIdPATCH) | **PATCH** /accounts/{accountId}/watchlists/{watchlistId} | Update Watchlist
[**accountsAccountIdWatchlistsWatchlistIdPUT**](WatchlistApi.md#accountsAccountIdWatchlistsWatchlistIdPUT) | **PUT** /accounts/{accountId}/watchlists/{watchlistId} | Replace Watchlist
[**accountsWatchlistsGET**](WatchlistApi.md#accountsWatchlistsGET) | **GET** /accounts/watchlists | Get Watchlists for Multiple Accounts

<a name="accountsAccountIdWatchlistsGET"></a>
# **accountsAccountIdWatchlistsGET**
> WatchListResponse accountsAccountIdWatchlistsGET(accountId)

Get Watchlists for Single Account

all watchlist for an account.

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.WatchlistApi();
let accountId = "accountId_example"; // String | 

apiInstance.accountsAccountIdWatchlistsGET(accountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 

### Return type

[**WatchListResponse**](WatchListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdWatchlistsPOST"></a>
# **accountsAccountIdWatchlistsPOST**
> accountsAccountIdWatchlistsPOST(accountId, opts)

Create Watchlist

Create watchlist for specific account.This method does not verify that the symbol or asset type are valid.

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.WatchlistApi();
let accountId = "accountId_example"; // String | 
let opts = { 
  'body': new GitChrisQueen_TDA_JS.WatchListRequest() // WatchListRequest | 
};
apiInstance.accountsAccountIdWatchlistsPOST(accountId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **body** | [**WatchListRequest**](WatchListRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountsAccountIdWatchlistsWatchlistIdGET"></a>
# **accountsAccountIdWatchlistsWatchlistIdGET**
> WatchListResponse accountsAccountIdWatchlistsWatchlistIdGET(accountId, watchlistId)

Get Watchlists

Specific watchlist for a specific account.

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.WatchlistApi();
let accountId = "accountId_example"; // String | 
let watchlistId = "watchlistId_example"; // String | 

apiInstance.accountsAccountIdWatchlistsWatchlistIdGET(accountId, watchlistId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **watchlistId** | **String**|  | 

### Return type

[**WatchListResponse**](WatchListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdWatchlistsWatchlistIdPATCH"></a>
# **accountsAccountIdWatchlistsWatchlistIdPATCH**
> accountsAccountIdWatchlistsWatchlistIdPATCH(accountIdwatchlistId, opts)

Update Watchlist

Partially update watchlist for a specific account: change watchlist name, add to the beginning/end of a watchlist, update or delete items in a watchlist. This method does not verify that the symbol or asset type are valid.

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.WatchlistApi();
let accountId = "accountId_example"; // String | 
let watchlistId = "watchlistId_example"; // String | 
let opts = { 
  'body': new GitChrisQueen_TDA_JS.WatchListRequest() // WatchListRequest | 
};
apiInstance.accountsAccountIdWatchlistsWatchlistIdPATCH(accountIdwatchlistId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **watchlistId** | **String**|  | 
 **body** | [**WatchListRequest**](WatchListRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountsAccountIdWatchlistsWatchlistIdPUT"></a>
# **accountsAccountIdWatchlistsWatchlistIdPUT**
> accountsAccountIdWatchlistsWatchlistIdPUT(accountIdwatchlistId, opts)

Replace Watchlist

Replace watchlist for a specific account.

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.WatchlistApi();
let accountId = "accountId_example"; // String | 
let watchlistId = "watchlistId_example"; // String | 
let opts = { 
  'body': new GitChrisQueen_TDA_JS.WatchListRequest() // WatchListRequest | 
};
apiInstance.accountsAccountIdWatchlistsWatchlistIdPUT(accountIdwatchlistId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **watchlistId** | **String**|  | 
 **body** | [**WatchListRequest**](WatchListRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountsWatchlistsGET"></a>
# **accountsWatchlistsGET**
> WatchListResponse accountsWatchlistsGET()

Get Watchlists for Multiple Accounts

All watchlists for all of the user&#x27;s linked accounts.

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.WatchlistApi();
apiInstance.accountsWatchlistsGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WatchListResponse**](WatchListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

