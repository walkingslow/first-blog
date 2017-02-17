

## ge-tabs

**Element HTML:**
```html
<!-- Primary HTML -->
<div class="ge-tabs">[internal HTML]</div>
```


**Internal HTML**
```html
<!-- .ge-tabs .ge-tab__item  -->
<div class="ge-tabs">
  <div class="ge-tab__item">Item 1</div>
  <div class="ge-tab__item">Item 2</div>
</div>

<!-- .ge-tabs > ui > li > a -->
<div class="ge-tabs">
  <ul>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

<!-- .ge-tabs a -->
<div class="ge-tabs">
  <a>Item 1</a>
  <a>Item 2</a>
</div>


<!-- With icons -->
<div class="ge-tabs">
  <div class="ge-tab__item"><i class="fa fa-bar-chart-o"></i>Item 1</div>
  <div class="ge-tab__item"><i class="fa fa-anchor"></i>Item 2</div>
</div>
```

**css child selectors:**
```css
/* horizontal */
.ge-tabs > ul > li,
.ge-tabs a,
.ge-tabs .ge-tab__item 

/* vertical */
.ge-tabs.-has--ul > ul > li,
.ge-tabs a,
.ge-tabs .ge-tab__item,

/* vertical with icons */
.ge-tabs.-has--ul > ul > li > i .ge-tab__label,
.ge-tabs a > i .ge-tab__label,
.ge-tabs .ge-tab__item > i .ge-tab__label i
```

### Properties

| Name | Values | Class Names | Inherits | 
| -------- | ----------- | --------- | ---------- |
| Theme | Light (default)<br /> Dark | `.-theme--light`<br /> `.-theme--dark` | parent theme | 
| spacing | standard (default)<br /> dense | `.-spacing--standard`<br /> `.-spacing--dense` | n/a |
| Align | horizontal (default)<br /> vertical | `.-align--horizontal`<br /> `.-align--vertical` | n/a |
| height (tech comp only) | [number] between 2.5rem and 4rem | n/a | n/a | 


### Properties
**Tab Items**

| Name | Class Name | Default | Inherits |
| -------- | ---------- | ----------- | --------- |
| -is--active | `.-is--active` | false | N/A | 
| -is-disabled | `.-is--disabled` | false | N/A |
