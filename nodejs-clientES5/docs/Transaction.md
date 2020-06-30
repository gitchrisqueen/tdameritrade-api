# GitChrisQueen_TDA_JS.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accruedInterest** | **Number** |  | [optional] 
**achStatus** | **String** |  | [optional] 
**cashBalanceEffectFlag** | **Boolean** |  | [optional] [default to false]
**clearingReferenceNumber** | **String** |  | [optional] 
**dayTradeBuyingPowerEffect** | **Number** |  | [optional] 
**description** | **String** |  | [optional] 
**fees** | **{String: Number}** |  | [optional] 
**netAmount** | **Number** |  | [optional] 
**orderDate** | **Date** |  | [optional] 
**orderId** | **String** |  | [optional] 
**requirementReallocationAmount** | **Number** |  | [optional] 
**settlementDate** | **Date** |  | [optional] 
**sma** | **Number** |  | [optional] 
**subAccount** | **String** |  | [optional] 
**transactionDate** | **Date** |  | [optional] 
**transactionId** | **Number** |  | [optional] 
**transactionItem** | [**TransactionTransactionItem**](TransactionTransactionItem.md) |  | [optional] 
**transactionSubType** | **String** |  | [optional] 
**type** | **String** |  | [optional] 


<a name="AchStatusEnum"></a>
## Enum: AchStatusEnum


* `Approved` (value: `"Approved"`)

* `Rejected` (value: `"Rejected"`)

* `Cancel` (value: `"Cancel"`)

* `Error` (value: `"Error"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `TRADE` (value: `"TRADE"`)

* `RECEIVE_AND_DELIVER` (value: `"RECEIVE_AND_DELIVER"`)

* `DIVIDEND_OR_INTEREST` (value: `"DIVIDEND_OR_INTEREST"`)

* `ACH_RECEIPT` (value: `"ACH_RECEIPT"`)

* `ACH_DISBURSEMENT` (value: `"ACH_DISBURSEMENT"`)

* `CASH_RECEIPT` (value: `"CASH_RECEIPT"`)

* `CASH_DISBURSEMENT` (value: `"CASH_DISBURSEMENT"`)

* `ELECTRONIC_FUND` (value: `"ELECTRONIC_FUND"`)

* `WIRE_OUT` (value: `"WIRE_OUT"`)

* `WIRE_IN` (value: `"WIRE_IN"`)

* `JOURNAL` (value: `"JOURNAL"`)

* `MEMORANDUM` (value: `"MEMORANDUM"`)

* `MARGIN_CALL` (value: `"MARGIN_CALL"`)

* `MONEY_MARKET` (value: `"MONEY_MARKET"`)

* `SMA_ADJUSTMENT` (value: `"SMA_ADJUSTMENT"`)




