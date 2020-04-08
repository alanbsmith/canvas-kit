# Canvas Kit CSS Badge

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

provides a quantity-based summary with dynamic values

## Installation

```sh
yarn add @workday/canvas-kit-labs-css-badge
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-labs-css-badge/index.scss';
```

## Usage

```html
<!-- default badge -->
<span class="wdc-badge" role="status" aria-live="polite" aria-label="1 unread notification">
  1
</span>

<!-- inverse badge variant -->
<span
  class="wdc-badge--inverse"
  role="status"
  aria-live="polite"
  aria-label="999+ unread notifications"
>
  2
</span>

<!-- badges with more than 999 notifications should display '999+' -->
<span class="wdc-badge" role="status" aria-live="polite" aria-label="999+ unread notifications">
  999+
</span>
```
