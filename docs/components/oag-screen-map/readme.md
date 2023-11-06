# oag-screen-map



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description | Type                                            | Default        |
| ------------------- | --------------------- | ----------- | ----------------------------------------------- | -------------- |
| `backgroundLayer`   | `background-layer`    |             | `"grau" \| "orthophoto" \| "osm" \| "standard"` | `'orthophoto'` |
| `disableTouchClass` | `disable-touch-class` |             | `boolean`                                       | `true`         |
| `visible`           | `visible`             |             | `"init" \| boolean`                             | `'init'`       |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `readyMap` |             | `CustomEvent<Map>` |


## Dependencies

### Depends on

- [oag-menu-item](../oag-menu-item)

### Graph
```mermaid
graph TD;
  oag-screen-map --> oag-menu-item
  style oag-screen-map fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
