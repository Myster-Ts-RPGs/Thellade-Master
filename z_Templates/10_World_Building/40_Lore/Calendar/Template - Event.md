---
tags:
  - "#Event"
  - "#TODO"
calendarlink: https://app.fantasy-calendar.com/calendars/eef4bc8ce5816a8ef752d35b7e4cfd4d
eventcategory: Secular
eventtype: Significant
enddate: DATE GOES HERE
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
>> **Category** | `INPUT[EventCategory][:eventcategory]` |
>> **Type** | `INPUT[EventType][:eventtype]` |
>> **Start Date** |  `INPUT[text:startdate]` |
>> **Start Date** |  `INPUT[text:startdateshort]` |
>> **End Date** |  `INPUT[text:enddate]` |
>> **End Date Short * |  `INPUT[text:enddateshort]` |
>> **Month of Occurrence** | `INPUT[inlineListSuggester(optionQuery(#Month AND !"z_Templates"), useLinks(partial)):monthofoccurrence]` |
>> **Year of Occurrence** | `INPUT[inlineListSuggester(optionQuery(#Year AND !"z_Templates"), useLinks(partial)):yearofoccurrence]` |
>> **Year Numeric**|`INPUT[number:yearnumeric]`|
>> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Calendar Link** |  `INPUT[textArea:calendarlink]` |

> [!infobox]
> #### Event Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}]` |
> **Category** | `VIEW[{eventcategory}]` |
> **Type** | `VIEW[{eventtype}]` |
> **Start Date** | `VIEW[{startdate}]` |
> **End Date** | `VIEW[{enddate}]` |
> **Location** | `VIEW[{location}][link]` |
> **Website** | `VIEW[\[Calendar Link\]({calendarlink})][text(renderMarkdown)]` |

# `=this.file.name`

> [!column|3 no-title]
>> [!metadata|characters] People
>> ```dataview
LIST
FROM outgoing([[]])
WHERE econtains(tags,"#Character")
SORT file.name ASC
>
>> [!metadata|location] Locations
>>  ```dataview
LIST
FROM outgoing([[]])
WHERE econtains(tags,"#Location")
SORT file.name ASC
>
>> [!metadata|misc] Misc
>>  ```dataview
LIST
FROM outgoing([[]])
WHERE !econtains(tags,"#Location") OR econtains(tags,"#Character")
SORT file.name ASC

## Overview

> [!kirk|info] Prompt (Remove me)
Provide a detailed summary of the event, including its name, date, and significance within the campaign. Describe the nature of the event, such as whether it is a festival, battle, ceremony, natural disaster, or other notable occurrence. Highlight the key participants, locations, and any important actions or outcomes associated with the event. Consider how this event impacts the broader storyline, the players, and the world they inhabit.

## Notes

