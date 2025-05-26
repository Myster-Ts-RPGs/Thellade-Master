---
tags:
  - Status/Blank
  - Location
  - Location/Plane
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

> [!infobox|wsmall]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!metadata|map]- Map
> ```leaflet
> id: TBD
> image: [[PlaceholderImage.png]]
> lock: true
> recenter: true
> noScrollZoom: false
> ### Use this [LINK](https://docs.google.com/spreadsheets/d/1jKQxktYSUFcCJhEkAAPr1wMVBTqUdpEfA5XveUXI17I/edit?usp=sharing) to work out your map's bounds.
> ### bounds: [[0,0], [0, 0]] (Remove the ### and these parentheses with the content within from this line to enable the bounds)
> height: 600px
> width: 640px
> lat: 0
> long: 0
> minZoom: 1
> maxZoom: 6.5
> defaultZoom: 1
> zoomDelta: 0.5
> unit: miles
> scale: 1
> darkMode: false
> ```

> [!metadata|galaxies]- Galaxies
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Location/Galaxy")
> SORT file.name ASC
> ```

> [!metadata|starsystems]- StarSystems
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Location/StarSystem")
> SORT file.name ASC
> ```

> [!metadata|planet]- Planets
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Location/Planet")
> SORT file.name ASC
> ```

> [!metadata|geography]- Regions
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Location/Region")
> SORT file.name ASC
> ```

> [!metadata|county]- Subregions
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Location/Subregion")
> SORT file.name ASC
> ```

> [!metadata|reaches]- Reaches
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Location/Reach")
> SORT file.name ASC
> ```

> [!metadata|settlements]- Settlements
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(settlementtype, ", ") AS Type, join(defence, ", ") AS Defences, join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Location/Settlement")
> SORT file.name ASC
> ```

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)", join(link(dominion), ", ") AS "Dominion"
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Location/POI")
> SORT tags DESC, poitype ASC, file.name ASC
> ```

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Organization")
> SORT organizationtype ASC, file.name ASC
> ```

> [!metadata|entities]- Entities
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(tags, ", ") AS Tags, join(link(parentlocation), ", ") AS "Location"
> FROM "01 Campaign"
> WHERE contains(parentplane, this.file.link) AND contains(tags, "Entity")
> SORT file.name ASC
> ```


## Overview 



## Current Events



## History



## Notes

