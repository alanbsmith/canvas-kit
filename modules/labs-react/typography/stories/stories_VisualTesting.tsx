import React from 'react';

import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';

import {Typography, useTypographyModel} from '@workday/canvas-kit-labs-react/typography';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Typography',
  component: Typography,
});

export const TypographyStates = () => {
  const model = useTypographyModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Closed',
            props: {open: false},
          },
          {
            label: 'Opened',
            props: {open: true},
          },
        ]}
      >
        {props => {
          const state = {open: props.open};

          return (
            <Typography model={{...model, state}}>
              <Typography.Target>Toggle</Typography.Target>
              <Typography.Content>Content</Typography.Content>
            </Typography>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
