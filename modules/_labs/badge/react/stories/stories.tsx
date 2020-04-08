/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import {withKnobs, number, select} from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import Badge from '../index';
import README from '../README.md';

export default {
  title: 'Labs|Badge/React',
  decorators: [withKnobs, withReadme(README)],
};

export const Default = () => (
  <div className="story">
    <Badge
      aria-label="new unread notifications"
      count={number('Count', 1)}
      variant={select('Variant', ['default', 'inverse'], 'default')}
    />
  </div>
);

export const Inverse = () => (
  <div className="story">
    <Badge
      aria-label="new unread notifications"
      count={number('Count', 1)}
      variant={select('Variant', ['default', 'inverse'], 'inverse')}
    />
  </div>
);
