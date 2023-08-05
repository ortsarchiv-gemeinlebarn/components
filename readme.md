# OAG Components Library

| Name | Tag | Attribute |
|--|--| -- |
| Application Wrapper | `oag-applicaiton` |  |
| Hero | `oag-hero` | `headline`, `caption`, `background-image`, `background-overlay` |
| Content | `oag-content` |  |
| Figure | `oag-figure` | `caption`, `reference` |
| Horizontal Gallery | `oag-horizontal-gallery` | `images` |
| Reference | `oag-reference` | `reference-code`, `title` |

## Daten

```json
{
  "hero": {
    "title": "Fund der Meilensteine",
    "subtitle": ""
  }
}
```

## Components

### Hero

```html
<oag-hero
    headline="Titel"
    caption="Subtitle"
    background-image="hero.jpeg"
    background-overlay="rgba(0, 0, 0, 0.25)">
    
    <!-- Insert Content here -->

</oag-hero>
```

```js
const hero = document.getElementById('hero');
hero.data = {
  title: "",
  subtitle: ""
}
```
