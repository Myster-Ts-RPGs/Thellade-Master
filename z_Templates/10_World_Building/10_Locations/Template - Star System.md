---
tags:
  - "#Status/Blank"
  - "#Location"
  - "#Location/StarSystem"
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **Pronounced** |  `INPUT[textArea:pronounced]` |
>> **Aliases** | `INPUT[list:aliases]` |
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Location Information
>> #### Location Information
>>  |
>> ---|---|
>> **Parent Plane** | `INPUT[inlineListSuggester(optionQuery(#Location/Plane AND !"z_Templates"), useLinks(partial)):parentplane]` |
>> **Parent Galaxy** | `INPUT[inlineListSuggester(optionQuery(#Location/Galaxy AND !"z_Templates"), useLinks(partial)):parentgalaxy]` |



> [!metadata|planet]- Planets
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentstarsystem, this.file.link) AND contains(tags, "Location/Planet")
> SORT file.name ASC
> ```

> [!metadata|geography]- Regions
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentstarsystem, this.file.link) AND contains(tags, "Location/Region")
> SORT file.name ASC
> ```

> [!metadata|county]- Subregions
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentstarsystem, this.file.link) AND contains(tags, "Location/Subregion")
> SORT file.name ASC
> ```

> [!metadata|reaches]- Reaches
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentstarsystem, this.file.link) AND contains(tags, "Location/Reach")
> SORT file.name ASC
> ```

> [!metadata|settlements]- Settlements
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(settlementtype, ", ") AS Type, join(defence, ", ") AS Defences, join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentstarsystem, this.file.link) AND contains(tags, "Location/Settlement")
> SORT file.name ASC
> ```

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)", join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentstarsystem, this.file.link) AND contains(tags, "Location/POI")
> SORT tags DESC, poitype ASC, file.name ASC
> ```

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "01 Campaign"
> WHERE contains(parentstarsystem, this.file.link) AND contains(tags, "Organization")
> SORT organizationtype ASC, file.name ASC
> ```

> [!metadata|entities]- Entities
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(tags, ", ") AS Tags, join(link(parentlocation), ", ") AS "Location"
> FROM "01 Campaign"
> WHERE contains(parentstarsystem, this.file.link) AND contains(tags, "Entity")
> SORT file.name ASC
> ```


## Overview 



## Current Events



## History



## Notes

