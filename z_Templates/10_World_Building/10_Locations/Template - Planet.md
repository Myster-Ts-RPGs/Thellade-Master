---
tags:
  - "#Location"
  - "#Location/Planet"
  - "#TODO"
art: 90 Assets/Images/Misc/PlaceholderImage.png
---

```meta-bind-js-view 
{art} as art {banner} as banner
--- 
if (context.bound.art !== "90 Assets/Images/Misc/PlaceholderImage.png" && context.bound.banner === "on")  { 
    const str = ` ![[${context.bound.art}|banner-fade]]` ;
    return engine.markdown.create(str); 
} else { return ""; }
```


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
>> **Terrain** | `INPUT[Terrain][inlineListSuggester:terrain]` |
>> **Parent Plane** | `INPUT[inlineListSuggester(optionQuery(#Location/Plane AND !"z_Templates"), useLinks(partial)):parentplane]` |
>> **Parent Galaxy** | `INPUT[inlineListSuggester(optionQuery(#Location/Galaxy AND !"z_Templates"), useLinks(partial)):parentgalaxy]` |
>> **Parent StarSystem** | `INPUT[inlineListSuggester(optionQuery(#Location/StarSystem AND !"z_Templates"), useLinks(partial)):parentstarsystem]` |


> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Terrain** | `VIEW[{terrain}][text]` |
> **Star System**| `VIEW[{parentstarsystem}][link]` 
> **Galaxy**| `VIEW[{parentgalaxy}][link]` 
> **Plane** | `VIEW[{parentplane}][link]` |

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

> [!metadata|continents]- Continents
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplanet, this.file.link) AND contains(tags, "Location/Continent")
> SORT file.name ASC
> ```

> [!metadata|regions]- Regions
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplanet, this.file.link) AND contains(tags, "Location/Region")
> SORT file.name ASC
> ```

> [!metadata|subregions]- Subregions
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplanet, this.file.link) AND contains(tags, "Location/Subregion")
> SORT file.name ASC
> ```

> [!metadata|reaches]- Reaches
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplanet, this.file.link) AND contains(tags, "Location/Reach")
> SORT file.name ASC
> ```

> [!metadata|settlements]- Settlements
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplanet, this.file.link) AND contains(tags, "Location/Settlement")
> SORT file.name ASC
> ```

> [!metadata|locations]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplanet, this.file.link) AND contains(tags, "Location/POI")
> SORT file.name ASC
> ```

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplanet, this.file.link) AND contains(tags, "Organization")
> SORT file.name ASC
> ```

> [!metadata|entities]- Entities
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign"
> WHERE contains(parentplanet, this.file.link) AND contains(tags, "Entity")
> SORT file.name ASC
> ```


## Overview 



## Current Events



## History



## Notes

