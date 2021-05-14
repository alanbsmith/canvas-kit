import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';

import {TypographyModelContext} from './Typography';
import { TypographyModel } from './useTypographyModel';

export interface TypographyTargetProps {
  model?: TypographyModel;
  children: React.ReactNode;
}

const useDiscloseTarget = (
  {state, events}: TypographyModel,
  elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
) => {
  return {
    onClick(event: React.MouseEvent<HTMLElement>) {
      elemProps.onClick?.(event);

      if (state.open) {
        events.close({});
      } else {
        events.open({});
      }
    },
  };
};

export const TypographyTarget = createComponent('button')({
  displayName: 'Typography.Target',
  Component: ({children, model, ...elemProps}: TypographyTargetProps, ref, Element) => {
    const typographyModel = useModelContext(TypographyModelContext, model);

    const target = useDiscloseTarget(typographyModel, elemProps);

    return (
      <Element ref={ref} {...target}>
        {children}
      </Element>
    );
  },
});
