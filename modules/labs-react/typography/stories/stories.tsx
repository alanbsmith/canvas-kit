/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Typography} from '@workday/canvas-kit-labs-react/typography';
import {Button} from '@workday/canvas-kit-react/button';
import README from '../README.md';

export default {
  title: 'Labs/Typography/React',
  decorators: [withReadme(README)],
  component: Typography,
};

export const Default = () => (
  <Typography>
    <Typography.Target as={Button}>Toggle</Typography.Target>
    <Typography.Content>Content</Typography.Content>
  </Typography>
);