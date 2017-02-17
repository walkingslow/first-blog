

## ge-menu

**Element HTML:**
```html
<!-- Primary HTML -->
<div class="ge-menu">[internal HTML]</div>
```

**Parent HTML**
```html
<!-- parent element should be relative so that the absolute positioning of the menu works correctly -->
<div style="position:relative">
  <div class="ge-menu">[internal HTML]</div>
</div>
```

**Internal HTML**
```html
<!-- .ge-menu .ge-menu__item  -->
<div class="ge-menu">
  <div class="ge-menu__item">Item 1</div>
  <div class="ge-menu__item">Item 2</div>
</div>

<!-- .ge-menu > ui > li > a -->
<div class="ge-menu">
  <ul>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

<!-- .ge-menu a -->
<div class="ge-menu">
  <a>Item 1</a>
  <a>Item 2</a>
</div>

<!-- With icons -->
<div class="ge-menu">
  <div class="ge-menu__item"><i class="fa fa-home"></i>Item 1</div>
  <div class="ge-menu__item"><i class="fa fa-bell-slash-o"></i>Item 2</div>
</div>
```

### Properties
Properties must set in the same class attribute where `.ge-menu` is set to function correctly.

| Name | Values | Class Names | Inherits | 
| ---- | ------ | ----------- | -------- |
| Theme | Light (default)<br/>Dark | `.-theme--light`<br/>`.-theme--dark` | Any parent theme |
| Position | Below (default)<br/>Above | `.-position--below`<br/>`.-position--above` | none |
| Align | Left (default)<br/>Right | `.-align--left`<br />`.-align--right` | none |
| Spacing | Standard (default)<br/>Dense | `.-spacing--standard`<br />`.-spacing--dense` | none |

### States
**ge-menu**

| Name | Values | Class Name |
| -------- | ----------- | --------- |
| Open | true | `.-is--open` |
| Open | false (default) |  |

**ge-menu__item**

State must set in the same class attribute where `.ge-menu__item` is set to function correctly.

| Name | Values | Class Name |
| -------- | ----------- | --------- |
| Disabled | true | `.-is--disabled` |
| Disabled | false (default) |  |
