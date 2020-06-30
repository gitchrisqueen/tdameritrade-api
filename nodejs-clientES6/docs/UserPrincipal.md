# GitChrisQueen_TDA_JS.UserPrincipal

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authToken** | **String** |  | [optional] 
**userId** | **String** |  | [optional] 
**userCdDomainId** | **String** |  | [optional] 
**primaryAccountId** | **String** |  | [optional] 
**lastLoginTime** | **Date** |  | [optional] 
**tokenExpirationTime** | **Date** |  | [optional] 
**loginTime** | **Date** |  | [optional] 
**accessLevel** | **String** |  | [optional] 
**stalePassword** | **Boolean** |  | [optional] [default to false]
**streamerInfo** | [**UserPrincipalStreamerInfo**](UserPrincipalStreamerInfo.md) |  | [optional] 
**professionalStatus** | **String** |  | [optional] 
**quotes** | [**UserPrincipalQuotes**](UserPrincipalQuotes.md) |  | [optional] 
**streamerSubscriptionKeys** | [**UserPrincipalStreamerSubscriptionKeys**](UserPrincipalStreamerSubscriptionKeys.md) |  | [optional] 
**accounts** | [**[UserPrincipalAccounts]**](UserPrincipalAccounts.md) |  | [optional] 

<a name="ProfessionalStatusEnum"></a>
## Enum: ProfessionalStatusEnum

* `PROFESSIONAL` (value: `"PROFESSIONAL"`)
* `NON_PROFESSIONAL` (value: `"NON_PROFESSIONAL"`)
* `UNKNOWN_STATUS` (value: `"UNKNOWN_STATUS"`)

