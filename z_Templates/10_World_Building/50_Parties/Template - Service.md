---
tags:
  - "#Service"
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>> **Provider** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):provider]` |
>> **Customer** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):customer]` |
>> **Request Date** |  `INPUT[textArea:requestdate]`
>> **Estimated Delivery Date** |  `INPUT[textArea:deliverydate]`
>> **Cost** |  `INPUT[textArea:servicecost]`
>> **Status** | `INPUT[Status][:status]` |

> [!infobox]
> #### Service Info
>  |
> ---|---|
> **Provider** | `VIEW[{provider}][link]` |
> **Customer** | `VIEW[{customer}][link]` |
> **Request Date** | `VIEW[{requestdate}][link]` |
> **Estimated Delivery** | `VIEW[{deliverydate}][link]` |
> **Cost** | `VIEW[{servicecost}]` |
> **Status** | `VIEW[{status}]` |




# `=this.file.name`



## Notes


