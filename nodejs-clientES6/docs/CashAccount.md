# GitChrisQueen_TDA_JS.CashAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**accountId** | **String** |  | [optional] 
**roundTrips** | **Number** |  | [optional] 
**isDayTrader** | **Boolean** |  | [optional] [default to false]
**isClosingOnlyRestricted** | **Boolean** |  | [optional] [default to false]
**positions** | [**MarginAccountPositions**](MarginAccountPositions.md) |  | [optional] 
**orderStrategies** | [**MarginAccountOrderStrategies**](MarginAccountOrderStrategies.md) |  | [optional] 
**initialBalances** | [**CashAccountInitialBalances**](CashAccountInitialBalances.md) |  | [optional] 
**currentBalances** | [**CashAccountCurrentBalances**](CashAccountCurrentBalances.md) |  | [optional] 
**projectedBalances** | [**CashAccountCurrentBalances**](CashAccountCurrentBalances.md) |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `CASH` (value: `"CASH"`)
* `MARGIN` (value: `"MARGIN"`)

