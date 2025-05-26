---
tags:
  - "#SessionNote"
  - "#TODO"
  - "#Group1"
actual_allies: []
actual_enemies: []
actual_factions: []
actual_locations: []
whichparty: "[[Campaign Group 1]]"
sessionnumber: ""
title: ""
in_game_start: ""
in_game_end: ""
sessiondate: 2026-04-24
group:
  - Group 1
present: []
encounters: []
absent: []
---

> [!infobox]+
> # `=this.group + " - Session " + this.sessionnumber + " - Summary"`
> ###### Info
>  |
> ---|---|
> **Session Number** | `INPUT[text:sessionnumber]`|
> **Title** | `INPUT[textArea(class(meta-bind-full-width)):title]`|
> **Session Date** | `INPUT[datePicker:sessiondate]`|
> **In-Game Start**|`INPUT[text:in_game_start]`|
> **In-Game End** |`INPUT[text:in_game_end]`|
> **Present** | `INPUT[inlineListSuggester(optionQuery(#Player AND #Group1 AND !"z_Templates"), useLinks(partial)):present]`|
> **Absent** | `INPUT[inlineListSuggester(optionQuery(#Player AND #Group1 AND !"z_Templates"), useLinks(partial)):absent]`|
> ###### Actual Info 
>  |
> ---|---|
> **Encounter(s)**| `INPUT[inlineListSuggester(optionQuery(#Encounter AND #Group1 AND !"z_Templates"), useLinks(partial)):encounters]`
> **Allies Encountered** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):actual_allies]` |
> **Enemies Encountered** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):actual_enemies]` |
> **Factions Encountered**|`INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):actual_factions]` |
> **Locations Visited** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates")):actual_locations]` |
#  `=link(this.whichparty) + " - Session " + this.sessionnumber + " - " + this.title`

## 📋 Session Prep Checklist
### 🧭 Strong Start
- [ ] Opening scene prepared
- [ ] Immediate hook for players
- [ ] Clear problem or mystery introduced

> [!note|toggle]+ Strong Start Details
> - Opening location:
> - Immediate hook:
> - First conflict:
### 🛤️ Possible Paths
- [ ] 3–5 likely directions noted
- [ ] Player goals cross-checked
- [ ] Open-world consequences updated

> [!note|toggle]+ Possible Paths Details
> 1. 
> 2. 
> 3. 
> 4. 
> 5.

### 🧱 Key Scenes
- [ ] At least 3 prepared set-piece scenes
- [ ] Flexible transitions noted
- [ ] Adjusted for expected player choices

> [!note|toggle]+ Scenes
> 1. 
> 2. 
> 3. 
> 4. 
> 5.


### 🏰 Locations
- [ ] Key locations updated in Obsidian
- [ ] Visual aids or maps ready if needed
- [ ] Environmental details or quirks listed
- [ ] Location YAMLs linked in Session Note
### ⚔️ Encounters
- [ ] Encounters sketched out
- [ ] Social encounters outlined
- [ ] Skill challenges or chase mechanics prepped
- [ ] Encounter YAMLs linked in Session Note
### 🎲 Treasure and Rewards
- [ ] Loot ideas or magic items brainstormed
- [ ] Milestone markers ready
- [ ] Roleplay / social rewards considered

> [!note|toggle]+ Loot/Treasure
> 1. 
> 2. 
> 3. 
> 4. 
> 5.
### 🔥 Secrets and Clues
- [ ] 10 secret facts, rumors, or hooks prepared
- [ ] Connect to player backstories if possible

> [!note|toggle]+ Secrets List
> 1. 
> 2. 
> 3. 
> 4. 
> 5.

### 🧹 Cleanup Tasks
- [ ] Last session notes reviewed
- [ ] Player downtime activities processed
- [ ] World events updated (politics, factions)
### 📖 Session Structure
- [ ] Intro → Exploration → Conflict → Resolution flow sketched
- [ ] Planned session "end scenes" ready
### Quick References
> [!metadata|location] Locations
> ```dataview
> TABLE WITHOUT ID
>   locations AS "Locations",
>   file.link as "Encounter"
> FROM "01 Campaign"
> WHERE 
>   whichparty = this.whichparty
>   AND sessionnumber = this.sessionnumber
>   AND contains(tags, "#Encounter")
> SORT file.name ASC
> ```

>[!metadata|location] Encounters
> ```dataview
> TABLE WITHOUT ID
>   file.link AS "Encounter",
>   factions AS "Factions",
>   encountertype AS "Type(s)",
>   allies AS "Allies",
>   enemies AS "Enemies"
> FROM "01 Campaign"
> WHERE 
>   whichparty = this.whichparty
>   AND sessionnumber = this.sessionnumber
>   AND contains(tags, "#Encounter")
> SORT file.name ASC
> ```

## During
### Events

### Quick References

>[!metadata|encounter] Encounters
> ```dataview
> TABLE WITHOUT ID 
> 	file.link AS "Encounter",
> 	locations AS "Location",
> 	factions AS "Factions",
> 	allies AS "Allies",
> 	enemies AS "Enemies"
> FROM "01 Campaign" 
> WHERE contains(whichsession, this.file.link) AND contains(tags, "#Encounter")
> SORT file.name ASC
> ```


> [!column|2 no-title]
>> [!metadata|characters] Other Allies
>> ```dataview
>> TABLE WITHOUT ID ally AS "Allies"
>> FROM ""
>> FLATTEN actual_allies AS ally
>> WHERE file.name = this.file.name
>> SORT ally
>> ```
>
>> [!metadata|characters] Other Enemies
>> ```dataview
>> TABLE WITHOUT ID enemy AS "Enemies"
>> FROM ""
>> FLATTEN actual_enemies AS enemy
>> WHERE file.name = this.file.name
>> SORT enemy
>> ```
>
>> [!metadata|organizations] Other Factions
>> ```dataview
>> TABLE WITHOUT ID faction AS "Factions"
>> FROM ""
>> FLATTEN actual_factions AS faction
>> WHERE file.name = this.file.name
>> SORT faction
>> ```
>
>> [!metadata|location] Other Locations
>> ```dataview
>> TABLE WITHOUT ID location AS "Locations"
>> FROM ""
>> FLATTEN actual_locations AS location
>> WHERE file.name = this.file.name
>> SORT location
>> ```





### Travel & Rest



### Loot, Rewards & Purchases



## Post
### New Creations



### Detailed Notes from Transcript and VTT Log


