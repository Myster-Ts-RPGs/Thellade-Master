---
tags:
  - "#Character"
  - "#Deity"
  - "#TODO"
art: 90 Assets/Images/Misc/PlaceholderImage.png
sanctification: []
allies: []
enemies: []
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Bio
>> #### Bio
>>  |
>> ---|---|
>> **Pronounced** |  `INPUT[textArea:pronounced]` |
>> **Aliases** | `INPUT[list:aliases]` |
>> **Sanctification** | `INPUT[Sanctification][inlineListSuggester:sanctification]`
>> **Attributes** | `INPUT[Attributes][inlineListSuggester:attributes]` |
>> **Skills** | `INPUT[Skills][inlineListSuggester:skills]` |
>> **Favored Weapon** | `INPUT[textArea: favored_weapon]`
>> **Alignment** | `INPUT[Alignment][:alignment]` |
>
>> [!metadata|metadataoption]- Spellcasting
>> #### Spellcasting Info
>>  |
>>---|---|
>> **Primary Domains** | `INPUT[Domains][inlineListSuggester:primarydomains]` |
>> **Secondary Domains** | `INPUT[Domains][inlineListSuggester:secondarydomains]` |
>> **Divine Font** | `INPUT[Font][inlineListSuggester:font]` |
>
>> [!metadata|metadataoption]- Deity Info
>> #### Deity Info
>>  |
>>---|---|
>> **Power** | `INPUT[DeityPower][:deitypower]` |
>> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Owned Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):ownedlocation]` |
>> **Current Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Condition** | `INPUT[Condition][:condition]` |
>
>> [!metadata|metadataoption]- Relations
>> #### Relations
>>  |
>> ---|---|
> **Allies** | `INPUT[inlineListSuggester(optionQuery(#Deity AND !"z_Templates"),optionQuery(#Demigod AND !"z_Templates"),optionQuery(#LegendaryBeing AND !"z_Templates"), useLinks(partial)):allies]` |
> **Enemies** | `INPUT[inlineListSuggester(optionQuery(#Deity AND !"z_Templates"), optionQuery(#Demigod AND !"z_Templates"), optionQuery(#LegendaryBeing AND !"z_Templates"), useLinks(partial)):enemies]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ![[PlaceholderAudio.webm]]
> ###### Bio
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Sanctification** | `VIEW[{sanctification}][text]` |
> **Attributes** | `VIEW[{attributes}][text]` |
> **Skills** | `VIEW[{skills}][text]` |
> **Favored Weapon** | `VIEW[{favored_weapon}][text]` |
> **Alignment** | `VIEW[{alignment}]` |
>
> ###### Spellcasting
>  |
> ---|---|
>  **Primary Domains** | `VIEW[{primarydomains}][text]` |
>  **Secondary Domains** | `VIEW[{secondarydomains}][text]` |
>  **Divine Font** | `VIEW[{Font}][text]` |
>  
> ###### Info
>  |
> ---|---|
> **Power** | `VIEW[{deitypower}]` |
> **Owned Locations** | `VIEW[{ownedlocation}][link]` |
> **Current Location** | `VIEW[{location}][link]` |
> **Condition** | `VIEW[{condition}]` |


# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!recite]- Introduction
> A script for the GM to read when the party arrive to this location for the first time.

> [!metadata|location]- Specific Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(location), ", ") AS "Location"
> FROM "01 Campaign"
> WHERE contains(tags, "POI") AND econtains(organization, this.file.link)
> SORT poitype ASC, file.name ASC

> [!metadata|organizations]- Related Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "01 Campaign"
> WHERE contains(tags, "Organization") AND econtains(worship, this.file.link)
> SORT organizationtype ASC, file.name ASC

> [!metadata|organizations]- Allies
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS "Aliases"
> FROM "01 Campaign"
> WHERE (contains(tags, "Deity") OR contains(tags, "Demigod") OR contains(tags, "ArchDevil") OR contains(tags, "DemonLord") OR contains(tags, "LegendaryBeing"))
> AND contains(allies, this.file.link)
> SORT file.name ASC

> [!metadata|organizations]- Enemies
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS "Aliases"
> FROM "01 Campaign"
> WHERE (contains(tags, "Deity") OR contains(tags, "Demigod") OR contains(tags, "ArchDevil") OR contains(tags, "DemonLord") OR contains(tags, "LegendaryBeing"))
> AND contains(enemies, this.file.link)
> SORT file.name ASC



## Overview

> [!summary]- Overview  
> Use this section to summarize the deity's beliefs, doctrine, and divine influence.

### Area of Concern
- 

### Edicts
- 

### Anathema
- 

### Religious Symbol
- 

### Sacred Animal
- 

### Sacred Colors
- 

### Cleric Spells
- **1st Level**:  
- **2nd Level**:  
- **3rd Level**:  

### Boons
- **Minor**:  
- **Moderate**:  
- **Major**:  

### Curses
- **Minor**:  
- **Moderate**:  
- **Major**:  


## Goals



## Relations 



## Current Events



## History



## Notes

