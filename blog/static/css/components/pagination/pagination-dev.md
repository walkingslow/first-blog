

## ge-pagination

**Element HTML:**
```html
<!-- Primary HTML -->
<div class="ge-pagination"></div>
```

**Internal HTML**
```html
<div class="ge-pagination">
      <div class="max-rows-input">
        <input type="checkbox" class="fa fa-chevron-down ge-dropdown -spacing--dense" data-content="10" class="ge-dropdown">
          <div class="ge-menu -position--below">
              <ul>
                  <li><a href="#">10</a></li>
                  <li><a href="#">20</a></li>
                  <li><a href="#">30</a></li>
                  <li><a href="#">40</a></li>
                  <li><a href="#">50</a></li>
              </ul>
          </div>
        </input>
      </div>
      <div class="row-tracker">1 - 10 of 1000</div>
      <div style="width:2rem;" class="previous-page -is--disabled"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
      <div style="width:2rem;" class="next-page"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
</div>
```

### Properties
Properties must set in the same class attribute where `.ge-menu` is set to function correctly.

| Name | Values | Class Names | Inherits | 
| ---- | ------ | ----------- | -------- |
| Position | Below <br/>Above | `.-position--below`<br/>`.-position--above` | none |
| Spacing | Standard <br/>Dense | `.-spacing--standard`<br />`.-spacing--dense` | none |

### States

| Name | Values | Class Name |
| -------- | ----------- | --------- |
| Disabled | true | `.-is--disabled` |
| Disabled | false |  |
