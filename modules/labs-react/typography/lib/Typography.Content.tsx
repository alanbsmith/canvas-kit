import React from 'react';

import {colors, space} from '@workday/canvas-kit-react/tokens';
import {createComponent, styled, StyledType, useModelContext} from '@workday/canvas-kit-react/common';

import {TypographyModelContext} from './Typography';
import { TypographyModel } from './useTypographyModel';

export interface TypographyContentProps {
  model?: TypographyModel;
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: colors.frenchVanilla600,
  padding: space.s,
  border: `1px solid ${colors.licorice600}`,
});

export const TypographyContent = createComponent('div')({
  displayName: 'Typography.Content',
  Component: ({children, model, ...elemProps}: TypographyContentProps, ref, Element) => {
    const {state} = useModelContext(TypographyModelContext, model);

    return state.open ? (
      <Container as={Element} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});
