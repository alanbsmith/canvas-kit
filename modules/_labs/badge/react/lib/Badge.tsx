import * as React from 'react';
import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';
import {borderRadius, colors, fontFamily} from '@workday/canvas-kit-react-core';

export type BadgeVariant = 'default' | 'inverse';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  'aria-label': string;
  count?: number;
  variant?: BadgeVariant;
}

const variants = {
  default: {
    background: colors.cinnamon500,
    color: colors.frenchVanilla100,
    textShadow: '0 0 1px rgba(0,0,0, 0.35)',
  },
  inverse: {
    background: colors.frenchVanilla100,
    boxShadow: '0 1px 2px rgba(0,0,0, 0.25)',
    color: colors.blueberry400,
  },
};

const grow = keyframes`
  from {
    transform: scale(0.85);
  }

  to {
    transform: scale(1.0);
  }
`;

const Container = styled('span')<BadgeProps>(
  {
    alignItems: 'center',
    animation: `${grow} 0.2s ease`,
    borderRadius: borderRadius.circle,
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontFamily,
    fontSize: '11px',
    fontWeight: 700,
    height: '20px',
    justifyContent: 'center',
    minWidth: '20px',
    padding: '0 6.5px',
  },
  ({variant = 'default'}) => ({
    ...variants[variant],
  })
);

const Badge = (props: BadgeProps) => {
  const {count = 0, ...elemProps} = props;

  const formattedCount = count < 1000 ? count : '999+';
  return (
    <Container {...elemProps} role="status" aria-live="polite">
      {formattedCount}
    </Container>
  );
};

export default Badge;
