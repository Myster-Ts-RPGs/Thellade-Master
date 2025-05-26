---
tags:
  - "#Year"
calendarlink: https://app.fantasy-calendar.com/calendars/eef4bc8ce5816a8ef752d35b7e4cfd4d
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
>> **Era** | `INPUT[inlineListSuggester(optionQuery(#Era AND !"z_Templates"), useLinks(partial)):era]` |
>> **Calendar Link** |  `INPUT[textArea:calendarlink]` |

> [!infobox]
> #### Year Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}]` |
> **Era** | `VIEW[{era}][link]` |
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
WHERE !econtains(tags,"#Month") AND !econtains(tags,"#Location") AND !econtains(tags,"#Character")
SORT file.name ASC

## Overview

> [!kirk|info] Prompt (Remove me)
Provide a summary of the year, including its position within the larger era and any notable events or developments. Highlight key occurrences in politics, warfare, culture, technology, or magic that took place during this year. Mention significant figures who rose to prominence or had a major impact during this time. Consider any seasonal changes, festivals, or annual traditions that characterize this year and how they might affect the campaign setting.

> [!metadata|event]- All Significant Events This Year
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(startdate, ", ") AS "Start Date", eventcategory AS "Category", join(location, ", ") AS Location
> FROM "01 Campaign"
> WHERE econtains(yearofoccurrence, this.file.link) AND econtains(tags, "#Event") AND econtains(eventtype, "Significant")
> SORT startdateshort ASC
> ```

> [!metadata|event]- All Recurring Events This Year
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(startdate, ", ") AS "Start Date", eventcategory AS "Category", join(location, ", ") AS Location
> FROM "01 Campaign"
> WHERE econtains(yearofoccurrence, this.file.link) AND econtains(tags, "#Event") AND !econtains(eventtype, "Significant")
> SORT startdateshort ASC
> ```
