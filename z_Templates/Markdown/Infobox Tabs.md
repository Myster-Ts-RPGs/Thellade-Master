---
art: z_Assets/Misc/PlaceholderImage.png
art1: z_Assets/Parties/MotleyFew.png
banner: off
---

```meta-bind-js-view 
{art} as art {banner} as banner
--- 
if (context.bound.art !== "z_Assets/Misc/PlaceholderImage.png" && context.bound.banner === "on")  { 
    const str = ` ![[${context.bound.art}|banner-fade]]` ;
    return engine.markdown.create(str); 
} else { return ""; }
```

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art1]` |
>> **Banner** |`INPUT[toggle(onValue(on), offValue(off)):banner]` |
>

> [!infobox]+
> # `=this.file.name`
>```meta-bind
>INPUT[select(
>option(1, Tab 1),
>option(2, Tab 2),
>class(tabbed)
>)]
>```
>
>> [!tabbed-box]
>> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
>>
>> `VIEW[!\[\[{art1}\]\]][text(renderMarkdown)]`
>
> ###### Bio
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |