import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';

import {color, ColorStyleProps} from './utils/color';
import {layout, LayoutStyleProps} from './utils/layout';
import {position, PositionStyleProps} from './utils/position';
import {typography, TypographyStyleProps} from './utils/typography';

export type TypeProps = ColorStyleProps &
  LayoutStyleProps &
  PositionStyleProps &
  TypographyStyleProps & {
    children?: React.ReactNode;
  };

const omittedProps = ['display', 'color', 'size'];

const shouldForwardProp = (prop: string) => {
  return isPropValid(prop) && !omittedProps.includes(prop);
};

const StyledType = styled('span', {shouldForwardProp})<StyledType & TypeProps>(
  {
    display: 'inline-block',
  },
  color,
  layout,
  position,
  typography,
);

export const Type = createComponent('span')({
  displayName: 'Type',
  Component: ({children, level, size = 'medium', ...props}: TypeProps, ref, Element) => {
    return (
      <StyledType as={Element} ref={ref} size="medium" level={level} {...props}>
        {children}
      </StyledType>
    );
  },
});
