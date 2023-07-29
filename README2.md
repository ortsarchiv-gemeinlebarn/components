# OAG Components Library

| Name | Tag | Attribute |
|--|--| -- |
| Hero | `oag-hero` | `title`, `subtitle`, `image` |
| Single Image | `oag-single-image` | |

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
<oag-hero id="hero">
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
