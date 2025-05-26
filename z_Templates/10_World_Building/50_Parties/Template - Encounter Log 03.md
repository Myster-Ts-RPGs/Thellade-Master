---
tags:
  - "#TODO"
  - "#Encounter"
  - "#Group3"
whichparty: "[[Campaign Group 3]]"
---
> [!infobox]+
> # `=this.group + " - Session " + this.sessionnumber + " - Summary"`
>  |
> ---|---|
> **Session Number** | `INPUT[text:sessionnumber]`|
> **Title**|`INPUT[textArea:title]`|
> **Encounter Type(s)**|`INPUT[EncounterType][inlineListSuggester:encountertype]` |
> **Allies Planned** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):allies]` |
> **Enemies Planned** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):enemies]` |
> **Factions Planned**|`INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):factions]` |
> **Locations Planned** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates")):locations]` |

# Encounter  Overview
`=this.whichparty + " - Session " + this.sessionnumber + " - " + this.title`

## Encounter-Specific Info
> [!info]- **Combat Encounter Details**
> - Primary Enemies:
> - Enemy Factions:
> - XP Budget:
> - Battlefield Description:
> - Boss Mechanics:
> - Environmental Hazards:
> - Objectives:
> - Special Rewards:

> [!info]- **Social Encounter Details**
> - Important NPCs:
> - Factions Involved:
> - Goals/Objectives:
> - Negotiation Leverage:
> - Risks for Failure:
> - Special Rewards:

> [!info]- **Skill Challenge Details**
> - Skills Required:
> - Success Threshold:
> - Degrees of Failure:
> - Time Constraints:
> - Consequences for Success/Failure:

> [!info]- **Chase Encounter Details**
> - Pursuer(s):
> - Quarry:
> - Obstacles:
> - Distance to Cover:
> - Speed Mechanics:
> - Escape Routes:

> [!info]- **Exploration/Environmental Hazard Encounter Details**
> - Terrain Description:
> - Natural Hazards:
> - Skill Checks Needed:
> - Environmental Effects (Weather, Light, Gravity):
> - Special Rewards or Discoveries:

> [!info]- **Ritual/Arcane Encounter Details**
> - Ritual Purpose:
> - Participants:
> - Time Limit:
> - Magical Effects:
> - Disruption Methods:
> - Consequences of Ritual Completion/Failure:

> [!info]- **Stealth/Infiltration Encounter Details**
> - Target Location:
> - Guard Presence:
> - Alarms or Traps:
> - Skills Required:
> - Objectives (Steal, Rescue, Sabotage):
> - Escape Plans:

> [!info]- **Investigation/Mystery Encounter Details**
> - Scene Description:
> - Clues Available:
> - Skill Checks for Discoveries:
> - False Leads or Red Herrings:
> - Final Objective (Find Killer, Recover Item, Solve Puzzle):

> [!info]- **Siege/Mass Battle Encounter Details**
> - Defenders:
> - Attackers:
> - Siege Equipment:
> - Battlefield Terrain:
> - Victory Conditions:
> - Reinforcements and Timing:

> [!info]- **Downtime Event Encounter Details**
> - Activity Type (Crafting, Training, Research):
> - Time Commitment:
> - Resources Consumed:
> - Skill Checks Needed:
> - Outcome/Progress:

> [!info]- **Escort/Protection Encounter Details**
> - VIP or Item to Protect:
> - Route Details:
> - Anticipated Threats:
> - Failsafe Plans:
> - Complications Along the Route:

> [!info]- **Espionage/Political Maneuvering Encounter Details**
> - Target Organization:
> - Infiltration Goals:
> - Cover Story:
> - Risks if Exposed:
> - Blackmail Material/Secrets:

> [!info]- **Survival Encounter Details**
> - Biome/Environment Type:
> - Resource Scarcity (Food, Water, Shelter):
> - Endurance Skill Checks:
> - Natural Threats (Predators, Storms, Quicksand):
> - Navigation Challenges:

> [!info]- **Other Encounter Details**
> - Encounter Type:
> - Situation Overview:
> - Objectives:
> - Special Rules/Mechanics:
> - Rewards or Consequences:




## Quick References

> [!column|2 no-title]
>> [!metadata|characters] Allies
>> `VIEW[{allies}][link]`
>
>> [!metadata|characters] Enemies
>> `VIEW[{enemies}][link]`
>
>> [!metadata|organizations] Factions
>> `VIEW[{factions}][link]`
>
>> [!metadata|location] Locations
>> `VIEW[{locations}][link]`
