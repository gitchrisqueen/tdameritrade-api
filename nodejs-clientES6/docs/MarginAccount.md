# GitChrisQueen_TDA_JS.MarginAccount

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
**initialBalances** | [**MarginAccountInitialBalances**](MarginAccountInitialBalances.md) |  | [optional] 
**currentBalances** | [**MarginAccountCurrentBalances**](MarginAccountCurrentBalances.md) |  | [optional] 
**projectedBalances** | [**MarginAccountCurrentBalances**](MarginAccountCurrentBalances.md) |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `CASH` (value: `"CASH"`)
* `MARGIN` (value: `"MARGIN"`)

