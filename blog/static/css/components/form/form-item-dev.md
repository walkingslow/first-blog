

##ge-form-item

**Element HTML:**
```html
<!-- Primary HTML -->
<div class="ge-form__item">[internal HTLM]</div>
```


**Internal HTML**
```html
<div class="ge-form__item">
  <label class="ge-label">This is a label</label>
  <div class="ge-form__controls">
    <input type="text" class="ge-text-input" placeholder="Please enter something">
    <div class="ge-label--helper">This is some helper text</div>
    <div class="ge-label--error">This is some error helper text</div>
  </div>
</div>
```

**Parent HTML:**
```html
<!-- Parent HTML -->
<div style="position:relative">
  <div class="ge-form__item">[internal HTLM]</div>
</div>
```

 
### Properties

| Name | Values | Class Names | Inherits | 
| -------- | ----------- | --------- | ---------- |
| spacing | standard (default)<br /> dense | `.-spacing--standard`<br /> `.-spacing--dense` | * |
| label-align | horizontal<br /> vertical (default) | `.-label-align--horizontal`<br /> `.-label-align--vertical` | none |

### States

| Name | Class Name | Default | Inherits |
| -------- | --------- | ----------- | --------- |
| -has--error | `.-has--error` | false | n/a |
| -is--required| `.-is--required` | false | n/a |
