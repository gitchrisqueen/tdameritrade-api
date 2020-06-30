# GitChrisQueen_TDA_JS.OrderGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **Number** |  | [optional] 
**activationPrice** | **Number** |  | [optional] 
**cancelTime** | [**OrderGetCancelTime**](OrderGetCancelTime.md) |  | [optional] 
**cancelable** | **Boolean** |  | [optional] [default to false]
**childOrderStrategies** | **[Object]** |  | [optional] 
**closedTime** | **Date** |  | [optional] 
**complexOrderStrategyType** | **String** |  | [optional] 
**destinationLinkName** | **String** |  | [optional] 
**duration** | [**OrderGetDuration**](OrderGetDuration.md) |  | [optional] 
**editable** | **Boolean** |  | [optional] [default to false]
**enteredTime** | **Date** |  | [optional] 
**filledQuantity** | **Number** |  | [optional] 
**orderActivityCollection** | [**[OrderGetOrderActivityCollection]**](OrderGetOrderActivityCollection.md) |  | [optional] 
**orderId** | **Number** |  | [optional] 
**orderLegCollection** | [**[OrderGetOrderLegCollection]**](OrderGetOrderLegCollection.md) |  | [optional] 
**orderStrategyType** | **String** |  | [optional] 
**orderType** | [**OrderGetOrderType**](OrderGetOrderType.md) |  | [optional] 
**price** | **Number** |  | [optional] 
**priceLinkBasis** | **String** |  | [optional] 
**priceLinkType** | **String** |  | [optional] 
**quality** | **Number** |  | [optional] 
**releaseTime** | **Date** |  | [optional] 
**remainingQuantity** | **Number** |  | [optional] 
**replacingOrderCollection** | **[Object]** |  | [optional] 
**requestedDestination** | **String** |  | [optional] 
**session** | [**OrderGetSession**](OrderGetSession.md) |  | [optional] 
**specialInstruction** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**statusDescription** | **String** |  | [optional] 
**stopPrice** | **Number** |  | [optional] 
**stopPriceLinkBasis** | **String** |  | [optional] 
**stopPriceLinkType** | **String** |  | [optional] 
**stopPriceOffset** | **Number** |  | [optional] 
**stopType** | **String** |  | [optional] 
**tag** | **String** |  | [optional] 
**taxLotMethod** | **String** |  | [optional] 


<a name="ComplexOrderStrategyTypeEnum"></a>
## Enum: ComplexOrderStrategyTypeEnum


* `NONE` (value: `"NONE"`)

* `COVERED` (value: `"COVERED"`)

* `VERTICAL` (value: `"VERTICAL"`)

* `BACK_RATIO` (value: `"BACK_RATIO"`)

* `CALENDAR` (value: `"CALENDAR"`)

* `DIAGONAL` (value: `"DIAGONAL"`)

* `STRADDLE` (value: `"STRADDLE"`)

* `STRANGLE` (value: `"STRANGLE"`)

* `COLLAR_SYNTHETIC` (value: `"COLLAR_SYNTHETIC"`)

* `BUTTERFLY` (value: `"BUTTERFLY"`)

* `CONDOR` (value: `"CONDOR"`)

* `IRON_CONDOR` (value: `"IRON_CONDOR"`)

* `VERTICAL_ROLL` (value: `"VERTICAL_ROLL"`)

* `COLLAR_WITH_STOCK` (value: `"COLLAR_WITH_STOCK"`)

* `DOUBLE_DIAGONAL` (value: `"DOUBLE_DIAGONAL"`)

* `UNBALANCED_BUTTERFLY` (value: `"UNBALANCED_BUTTERFLY"`)

* `UNBALANCED_CONDOR` (value: `"UNBALANCED_CONDOR"`)

* `UNBALANCED_IRON_CONDOR` (value: `"UNBALANCED_IRON_CONDOR"`)

* `UNBALANCED_VERTICAL_ROLL` (value: `"UNBALANCED_VERTICAL_ROLL"`)

* `CUSTOM` (value: `"CUSTOM"`)




<a name="OrderStrategyTypeEnum"></a>
## Enum: OrderStrategyTypeEnum


* `SINGLE` (value: `"SINGLE"`)

* `OCO` (value: `"OCO"`)

* `TRIGGER` (value: `"TRIGGER"`)




<a name="PriceLinkBasisEnum"></a>
## Enum: PriceLinkBasisEnum


* `MANUAL` (value: `"MANUAL"`)

