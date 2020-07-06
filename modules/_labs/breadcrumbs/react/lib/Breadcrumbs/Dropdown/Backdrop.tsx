/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';

interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  setActiveOption?: () => void;
  setOpenState?: () => void;
}

const backdropStyles = css({
  left: 0,
  top: 0,
  position: `fixed`,
  width: `100%`,
  height: `100%`,
  zIndex: 10000,
});

export const Backdrop = (props: BackdropProps) => {
  const handleMouseDown = () => {};

  return <div css={backdropStyles} {...props} />;
};
/*

        <BackDrop
          data-testid={`backdrop`}
          onMouseDown={() => {
            props.setActiveOption(dummyOption);
            props.setOpenState(false);
          }}
          onScroll={e => {
            e.preventDefault();
          }}
        />

          const BackDrop = styled.div({
            left: 0,
            top: 0,
            position: `fixed`,
            width: `100%`,
            height: `100%`,
            zIndex: 10000,
          });

*/
