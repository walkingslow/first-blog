
## ge-text-area

**Element HTML:**
```html
<!-- Primary HTML -->
<textarea class="ge-text-area"></textarea>

<!-- Additional HTML -->
<textarea placeholder="Hint" rows="5" class="ge-text-area"></textarea>
```

**Parent HTML:**
```html
<!-- Parent HTML -->
<div style="position:relative">
  <textarea class="ge-text-area"></textarea>
</div>
```

### Properties

| Name | Values | Class Names | Inherits | 
| -------- | ----------- | --------- | ---------- |
| Theme | Light (default)<br /> Dark | `.-theme--light`<br /> `.-theme--dark` | parent theme |
| helper-visible | always (default) <br /> on-focus | `.-helper-visible--always`<br /> `.-helper-visible--on-focus` | * |
| label-align | horizontal<br /> vertical (default) | `.-label-align--horizontal`<br /> `.-label-align--vertical` | * |
| spacing | standard (default)<br /> dense | `.-spacing--standard`<br /> `.-spacing--dense` | * |
| label (tech comp only) | <text> | n/a | n/a | 
| helper-label (tech comp only) | <text> | n/a | n/a | 
| error-label (tech comp only) | <text> | n/a | n/a | 
| hint-label (tech comp only) | <text> | n/a | n/a | 
| placeholder (tech comp only) | <text> | n/a | n/a | 

### States

| Name | Class Name | Default | Inherits |
| -------- | ----------- | ----------- | --------- |
| -has--error | `.-has--error` | false | n/a |
| :focus | `:focus` | false | n/a |
| :disabled | `:disabled` | false | n/a |

