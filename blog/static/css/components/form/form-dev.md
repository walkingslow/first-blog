

##ge-form

**Element HTML:**
```html
<!-- Primary HTML -->
<form class="ge-form">[internal HTLM]</form>
```

**Internal HTML:**
```html
<!-- Parent HTML -->
<form class="ge-form">
  <div class="ge-form__item">
    <label class="ge-label">This is a label</label>
    <div class="ge-form__controls">
        <input type="text" class="ge-text-input" placeholder="Please enter something">
        <div class="ge-label--helper">This is some helper text</div>
        <div class="ge-label--error">This is some error helper text</div>
    </div>
  </div>
</form>
```

**Parent HTML:**
```html
<!-- Parent HTML -->
<div style="position:relative">
  <form class="ge-form">[internal HTLM]</form>
</div>
```

### Properties

| Name | Values | Class Names | Inherits | 
| -------- | ----------- | --------- | ---------- |
| spacing | standard (default)<br /> dense | `.-spacing--standard`<br /> `.-spacing--dense` | * |
| label-align | horizontal<br /> vertical (default) | `.-label-align--horizontal`<br /> `.-label-align--vertical` | none
