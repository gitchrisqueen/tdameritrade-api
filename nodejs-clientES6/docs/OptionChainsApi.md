# GitChrisQueen_TDA_JS.OptionChainsApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketdataChainsGET**](OptionChainsApi.md#marketdataChainsGET) | **GET** /marketdata/chains | Get Option Chain

<a name="marketdataChainsGET"></a>
# **marketdataChainsGET**
> OptionChain marketdataChainsGET(opts)

Get Option Chain

Get option chain for an optionable Symbol

### Example
```javascript
import GitChrisQueen_TDA_JS from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;


let apiInstance = new GitChrisQueen_TDA_JS.OptionChainsApi();
let opts = { 
  'apikey': "apikey_example", // String | Pass your OAuth User ID to make an unauthenticated request for delayed data.
  'symbol': "symbol_example", // String | Enter one symbol
  'contractType': "ALL", // String | Type of contracts to return in the chain. Can be CALL, PUT, or ALL. Default is ALL.
  'strikeCount': 56, // Number | The number of strikes to return above and below the at-the-money price.
  'includeQuotes': false, // Boolean | Include quotes for options in the option chain. Can be TRUE or FALSE. Default is FALSE.
  'strategy': new GitChrisQueen_TDA_JS.Strategy(), // Strategy | Passing a value returns a Strategy Chain. Possible values are SINGLE, ANALYTICAL (allows use of the volatility, underlyingPrice, interestRate, and daysToExpiration params to calculate theoretical values), COVERED, VERTICAL, CALENDAR, STRANGLE, STRADDLE, BUTTERFLY, CONDOR, DIAGONAL, COLLAR, or ROLL. Default is SINGLE.
  'interval': 56, // Number | Strike interval for spread strategy chains (see strategy param).
  'strike': 1.2, // Number | Provide a strike price to return options only at that strike price.
  'range': "range_example", // String | Returns options for the given range. Possible values are: ITM: In-the-money NTM: Near-the-money OTM: Out-of-the-money SAK: Strikes Above Market SBK: Strikes Below Market SNK: Strikes Near Market ALL: All Strikes Default is ALL.
  'fromDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return expirations after this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz.
  'toDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return expirations before this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz.
  'volatility': 1.2, // Number | Volatility to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param).
  'underlyingPrice': 1.2, // Number | Underlying price to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param).
  'interestRate': 1.2, // Number | Interest rate to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param).
  'daysToExpiration': 56, // Number | Days to expiration to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param)
  'expMonth': "ALL", // String | Return only options expiring in the specified month. Month is given in the three character format. Example: JAN Default is ALL.
  'optionType': "ALL" // String | Type of contracts to return. Possible values are: S: Standard contract NS: Non-standard contract ALL: All contracts Default is ALL.
};
apiInstance.marketdataChainsGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **String**| Pass your OAuth User ID to make an unauthenticated request for delayed data. | [optional] 
 **symbol** | **String**| Enter one symbol | [optional] 
 **contractType** | **String**| Type of contracts to return in the chain. Can be CALL, PUT, or ALL. Default is ALL. | [optional] [default to ALL]
 **strikeCount** | **Number**| The number of strikes to return above and below the at-the-money price. | [optional] 
 **includeQuotes** | **Boolean**| Include quotes for options in the option chain. Can be TRUE or FALSE. Default is FALSE. | [optional] [default to false]
 **strategy** | [**Strategy**](.md)| Passing a value returns a Strategy Chain. Possible values are SINGLE, ANALYTICAL (allows use of the volatility, underlyingPrice, interestRate, and daysToExpiration params to calculate theoretical values), COVERED, VERTICAL, CALENDAR, STRANGLE, STRADDLE, BUTTERFLY, CONDOR, DIAGONAL, COLLAR, or ROLL. Default is SINGLE. | [optional] 
 **interval** | **Number**| Strike interval for spread strategy chains (see strategy param). | [optional] 
 **strike** | **Number**| Provide a strike price to return options only at that strike price. | [optional] 
 **range** | **String**| Returns options for the given range. Possible values are: ITM: In-the-money NTM: Near-the-money OTM: Out-of-the-money SAK: Strikes Above Market SBK: Strikes Below Market SNK: Strikes Near Market ALL: All Strikes Default is ALL. | [optional] 
 **fromDate** | **Date**| Only return expirations after this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz. | [optional] 
 **toDate** | **Date**| Only return expirations before this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz. | [optional] 
 **volatility** | **Number**| Volatility to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param). | [optional] 
 **underlyingPrice** | **Number**| Underlying price to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param). | [optional] 
 **interestRate** | **Number**| Interest rate to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param). | [optional] 
 **daysToExpiration** | **Number**| Days to expiration to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param) | [optional] 
 **expMonth** | **String**| Return only options expiring in the specified month. Month is given in the three character format. Example: JAN Default is ALL. | [optional] [default to ALL]
 **optionType** | **String**| Type of contracts to return. Possible values are: S: Standard contract NS: Non-standard contract ALL: All contracts Default is ALL. | [optional] [default to ALL]

### Return type

[**OptionChain**](OptionChain.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

