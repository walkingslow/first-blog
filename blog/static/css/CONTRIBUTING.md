## Prerequisites
1. [Node](https://nodejs.org/en/)
1. [Editor Config](http://editorconfig.org)

## Getting Started

From command line in the project directory run the following commands.

1. `npm update`
2. `npm start`

## CSS/HTML Guidelines
1. CSS Style Guide Based off of [Stylelint Config Standard](https://github.com/stylelint/stylelint-config-standard)
1. CSS Class Naming using [BEM](http://getbem.com/introduction/)
1. CSS Specificity file placement based on [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)
1. Using [CSSNext](http://jade-lang.com/) variables and other upcoming css features instead of SASS or LESS
1. Using [Editor Config](http://editorconfig.org) to define whitespace (2 spaces instead of tab)

## BUILD
1. Version Guidelines following [semver](http://semver.org/)
1. Build tasks written in [gulpjs](http://gulpjs.com/)
1. CSS Built in [PostCSS](http://postcss.org/). Plugins Used: [CSSNext](http://jade-lang.com/), [PostCSS Import](https://github.com/postcss/postcss-import), [StlyLint](http://stylelint.io/)
1. Tests Built with [PUG templates](http://jade-lang.com/)

## Testing
1. Browsers with more than 1% worldwide usage based on [Can I Use Worldwide Usage Data](http://caniuse.com/usage-table)
2. Screen sizes (TDB)
3. Native mobile wrappers (TBD)

## Contributing
1. Issue Tracking here on Github
1. Submissions must follow [Github Flow](https://guides.github.com/introduction/flow/)

## CSS Next features being used

| Plugin | Description |
| ------ | ----------- |
| postcss-import | [Inline @import](https://github.com/postcss/postcss-import) |
| autoprefixer | [auto add vendor prefixes](http://cssnext.io/features/#automatic-vendor-prefixes) |
| variables | [var(--varName) style custom properties](http://cssnext.io/features/#custom-properties-var) |
| @apply | [@apply --varName style custom property sets](http://cssnext.io/features/#custom-properties-set-apply) |
| custom media queries | [media queries as variables](http://cssnext.io/features/#custom-media-queries) |
| AVOID NESTING | |