* `BASE` (value: `"BASE"`)

* `TRIGGER` (value: `"TRIGGER"`)

* `LAST` (value: `"LAST"`)

* `BID` (value: `"BID"`)

* `ASK` (value: `"ASK"`)

* `ASK_BID` (value: `"ASK_BID"`)

* `MARK` (value: `"MARK"`)

* `AVERAGE` (value: `"AVERAGE"`)




<a name="PriceLinkTypeEnum"></a>
## Enum: PriceLinkTypeEnum


* `VALUE` (value: `"VALUE"`)

* `PERCENT` (value: `"PERCENT"`)

* `TICK` (value: `"TICK"`)




<a name="RequestedDestinationEnum"></a>
## Enum: RequestedDestinationEnum


* `INET` (value: `"INET"`)

* `ECN_ARCA` (value: `"ECN_ARCA"`)

* `CBOE` (value: `"CBOE"`)

* `AMEX` (value: `"AMEX"`)

* `PHLX` (value: `"PHLX"`)

* `ISE` (value: `"ISE"`)

* `BOX` (value: `"BOX"`)

* `NYSE` (value: `"NYSE"`)

* `NASDAQ` (value: `"NASDAQ"`)

* `BATS` (value: `"BATS"`)

* `C2` (value: `"C2"`)

* `AUTO` (value: `"AUTO"`)




<a name="SpecialInstructionEnum"></a>
## Enum: SpecialInstructionEnum


* `ALL_OR_NONE` (value: `"ALL_OR_NONE"`)

* `DO_NOT_REDUCE` (value: `"DO_NOT_REDUCE"`)

* `ALL_OR_NONE_DO_NOT_REDUCE` (value: `"ALL_OR_NONE_DO_NOT_REDUCE"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `AWAITING_PARENT_ORDER` (value: `"AWAITING_PARENT_ORDER"`)

* `AWAITING_CONDITION` (value: `"AWAITING_CONDITION"`)

* `AWAITING_MANUAL_REVIEW` (value: `"AWAITING_MANUAL_REVIEW"`)

* `ACCEPTED` (value: `"ACCEPTED"`)

* `AWAITING_UR_OUT` (value: `"AWAITING_UR_OUT"`)

* `PENDING_ACTIVATION` (value: `"PENDING_ACTIVATION"`)

* `QUEUED` (value: `"QUEUED"`)

* `WORKING` (value: `"WORKING"`)

* `REJECTED` (value: `"REJECTED"`)

* `PENDING_CANCEL` (value: `"PENDING_CANCEL"`)

* `CANCELED` (value: `"CANCELED"`)

* `PENDING_REPLACE` (value: `"PENDING_REPLACE"`)

* `REPLACED` (value: `"REPLACED"`)

* `FILLED` (value: `"FILLED"`)

* `EXPIRED` (value: `"EXPIRED"`)




<a name="StopPriceLinkBasisEnum"></a>
## Enum: StopPriceLinkBasisEnum


* `MANUAL` (value: `"MANUAL"`)

* `BASE` (value: `"BASE"`)

* `TRIGGER` (value: `"TRIGGER"`)

* `LAST` (value: `"LAST"`)

* `BID` (value: `"BID"`)

* `ASK` (value: `"ASK"`)

* `ASK_BID` (value: `"ASK_BID"`)

* `MARK` (value: `"MARK"`)

* `AVERAGE` (value: `"AVERAGE"`)




<a name="StopPriceLinkTypeEnum"></a>
## Enum: StopPriceLinkTypeEnum


* `VALUE` (value: `"VALUE"`)

* `PERCENT` (value: `"PERCENT"`)

* `TICK` (value: `"TICK"`)




<a name="StopTypeEnum"></a>
## Enum: StopTypeEnum


* `STANDARD` (value: `"STANDARD"`)

* `BID` (value: `"BID"`)

* `ASK` (value: `"ASK"`)

* `LAST` (value: `"LAST"`)

* `MARK` (value: `"MARK"`)




<a name="TaxLotMethodEnum"></a>
## Enum: TaxLotMethodEnum


* `FIFO` (value: `"FIFO"`)

* `LIFO` (value: `"LIFO"`)

* `HIGH_COST` (value: `"HIGH_COST"`)

* `LOW_COST` (value: `"LOW_COST"`)

* `AVERAGE_COST` (value: `"AVERAGE_COST"`)

* `SPECIFIC_LOT` (value: `"SPECIFIC_LOT"`)




