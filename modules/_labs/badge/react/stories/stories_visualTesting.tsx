/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Table} from '../../../../../utils/storybook';

import Badge from '../index';
import README from '../README.md';

export default {
  title: 'Labs|Badge/React/',
  decorators: [withReadme(README)],
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const VisualTesting = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Single Digit</th>
          <th>Double Digit</th>
          <th>Triple Digit</th>
          <th>Greater Than 999</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Default</td>
          <td>
            <Badge aria-label={`${1} new notifications`} count={1} />
          </td>
          <td>
            <Badge aria-label={`${23} new notifications`} count={23} />
          </td>
          <td>
            <Badge aria-label={`${999} new notifications`} count={999} />
          </td>
          <td>
            <Badge aria-label={`${1000} new notifications`} count={1000} />
          </td>
        </tr>
        <tr>
          <td>Inverse</td>
          <td>
            <Badge variant="inverse" aria-label={`${1} new notifications`} count={1} />
          </td>
          <td>
            <Badge variant="inverse" aria-label={`${23} new notifications`} count={23} />
          </td>
          <td>
            <Badge variant="inverse" aria-label={`${999} new notifications`} count={999} />
          </td>
          <td>
            <Badge variant="inverse" aria-label={`${1000} new notifications`} count={1000} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
