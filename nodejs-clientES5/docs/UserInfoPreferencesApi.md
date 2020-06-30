# GitChrisQueen_TDA_JS.UserInfoPreferencesApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdPreferencesGET**](UserInfoPreferencesApi.md#accountsAccountIdPreferencesGET) | **GET** /accounts/{accountId}/preferences | Get Preferences
[**accountsAccountIdPreferencesPUT**](UserInfoPreferencesApi.md#accountsAccountIdPreferencesPUT) | **PUT** /accounts/{accountId}/preferences | Update Preferences
[**userprincipalsGET**](UserInfoPreferencesApi.md#userprincipalsGET) | **GET** /userprincipals | Get User Principals
[**userprincipalsStreamersubscriptionkeysGET**](UserInfoPreferencesApi.md#userprincipalsStreamersubscriptionkeysGET) | **GET** /userprincipals/streamersubscriptionkeys | Get Streamer Subscription Keys


<a name="accountsAccountIdPreferencesGET"></a>
# **accountsAccountIdPreferencesGET**
> Preferences accountsAccountIdPreferencesGET(accountId)

Get Preferences

Preferences for a specific account.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.UserInfoPreferencesApi();

var accountId = "accountId_example"; // String | 

apiInstance.accountsAccountIdPreferencesGET(accountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 

### Return type

[**Preferences**](Preferences.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdPreferencesPUT"></a>
# **accountsAccountIdPreferencesPUT**
> accountsAccountIdPreferencesPUT(accountId, opts)

Update Preferences

Update preferences for a specific account. Please note that the directOptionsRouting and directEquityRouting values cannot be modified via this operation.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.UserInfoPreferencesApi();

var accountId = "accountId_example"; // String | 

var opts = { 
  'body': new GitChrisQueen_TDA_JS.Preferences() // Preferences | 
};
apiInstance.accountsAccountIdPreferencesPUT(accountId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **body** | [**Preferences**](Preferences.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userprincipalsGET"></a>
# **userprincipalsGET**
> UserPrincipal userprincipalsGET(opts)

Get User Principals

User Principal details.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.UserInfoPreferencesApi();

var opts = { 
  'fields': "fields_example" // String | A comma separated String which allows one to specify additional fields to return. None of these fields are returned by default. Possible values in this String can be: streamerSubscriptionKeys,streamerConnectionInfo,preferences, surrogateIds. Example: fields=streamerSubscriptionKeys,streamerConnectionInfo
};
apiInstance.userprincipalsGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| A comma separated String which allows one to specify additional fields to return. None of these fields are returned by default. Possible values in this String can be: streamerSubscriptionKeys,streamerConnectionInfo,preferences, surrogateIds. Example: fields=streamerSubscriptionKeys,streamerConnectionInfo | [optional] 

### Return type

[**UserPrincipal**](UserPrincipal.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userprincipalsStreamersubscriptionkeysGET"></a>
# **userprincipalsStreamersubscriptionkeysGET**
> SubscriptionKey userprincipalsStreamersubscriptionkeysGET(opts)

Get Streamer Subscription Keys

SubscriptionKey for provided accounts or default accounts.

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.UserInfoPreferencesApi();

var opts = { 
  'accountIds': "accountIds_example" // String | A comma separated string of account IDs, to fetch subscription keys for each of them.
};
apiInstance.userprincipalsStreamersubscriptionkeysGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | **String**| A comma separated string of account IDs, to fetch subscription keys for each of them. | [optional] 

### Return type

[**SubscriptionKey**](SubscriptionKey.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

