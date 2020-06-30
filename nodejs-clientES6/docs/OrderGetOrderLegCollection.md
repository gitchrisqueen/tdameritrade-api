# GitChrisQueen_TDA_JS.OrderGetOrderLegCollection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderLegType** | **String** |  | [optional] 
**legId** | **Number** |  | [optional] 
**instrument** | [**OrderGetInstrument**](OrderGetInstrument.md) |  | [optional] 
**instruction** | **String** |  | [optional] 
**positionEffect** | **String** |  | [optional] 
**quantity** | **Number** |  | [optional] 
**quantityType** | **String** |  | [optional] 

<a name="OrderLegTypeEnum"></a>
## Enum: OrderLegTypeEnum

* `EQUITY` (value: `"EQUITY"`)
* `OPTION` (value: `"OPTION"`)
* `INDEX` (value: `"INDEX"`)
* `MUTUAL_FUND` (value: `"MUTUAL_FUND"`)
* `CASH_EQUIVALENT` (value: `"CASH_EQUIVALENT"`)
* `FIXED_INCOME` (value: `"FIXED_INCOME"`)
* `CURRENCY` (value: `"CURRENCY"`)


<a name="InstructionEnum"></a>
## Enum: InstructionEnum

* `BUY` (value: `"BUY"`)
* `SELL` (value: `"SELL"`)
* `BUY_TO_COVER` (value: `"BUY_TO_COVER"`)
* `SELL_SHORT` (value: `"SELL_SHORT"`)
* `BUY_TO_OPEN` (value: `"BUY_TO_OPEN"`)
* `BUY_TO_CLOSE` (value: `"BUY_TO_CLOSE"`)
* `SELL_TO_OPEN` (value: `"SELL_TO_OPEN"`)
* `SELL_TO_CLOSE` (value: `"SELL_TO_CLOSE"`)
* `EXCHANGE` (value: `"EXCHANGE"`)


<a name="PositionEffectEnum"></a>
## Enum: PositionEffectEnum

* `OPENING` (value: `"OPENING"`)
* `CLOSING` (value: `"CLOSING"`)
* `AUTOMATIC` (value: `"AUTOMATIC"`)


<a name="QuantityTypeEnum"></a>
## Enum: QuantityTypeEnum

* `ALL_SHARES` (value: `"ALL_SHARES"`)
* `DOLLARS` (value: `"DOLLARS"`)
* `SHARES` (value: `"SHARES"`)

