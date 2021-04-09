import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {
  colors,
  depth as depthValues,
  type,
  space,
  borderRadius,
  CanvasDepthValue,
  CanvasSpaceValues,
} from '@workday/canvas-kit-react/tokens';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The heading of the Card.
   */
  heading?: React.ReactNode;

  /**
   * The id of the Card heading. Tie this to an `aria-labelledby` for accessibility.
   */
  headingId?: string;

  /**
   * The padding of the Card. Imported from `@workday/canvas-kit-react/tokens`.
   * @default space.l
   */
  padding?: CanvasSpaceValues;

  /**
   * The depth of the Card. Imported from `@workday/canvas-kit-react/tokens`.
   * @default depth[2]
   */
  depth?: CanvasDepthValue;

  /**
   * The width of the Card.
   */
  width?: number | string;

  /**
   * The height of the Card.
   */
  height?: number | string;
}

const Box = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'width' && prop !== 'height',
})<CardProps>(
  {
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${colors.soap500}`,
    borderRadius: borderRadius.l,
    boxSizing: 'border-box',
  },
  ({depth}) => depth,
  ({padding}) => ({padding}),
  ({width}) => width && {width},
  ({height}) => height && {height}
);

const Header = styled('h3')(type.h3, {
  marginBottom: space.m,
  marginTop: 0,
});

const Body = styled('div')(type.body);

export default class Card extends React.Component<CardProps> {
  public render() {
    const {
      depth = depthValues[2],
      padding = space.l,
      heading,
      headingId,
      ...elemProps
    } = this.props;

    return (
      <Box {...elemProps} depth={depth} padding={padding}>
        {heading && <Header id={headingId}>{heading}</Header>}
        <Body>{this.props.children}</Body>
      </Box>
    );
  }
}
