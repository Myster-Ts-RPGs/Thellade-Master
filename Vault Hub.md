---
tags:
  - "#Hub"
characters: []
---


![[HubBackground.png|banner-fade]]



# <center>**Vault Hub**</center>

> [!metadata|party] Parties
>> [!cards|dataview 5] **Party**
>> ```dataview
>> TABLE WITHOUT ID
>> "<span style='display: block; text-align: center; margin-bottom: 5px;'>" + link(file.link, Title) + "</span>" AS Title,
>> embed(link(art)) AS "Art"
> FROM !"z_Templates"
>> WHERE contains(tags, "Party")
>> SORT file.name asc
>> ```
## Canon 

> [!metadata|organization]- Religions
> ```dataview
> TABLE without id file.link AS "Name", join(worship, ", ") AS "Dieties"
> FROM "01 Campaign"
> WHERE contains(tags, "Religion") 
> SORT file.name ASC


## Websites

> [!metadata|calendar]- [Calendar](https://app.fantasy-calendar.com/calendars/005887cad9d1247de41d1e873570e7cf)
> <iframe
> height = "650"
> width =  "100%"
> src = "https://app.fantasy-calendar.com/calendars/005887cad9d1247de41d1e873570e7cf?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
> </iframe>

> [!metadata|items]- [Encounter Builder](https://maxiride.github.io/pf2e-encounters/#/)
> <iframe
> background-color: white; }
> height = "650"
> width =  "100%"
> src = "https://maxiride.github.io/pf2e-encounters/#/">
> </iframe>

> [!metadata|literature]- [Demiplane](https://app.demiplane.com/nexus/pathfinder2e)
> <iframe
> background-color: white; }
> height = "650"
> width =  "100%"
> src = "https://app.demiplane.com/nexus/pathfinder2e">
> </iframe>

> [!metadata|literature]- [Archives of Nethys](https://2e.aonprd.com)
> <iframe
> background-color: white; }
> height = "650"
> width =  "100%"
> src = "https://2e.aonprd.com">
> </iframe>

> [!metadata|characters]- [D&D Name Generator](https://www.fantasynamegenerators.com/dungeons-and-dragons.php)
> <iframe
> background-color: white; }
> height = "650"
> width =  "100%"
> src = "https://www.fantasynamegenerators.com/dungeons-and-dragons.php">
> </iframe>

> [!metadata|characters]- [Pf2e Name Generator](https://www.fantasynamegenerators.com/pathfinder.php)
> <iframe
> background-color: white; }
> height = "650"
> width =  "100%"
> src = "https://www.fantasynamegenerators.com/pathfinder.php">
> </iframe>

> [!metadata|tools]- Tools
> - [City Generator](https://watabou.github.io/city-generator)
> - [Neighbourhood Generator](https://watabou.github.io/neighbourhood)
> - [Village Generator](https://watabou.github.io/village-generator)

## Ideas

> [!metadata|items]- Items
> ```dataview
> TABLE without id file.link AS "Name"
> FROM "03 Ideas/Items"
> SORT file.name ASC

> [!metadata|monster]- Monsters
> ```dataview
> TABLE without id file.link AS "Name"
> FROM "03 Ideas/Monsters"
> SORT file.name ASC

> [!metadata|jokes]- Jokes
> ```dataview
> TABLE without id file.link AS "Name"
> FROM "03 Ideas/Jokes"
> SORT file.name ASC

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name"
> FROM "03 Ideas/Locations"
> SORT file.name ASC

> [!metadata|quests]- Quests / Adventures
> ```dataview
> TABLE without id file.link AS "Name"
> FROM "03 Ideas/Quests"
> SORT file.name ASC

> [!metadata|misc]- Misc
> ```dataview
> TABLE without id file.link AS "Name"
> FROM "03 Ideas/Misc"
> SORT file.name ASC

## Random Notes

> [!metadata|misc]- No Location Set
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
> FROM "01 Campaign/03 Entities/04 NPCs" OR "01 Campaign/02 Factions" OR "01 Campaign/01 World/08 Points of Interest" OR "01 Campaign/01 World/07 Districts" OR "01 Campaign/01 World/06 Settlements" OR "01 Campaign/01 World/04 Subregion" OR "01 Campaign/01 World/03 Region" OR "01 Campaign/01 World/02 Planets" OR "01 Campaign/05 Parties/01 Characters" AND !"Campaign/Organizations/Hierarchies"
> WHERE econtains(location, nothing) AND !contains(condition, "Dead") 
> SORT tags DESC, file.name ASC

> [!cards|dataview 7]
> ```dataview
> TABLE WITHOUT ID
> "<span style='display: block; text-align: center; margin-bottom: 2px;'>" + link(file.link, Aliases) + "</span>" AS Aliases,
> embed(link(art)) AS "Art"
> FROM "01 Campaign"
> FLATTEN [ [(seed) => (seed * 1103515245 + 12345) % 2147483648]] AS random
> FLATTEN [number(dateformat(date("now"), "x"))] AS seed
> SORT random[0](seed + file.size)
> LIMIT 14

[[01 Campaign/01 World/08 Points of Interest/08 Residences/Mangagoy Islands/Mangagoy/Ambervale Estate|Ambervale Estate]]