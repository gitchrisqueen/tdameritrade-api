
[![TD Ameritrade API Workflow CI](https://github.com/gitchrisqueen/tdameritrade-api/workflows/TD%20Ameritrade%20API%20Workflow%20CI/badge.svg)](https://github.com/gitchrisqueen/tdameritrade-api/actions?query=workflow%3A%22TD+Ameritrade+API+Swagger+Workflow+CI%22)

# TD Ameritrade API integration for Node.js

See - [TD Ameritrade API](https://developer.tdameritrade.com/apis)

## Installation

```
$ npm i @gitchrisqueen/tdameritrade-api-js-client --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');

var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new GitChrisQueen_TDA_JS.AccountsApi()

var accountId = 56; // {Number} 

var opts = { 
  'fields': "fields_example" // {String} Balances displayed by default, additional fields can be added here by adding positions or orders. Example: fields=positions,orders
};
api.accountsAccountIdGET(accountId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.tdameritrade.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GitChrisQueen_TDA_JS.AccountsApi* | [**accountsAccountIdGET**](nodejs-clientES5/docs/AccountsApi.md#accountsAccountIdGET) | **GET** /accounts/{accountId} | Get Account
*GitChrisQueen_TDA_JS.AccountsApi* | [**accountsGET**](nodejs-clientES5/docs/AccountsApi.md#accountsGET) | **GET** /accounts | Get Accounts
*GitChrisQueen_TDA_JS.AuthenticationApi* | [**oauth2TokenPOST**](nodejs-clientES5/docs/AuthenticationApi.md#oauth2TokenPOST) | **POST** /oauth2/token | Post Access Token
*GitChrisQueen_TDA_JS.InstrumentsApi* | [**instrumentsCusipGET**](nodejs-clientES5/docs/InstrumentsApi.md#instrumentsCusipGET) | **GET** /instruments/{cusip} | Get Instrument
*GitChrisQueen_TDA_JS.InstrumentsApi* | [**instrumentsGET**](nodejs-clientES5/docs/InstrumentsApi.md#instrumentsGET) | **GET** /instruments | Search Instruments
*GitChrisQueen_TDA_JS.MarketHoursApi* | [**marketdataHoursGET**](nodejs-clientES5/docs/MarketHoursApi.md#marketdataHoursGET) | **GET** /marketdata/hours | Get Hours for Multiple Markets
*GitChrisQueen_TDA_JS.MarketHoursApi* | [**marketdataMarketHoursGET**](nodejs-clientES5/docs/MarketHoursApi.md#marketdataMarketHoursGET) | **GET** /marketdata/{market}/hours | Get Hours for Multiple Markets
*GitChrisQueen_TDA_JS.MoversApi* | [**marketdataIndexMoversGET**](nodejs-clientES5/docs/MoversApi.md#marketdataIndexMoversGET) | **GET** /marketdata/{index}/movers | Get price history for a symbol
*GitChrisQueen_TDA_JS.OptionChainsApi* | [**marketdataChainsGET**](nodejs-clientES5/docs/OptionChainsApi.md#marketdataChainsGET) | **GET** /marketdata/chains | Get Option Chain
*GitChrisQueen_TDA_JS.OrdersApi* | [**accountsAccountIdOrdersGET**](nodejs-clientES5/docs/OrdersApi.md#accountsAccountIdOrdersGET) | **GET** /accounts/{accountId}/orders | Get Orders by Path
*GitChrisQueen_TDA_JS.OrdersApi* | [**accountsAccountIdOrdersOrderIdDELETE**](nodejs-clientES5/docs/OrdersApi.md#accountsAccountIdOrdersOrderIdDELETE) | **DELETE** /accounts/{accountId}/orders/{orderId} | Cancel Order
*GitChrisQueen_TDA_JS.OrdersApi* | [**accountsAccountIdOrdersOrderIdGET**](nodejs-clientES5/docs/OrdersApi.md#accountsAccountIdOrdersOrderIdGET) | **GET** /accounts/{accountId}/orders/{orderId} | Get Order
*GitChrisQueen_TDA_JS.OrdersApi* | [**accountsAccountIdOrdersOrderIdPUT**](nodejs-clientES5/docs/OrdersApi.md#accountsAccountIdOrdersOrderIdPUT) | **PUT** /accounts/{accountId}/orders/{orderId} | Replace Order
*GitChrisQueen_TDA_JS.OrdersApi* | [**ordersGET**](nodejs-clientES5/docs/OrdersApi.md#ordersGET) | **GET** /orders | Get Orders By Query
*GitChrisQueen_TDA_JS.OrdersApi* | [**ordersPOST**](nodejs-clientES5/docs/OrdersApi.md#ordersPOST) | **POST** /orders | Place Order
*GitChrisQueen_TDA_JS.PriceHistoryApi* | [**marketdataSymbolPricehistoryGET**](nodejs-clientES5/docs/PriceHistoryApi.md#marketdataSymbolPricehistoryGET) | **GET** /marketdata/{symbol}/pricehistory | Get price history for a symbol
*GitChrisQueen_TDA_JS.QuotesApi* | [**marketdataQuotesGET**](nodejs-clientES5/docs/QuotesApi.md#marketdataQuotesGET) | **GET** /marketdata/quotes | Get Quotes
*GitChrisQueen_TDA_JS.QuotesApi* | [**marketdataSymbolQuotesGET**](nodejs-clientES5/docs/QuotesApi.md#marketdataSymbolQuotesGET) | **GET** /marketdata/{symbol}/quotes | Get Quote
*GitChrisQueen_TDA_JS.SavedOrdersApi* | [**accountsAccountIdSavedordersGET**](nodejs-clientES5/docs/SavedOrdersApi.md#accountsAccountIdSavedordersGET) | **GET** /accounts/{accountId}/savedorders | Get Saved Orders by Path
*GitChrisQueen_TDA_JS.SavedOrdersApi* | [**accountsAccountIdSavedordersPOST**](nodejs-clientES5/docs/SavedOrdersApi.md#accountsAccountIdSavedordersPOST) | **POST** /accounts/{accountId}/savedorders | Create Saved Orders
*GitChrisQueen_TDA_JS.SavedOrdersApi* | [**accountsAccountIdSavedordersSavedOrderIdDELETE**](nodejs-clientES5/docs/SavedOrdersApi.md#accountsAccountIdSavedordersSavedOrderIdDELETE) | **DELETE** /accounts/{accountId}/savedorders/{savedOrderId} | Delete Saved Orders
*GitChrisQueen_TDA_JS.SavedOrdersApi* | [**accountsAccountIdSavedordersSavedOrderIdGET**](nodejs-clientES5/docs/SavedOrdersApi.md#accountsAccountIdSavedordersSavedOrderIdGET) | **GET** /accounts/{accountId}/savedorders/{savedOrderId} | Get Saved Orders
*GitChrisQueen_TDA_JS.SavedOrdersApi* | [**accountsAccountIdSavedordersSavedOrderIdPUT**](nodejs-clientES5/docs/SavedOrdersApi.md#accountsAccountIdSavedordersSavedOrderIdPUT) | **PUT** /accounts/{accountId}/savedorders/{savedOrderId} | Replace Saved Orders
*GitChrisQueen_TDA_JS.TransactionsApi* | [**accountsAccountIdTransactionsGET**](nodejs-clientES5/docs/TransactionsApi.md#accountsAccountIdTransactionsGET) | **GET** /accounts/{accountId}/transactions | Get Transactions
*GitChrisQueen_TDA_JS.TransactionsApi* | [**accountsAccountIdTransactionsTransactionIdGET**](nodejs-clientES5/docs/TransactionsApi.md#accountsAccountIdTransactionsTransactionIdGET) | **GET** /accounts/{accountId}/transactions/{transactionId} | Get Transaction
*GitChrisQueen_TDA_JS.UserInfoPreferencesApi* | [**accountsAccountIdPreferencesGET**](nodejs-clientES5/docs/UserInfoPreferencesApi.md#accountsAccountIdPreferencesGET) | **GET** /accounts/{accountId}/preferences | Get Preferences
*GitChrisQueen_TDA_JS.UserInfoPreferencesApi* | [**accountsAccountIdPreferencesPUT**](nodejs-clientES5/docs/UserInfoPreferencesApi.md#accountsAccountIdPreferencesPUT) | **PUT** /accounts/{accountId}/preferences | Update Preferences
*GitChrisQueen_TDA_JS.UserInfoPreferencesApi* | [**userprincipalsGET**](nodejs-clientES5/docs/UserInfoPreferencesApi.md#userprincipalsGET) | **GET** /userprincipals | Get User Principals
*GitChrisQueen_TDA_JS.UserInfoPreferencesApi* | [**userprincipalsStreamersubscriptionkeysGET**](nodejs-clientES5/docs/UserInfoPreferencesApi.md#userprincipalsStreamersubscriptionkeysGET) | **GET** /userprincipals/streamersubscriptionkeys | Get Streamer Subscription Keys
*GitChrisQueen_TDA_JS.WatchlistApi* | [**accountsAccountIdWatchlistsGET**](nodejs-clientES5/docs/WatchlistApi.md#accountsAccountIdWatchlistsGET) | **GET** /accounts/{accountId}/watchlists | Get Watchlists for Single Account
*GitChrisQueen_TDA_JS.WatchlistApi* | [**accountsAccountIdWatchlistsPOST**](nodejs-clientES5/docs/WatchlistApi.md#accountsAccountIdWatchlistsPOST) | **POST** /accounts/{accountId}/watchlists | Create Watchlist
*GitChrisQueen_TDA_JS.WatchlistApi* | [**accountsAccountIdWatchlistsWatchlistIdGET**](nodejs-clientES5/docs/WatchlistApi.md#accountsAccountIdWatchlistsWatchlistIdGET) | **GET** /accounts/{accountId}/watchlists/{watchlistId} | Get Watchlists
*GitChrisQueen_TDA_JS.WatchlistApi* | [**accountsAccountIdWatchlistsWatchlistIdPATCH**](nodejs-clientES5/docs/WatchlistApi.md#accountsAccountIdWatchlistsWatchlistIdPATCH) | **PATCH** /accounts/{accountId}/watchlists/{watchlistId} | Update Watchlist
*GitChrisQueen_TDA_JS.WatchlistApi* | [**accountsAccountIdWatchlistsWatchlistIdPUT**](nodejs-clientES5/docs/WatchlistApi.md#accountsAccountIdWatchlistsWatchlistIdPUT) | **PUT** /accounts/{accountId}/watchlists/{watchlistId} | Replace Watchlist
*GitChrisQueen_TDA_JS.WatchlistApi* | [**accountsWatchlistsGET**](nodejs-clientES5/docs/WatchlistApi.md#accountsWatchlistsGET) | **GET** /accounts/watchlists | Get Watchlists for Multiple Accounts


## Documentation for Models

 - [GitChrisQueen_TDA_JS.Account](nodejs-clientES5/docs/Account.md)
 - [GitChrisQueen_TDA_JS.AccountSecuritiesAccount](nodejs-clientES5/docs/AccountSecuritiesAccount.md)
 - [GitChrisQueen_TDA_JS.AssetType](nodejs-clientES5/docs/AssetType.md)
 - [GitChrisQueen_TDA_JS.Bond](nodejs-clientES5/docs/Bond.md)
 - [GitChrisQueen_TDA_JS.CandleList](nodejs-clientES5/docs/CandleList.md)
 - [GitChrisQueen_TDA_JS.CandleListCandles](nodejs-clientES5/docs/CandleListCandles.md)
 - [GitChrisQueen_TDA_JS.CashAccount](nodejs-clientES5/docs/CashAccount.md)
 - [GitChrisQueen_TDA_JS.CashAccountBalances](nodejs-clientES5/docs/CashAccountBalances.md)
 - [GitChrisQueen_TDA_JS.CashAccountCurrentBalances](nodejs-clientES5/docs/CashAccountCurrentBalances.md)
 - [GitChrisQueen_TDA_JS.CashAccountInitialBalances](nodejs-clientES5/docs/CashAccountInitialBalances.md)
 - [GitChrisQueen_TDA_JS.CashEquivalent](nodejs-clientES5/docs/CashEquivalent.md)
 - [GitChrisQueen_TDA_JS.Duration](nodejs-clientES5/docs/Duration.md)
 - [GitChrisQueen_TDA_JS.EASObject](nodejs-clientES5/docs/EASObject.md)
 - [GitChrisQueen_TDA_JS.ETFQuote](nodejs-clientES5/docs/ETFQuote.md)
 - [GitChrisQueen_TDA_JS.Equity](nodejs-clientES5/docs/Equity.md)
 - [GitChrisQueen_TDA_JS.EquityAssetType](nodejs-clientES5/docs/EquityAssetType.md)
 - [GitChrisQueen_TDA_JS.EquityQuote](nodejs-clientES5/docs/EquityQuote.md)
 - [GitChrisQueen_TDA_JS.ErrorObject](nodejs-clientES5/docs/ErrorObject.md)
 - [GitChrisQueen_TDA_JS.Execution](nodejs-clientES5/docs/Execution.md)
 - [GitChrisQueen_TDA_JS.ExecutionExecutionLegs](nodejs-clientES5/docs/ExecutionExecutionLegs.md)
 - [GitChrisQueen_TDA_JS.ExpirationDate](nodejs-clientES5/docs/ExpirationDate.md)
 - [GitChrisQueen_TDA_JS.FixedIncome](nodejs-clientES5/docs/FixedIncome.md)
 - [GitChrisQueen_TDA_JS.ForexQuote](nodejs-clientES5/docs/ForexQuote.md)
 - [GitChrisQueen_TDA_JS.FrequencyType](nodejs-clientES5/docs/FrequencyType.md)
 - [GitChrisQueen_TDA_JS.Fundamental](nodejs-clientES5/docs/Fundamental.md)
 - [GitChrisQueen_TDA_JS.FundamentalData](nodejs-clientES5/docs/FundamentalData.md)
 - [GitChrisQueen_TDA_JS.FundamentalFundamental](nodejs-clientES5/docs/FundamentalFundamental.md)
 - [GitChrisQueen_TDA_JS.FutureOptionsQuote](nodejs-clientES5/docs/FutureOptionsQuote.md)
 - [GitChrisQueen_TDA_JS.FutureQuote](nodejs-clientES5/docs/FutureQuote.md)
 - [GitChrisQueen_TDA_JS.GetOptionChainResponse](nodejs-clientES5/docs/GetOptionChainResponse.md)
 - [GitChrisQueen_TDA_JS.GetQuoteResponse](nodejs-clientES5/docs/GetQuoteResponse.md)
 - [GitChrisQueen_TDA_JS.Hours](nodejs-clientES5/docs/Hours.md)
 - [GitChrisQueen_TDA_JS.HoursSessionHours](nodejs-clientES5/docs/HoursSessionHours.md)
 - [GitChrisQueen_TDA_JS.IndexQuote](nodejs-clientES5/docs/IndexQuote.md)
 - [GitChrisQueen_TDA_JS.Instrument](nodejs-clientES5/docs/Instrument.md)
 - [GitChrisQueen_TDA_JS.LotMethod](nodejs-clientES5/docs/LotMethod.md)
 - [GitChrisQueen_TDA_JS.MarginAccount](nodejs-clientES5/docs/MarginAccount.md)
 - [GitChrisQueen_TDA_JS.MarginAccountBalances](nodejs-clientES5/docs/MarginAccountBalances.md)
 - [GitChrisQueen_TDA_JS.MarginAccountCurrentBalances](nodejs-clientES5/docs/MarginAccountCurrentBalances.md)
 - [GitChrisQueen_TDA_JS.MarginAccountInitialBalances](nodejs-clientES5/docs/MarginAccountInitialBalances.md)
 - [GitChrisQueen_TDA_JS.MarginAccountOrderStrategies](nodejs-clientES5/docs/MarginAccountOrderStrategies.md)
 - [GitChrisQueen_TDA_JS.MarginAccountPositions](nodejs-clientES5/docs/MarginAccountPositions.md)
 - [GitChrisQueen_TDA_JS.Mover](nodejs-clientES5/docs/Mover.md)
 - [GitChrisQueen_TDA_JS.MutualFund](nodejs-clientES5/docs/MutualFund.md)
 - [GitChrisQueen_TDA_JS.MutualFundQuote](nodejs-clientES5/docs/MutualFundQuote.md)
 - [GitChrisQueen_TDA_JS.Option](nodejs-clientES5/docs/Option.md)
 - [GitChrisQueen_TDA_JS.OptionChain](nodejs-clientES5/docs/OptionChain.md)
 - [GitChrisQueen_TDA_JS.OptionChainOption](nodejs-clientES5/docs/OptionChainOption.md)
 - [GitChrisQueen_TDA_JS.OptionChainOptionOptionDeliverablesList](nodejs-clientES5/docs/OptionChainOptionOptionDeliverablesList.md)
 - [GitChrisQueen_TDA_JS.OptionChainOptionPutCall](nodejs-clientES5/docs/OptionChainOptionPutCall.md)
 - [GitChrisQueen_TDA_JS.OptionChainStrategy](nodejs-clientES5/docs/OptionChainStrategy.md)
 - [GitChrisQueen_TDA_JS.OptionChainUnderlying](nodejs-clientES5/docs/OptionChainUnderlying.md)
 - [GitChrisQueen_TDA_JS.OptionDeliverable](nodejs-clientES5/docs/OptionDeliverable.md)
 - [GitChrisQueen_TDA_JS.OptionDeliverableInner](nodejs-clientES5/docs/OptionDeliverableInner.md)
 - [GitChrisQueen_TDA_JS.OptionDeliverableInnerAssetType](nodejs-clientES5/docs/OptionDeliverableInnerAssetType.md)
 - [GitChrisQueen_TDA_JS.OptionQuote](nodejs-clientES5/docs/OptionQuote.md)
 - [GitChrisQueen_TDA_JS.OrderActivity](nodejs-clientES5/docs/OrderActivity.md)
 - [GitChrisQueen_TDA_JS.OrderGet](nodejs-clientES5/docs/OrderGet.md)
 - [GitChrisQueen_TDA_JS.OrderGetCancelTime](nodejs-clientES5/docs/OrderGetCancelTime.md)
 - [GitChrisQueen_TDA_JS.OrderGetDuration](nodejs-clientES5/docs/OrderGetDuration.md)
 - [GitChrisQueen_TDA_JS.OrderGetInstrument](nodejs-clientES5/docs/OrderGetInstrument.md)
 - [GitChrisQueen_TDA_JS.OrderGetOrderActivityCollection](nodejs-clientES5/docs/OrderGetOrderActivityCollection.md)
 - [GitChrisQueen_TDA_JS.OrderGetOrderLegCollection](nodejs-clientES5/docs/OrderGetOrderLegCollection.md)
 - [GitChrisQueen_TDA_JS.OrderGetOrderType](nodejs-clientES5/docs/OrderGetOrderType.md)
 - [GitChrisQueen_TDA_JS.OrderGetSession](nodejs-clientES5/docs/OrderGetSession.md)
 - [GitChrisQueen_TDA_JS.OrderType](nodejs-clientES5/docs/OrderType.md)
 - [GitChrisQueen_TDA_JS.PeriodType](nodejs-clientES5/docs/PeriodType.md)
 - [GitChrisQueen_TDA_JS.Positions](nodejs-clientES5/docs/Positions.md)
 - [GitChrisQueen_TDA_JS.PositionsInner](nodejs-clientES5/docs/PositionsInner.md)
 - [GitChrisQueen_TDA_JS.PositionsInnerInstrument](nodejs-clientES5/docs/PositionsInnerInstrument.md)
 - [GitChrisQueen_TDA_JS.PostAccessBody](nodejs-clientES5/docs/PostAccessBody.md)
 - [GitChrisQueen_TDA_JS.Preferences](nodejs-clientES5/docs/Preferences.md)
 - [GitChrisQueen_TDA_JS.PutCall](nodejs-clientES5/docs/PutCall.md)
 - [GitChrisQueen_TDA_JS.SearchInstrument](nodejs-clientES5/docs/SearchInstrument.md)
 - [GitChrisQueen_TDA_JS.SearchInstrumentResponse](nodejs-clientES5/docs/SearchInstrumentResponse.md)
 - [GitChrisQueen_TDA_JS.SecuritiesAccount](nodejs-clientES5/docs/SecuritiesAccount.md)
 - [GitChrisQueen_TDA_JS.Session](nodejs-clientES5/docs/Session.md)
 - [GitChrisQueen_TDA_JS.Strategy](nodejs-clientES5/docs/Strategy.md)
 - [GitChrisQueen_TDA_JS.StrikePriceMap](nodejs-clientES5/docs/StrikePriceMap.md)
 - [GitChrisQueen_TDA_JS.SubscriptionKey](nodejs-clientES5/docs/SubscriptionKey.md)
 - [GitChrisQueen_TDA_JS.SubscriptionKeyKeys](nodejs-clientES5/docs/SubscriptionKeyKeys.md)
 - [GitChrisQueen_TDA_JS.Transaction](nodejs-clientES5/docs/Transaction.md)
 - [GitChrisQueen_TDA_JS.TransactionTransactionItem](nodejs-clientES5/docs/TransactionTransactionItem.md)
 - [GitChrisQueen_TDA_JS.TransactionTransactionItemInstrument](nodejs-clientES5/docs/TransactionTransactionItemInstrument.md)
 - [GitChrisQueen_TDA_JS.Underlying](nodejs-clientES5/docs/Underlying.md)
 - [GitChrisQueen_TDA_JS.UserPrincipal](nodejs-clientES5/docs/UserPrincipal.md)
 - [GitChrisQueen_TDA_JS.UserPrincipalAccounts](nodejs-clientES5/docs/UserPrincipalAccounts.md)
 - [GitChrisQueen_TDA_JS.UserPrincipalAuthorizations](nodejs-clientES5/docs/UserPrincipalAuthorizations.md)
 - [GitChrisQueen_TDA_JS.UserPrincipalPreferences](nodejs-clientES5/docs/UserPrincipalPreferences.md)
 - [GitChrisQueen_TDA_JS.UserPrincipalPreferencesMutualFundTaxLotMethod](nodejs-clientES5/docs/UserPrincipalPreferencesMutualFundTaxLotMethod.md)
 - [GitChrisQueen_TDA_JS.UserPrincipalQuotes](nodejs-clientES5/docs/UserPrincipalQuotes.md)
 - [GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo](nodejs-clientES5/docs/UserPrincipalStreamerInfo.md)
 - [GitChrisQueen_TDA_JS.UserPrincipalStreamerSubscriptionKeys](nodejs-clientES5/docs/UserPrincipalStreamerSubscriptionKeys.md)
 - [GitChrisQueen_TDA_JS.WatchList](nodejs-clientES5/docs/WatchList.md)
 - [GitChrisQueen_TDA_JS.WatchListInstrument](nodejs-clientES5/docs/WatchListInstrument.md)
 - [GitChrisQueen_TDA_JS.WatchListRequest](nodejs-clientES5/docs/WatchListRequest.md)
 - [GitChrisQueen_TDA_JS.WatchListRequestInstrument](nodejs-clientES5/docs/WatchListRequestInstrument.md)
 - [GitChrisQueen_TDA_JS.WatchListRequestWatchlistItems](nodejs-clientES5/docs/WatchListRequestWatchlistItems.md)
 - [GitChrisQueen_TDA_JS.WatchListResponse](nodejs-clientES5/docs/WatchListResponse.md)
 - [GitChrisQueen_TDA_JS.WatchListWatchlistItems](nodejs-clientES5/docs/WatchListWatchlistItems.md)


## Documentation for Authorization


### application

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost&client_id=YHJUQFCHRMJ7XODGVGGPINB05SCG2H45%40AMER.OAUTHAP
- **Scopes**: N/A

### bearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header



