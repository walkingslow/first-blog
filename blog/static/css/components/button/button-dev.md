

## ge-button

**Element HTML:**
```html
<!-- Primary HTML -->
<button class="ge-button">[internal HTML]</button>

<!-- Alternate HTML -->
<a href="#" class="ge-button">[internal HTML]</a>
<button>[internal HTML]</button> <!-- only applies when ge class applied to root (<html class="ge">) -->
```

**Internal HTML**
```html
<!-- Text only -->
<button class="ge-button">Text</button>

<!-- Icon only -->
<button class="ge-button -is--icon"><i class="fa fa-home"></i></button>

<!-- Text after icon -->
<button class="ge-button"><i class="fa fa-home"></i>Text</button>

<!-- Text before icon -->
<button class="ge-button">Text<i class="fa fa-home"></i></button>
```

### Properties
Properties must set in the same class attribute where `.ge-button` is set to function correctly.

| Name | Values | Class Names | Inherits | 
| ---- | ------ | ----------- | -------- |
| Fill | Solid (default)<br/>Outline <br/> Transparent | `.-fill--solid`<br />`.-fill--outline`<br />`.-fill--transparent`<br /> | none |
| Size | Small <br/>Medium (default)<br/>Large | `.-size--small`<br />`.-size--medium`<br />`.-size--large` | none |
| Color | Blue <br/>Gray (default) | `.-color--blue`<br />`.-color--gray` | none |

### States

| Name | Default | Class Name |
| -------- | ----------- | --------- |
| Hover | false | `:hover` |
| Focus | false | `:focus` |
| Disabled | false | `:disabled` |
| Icon | false | `.-is--icon` |
