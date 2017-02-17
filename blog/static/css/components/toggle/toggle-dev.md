

## ge-toggle

**Element HTML:**
```html
<!-- Primary HTML -->
<label class="ge-toggle">[internal HTLM]</label>

```

**Internal HTML:**
```html
<!-- Internal HTML -->
<label class="ge-toggle">
  <input type="checkbox">
  <div class="ge-toggle__slider"></div>
</label>
```

### Properties

| Name | Values | Class Names | Inherits | 
| -------- | ----------- | --------- | ---------- |
| Theme| Light (default)<br /> Dark | `.-theme--light`<br /> `.-theme--dark` |parent theme |
| color | mono (default)<br /> blue | `.-color--mono`<br /> `.-color--blue`<br /> | N/A |

### States

| Name | Class Name | Default | Inherits |
| -------- | ---------- | ----------- | --------- |
| disabled | `:disabled` | false | n/a |
| checked | `:checked` | false | n/a |
*note: these are input attributes, not css classes*
