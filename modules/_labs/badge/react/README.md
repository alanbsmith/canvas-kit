# Canvas Kit React Badge

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

provides a quantity-based summary with dynamic values

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-badge
```

## Usage

```tsx
import * as React from 'react';
import Badge from '@workday/canvas-kit-labs-react-badge';

// default Badge
<Badge count={3} aria-label="3 unread notifications" />

// inverse Badge variant
<Badge variant="inverse" count={3} aria-label="3 unread notifications" />
```

## Static Properties

| Name      | Value    |
| --------- | -------- |
| aria-live | 'polite' |
| role      | 'status' |

## Component Props

### Required

| Name       | Type   | Example                  |
| ---------- | ------ | ------------------------ |
| aria-label | string | '3 unread notifications' |

### Optional

| Name    | Type                 | Default Value |
| ------- | -------------------- | ------------- |
| variant | 'default', 'inverse' | 'default'     |
| count   | number               | 0             |
