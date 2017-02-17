

## ge-lockup

**Element HTML:**
```html
<!-- Primary HTML -->
<div class="ge-lockup">[internal HTML]</div>
```

**Internal HTML:**
```html
<!-- Primary HTML -->
<div class="ge-lockup">
  <span class="ge-lockup__monogram"></span>
  <span class="ge-lockup__brand">Core Design by GE</span>
</div>

<!-- Use without monogram -->
<div class="ge-lockup">
  <img src="logo.png" />
  <span>Title</span>
</div>
```

**CSS Child Selectors**
```css
/* images  */
.ge-lockup  img
.ge-lockup .ge-lockup__monogram

/* text */
.ge-lockup  ge-lockup__brand
```
### Properties

**ge-lockup**

| Name | Values | Class Names | Inherits |
| -------- | ----------- | --------- | ---------- |
| align (text) | left-top <br /> left <br /> bottom <br /> right (default) <br /> right-top | `.-align--left-top`<br /> `.-align--left`<br /> `.-align--bottom`<br /> `.-align--right`<br /> `.-align--right-bottom`| none |
| size | smallest <br /> small <br /> medium (default) <br /> large <br /> largest | `.-size---smallest`<br /> `.-size---small`<br /> `.-size---medium`<br /> `.-size---large`<br />  `.-size---largest`| none |

**ge-lockup__monogram**

| Name | Values | Class Names | Inherits |
| -------- | ----------- | --------- | ---------- |
| color | blue (default) <br /> gray | `.-color--blue`<br /> `.-color--gray` | none |

### States
| Name | Default | Class Name |
| -------- | ----------- | --------- |
| img-only | false | `.-is--img-only ` |
