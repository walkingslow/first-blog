# Core Design CSS naming conventions

**Table of contents**

* [Namespace](#namespace)
* [Patterns](#patterns)
* [Components, properties, states](#components)
* [Presets](#presets)
* [Child Components](#child-components)
* [Non-component Classes](#non-components)

<a name="namespace"></a>
## Namespace

When including Core Design CSS into a web page, no styling is down by default. You must add the `ge` class to your html root for any default page styling to take effect.
```html
<html class="ge">
```
This is in order to avoid overriding other CSS frameworks that may already in use. Teams using this same naming standard should use a unique namepace when overriding or extending Core Design `e.g. aviation_button`. All Core design classes follow the three simple rules.

| Rule | Description | Example |
| --- | --- | --- |
| Starts with `ge_` | Global CSS classes | `.ge_text--bold` |
| Starts with `ge-` | CSS components | `.ge-button` |
| Starts with `-` | Properties or states | `.ge-button -color--blue` |
> Property and State rule should only ever be used in same class attribute as a CSS component. See Patterns for all possible uses.

<a name="patterns"></a>
## Patterns

| pattern                       | usage                                                                  | sample                      |
|-------------------------------|------------------------------------------------------------------------|-----------------------------|
| ge-component                  | component with all property defaults set                               | `ge-button`                 |
| ge-component--preset          | component with alternate set of property defaults set                  | `ge-button--primary`         |
| ge-component__child-component | child component (never used without parent)                            | `ge-tabs__item`             |
| -is--state                    | state for component (only used in same class attribute, not global)    | `-is--selected`             |
| -property--value              | property for component (only used in same class attribute, not global) | `-size--large`              |
| ge_property--value            | global property (used for utility or layout classes)                   | `ge_visible--hidden`        |
| ge_property--value@screen     | Marker for styles applied to only one responsive screen size           | `ge_visible--hidden@mobile` |



<a name="components"></a>
## Components, properties, states


### Components
Follow web component naming rules
  - at least two words CSS
  - class name is same as component

An example of `.ge-button`:

```html
<!-- html/css -->
<button class="ge-button"></button>
<!-- web component -->
<ge-button></ge-button>
```
<a name="patterns"></a>
### Properties
Attributes that are Properties use only the same words. equals becomes a dash. Add leading dash. Class names are related to the component. Same class names may exist so should only ever be used with component, never stand only. Properties are optional as default property values are applied to the component class

CSS:
```css
.ge-button.-size--large
.ge-button.-color--gray
.ge-button.-style--outlined
```

Example:
```html
<!-- html/css -->
<button class="ge-button -size--large -color--gray -style--outlined"></button>
<!-- web component -->
<ge-button size="large" color="gray" style="outlined"></ge-button>
```

### States
Attributes that are states(true/false) use is/has syntax in front of the attribute name.

Example of `.ge-label.-has--error`:

```html
<!-- html/css -->
<label class="ge-label -has--error"></label>
<!-- web component -->
<ge-label error="true"></ge-label>
```


<a name="presets"></a>
## Presets
Allow grouping of certian settings for properties into a easy to use varient or theme of a component.

CSS:
```css
.ge-button--primary
<!-- shares same css as .ge-button, .ge-button.-size-large and .ge-button.-color-blue -->
```

Example:
```html
<!-- html/css -->
<button class="ge-button--primary">
<!-- web component -->
<ge-button-primary></ge-button-primary>
```


<a name="child-components"></a>
## Child Components
Always start with the full parent name follow with double underscore and then child component name. For mulitple nested child components still only prepend parent component only. Child components can have their own properties.

CSS:
`.ge-tabs > .ge-tabs__item`

Example:
```html
<!-- html/css -->
<div class="ge-tabs">
    <div class="ge-tabs__item"></div>
    <div class="ge-tabs__item -is--disabled"></div>
</div>
<!-- web component -->
<ge-tabs>
  <ge-tabs-item></ge-tabs-item>
  <ge-tabs-item disabled="true"></ge-tabs-item>
</ge-tabs>
```

### Inheritance
Its ok for a child component to react to parent properties and state CSS classes.

CSS:
`.ge-tabs.-spacing--dense > .ge-tabs__item`

Example:
```html
<!-- html/css -->
<div class="ge-tabs -spacing--dense">
    <div class="ge-tabs__item"></div>
    <div class="ge-tabs__item -is--disabled"></div>
</div>
<!-- web component -->
<ge-tabs spacing="dense">
  <ge-tabs-item></ge-tabs-item>
  <ge-tabs-item disabled="true"></ge-tabs-item>
</ge-tabs>
```


<a name="non-components"></a>
## Non-components Classes

### Global and Utility
CSS need that is not related to a component should be prefixed with "ge_"

```css
.ge_visible--hidden
.ge_text--bold
```

### Responsive/Adaptive
Use @ sign in class name to define diferent behavior based on media queries. You need to escape the @ in code `/@'

CSS:
```css
.ge_visible--hidden/@mobile
```

Example:
```html
<div class="ge_visible--hidden@mobile">
```
