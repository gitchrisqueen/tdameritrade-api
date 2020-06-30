# GitChrisQueen_TDA_JS.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**clearingReferenceNumber** | **String** |  | [optional] 
**subAccount** | **String** |  | [optional] 
**settlementDate** | **Date** |  | [optional] 
**orderId** | **String** |  | [optional] 
**sma** | **Number** |  | [optional] 
**requirementReallocationAmount** | **Number** |  | [optional] 
**dayTradeBuyingPowerEffect** | **Number** |  | [optional] 
**netAmount** | **Number** |  | [optional] 
**transactionDate** | **Date** |  | [optional] 
**orderDate** | **Date** |  | [optional] 
**transactionSubType** | **String** |  | [optional] 
**transactionId** | **Number** |  | [optional] 
**cashBalanceEffectFlag** | **Boolean** |  | [optional] [default to false]
**description** | **String** |  | [optional] 
**achStatus** | **String** |  | [optional] 
**accruedInterest** | **Number** |  | [optional] 
**fees** | **{String: Number}** |  | [optional] 
**transactionItem** | [**TransactionTransactionItem**](TransactionTransactionItem.md) |  | [optional] 

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


<a name="AchStatusEnum"></a>
## Enum: AchStatusEnum

* `Approved` (value: `"Approved"`)
* `Rejected` (value: `"Rejected"`)
* `Cancel` (value: `"Cancel"`)
* `Error` (value: `"Error"`)

