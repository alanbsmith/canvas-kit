/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';
import {folderCloseIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react-core';

interface BreadcrumbsExpanderProps extends IconButtonProps {
  buttonRef: React.Ref<HTMLButtonElement>;
  setIsExpanderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggled: boolean;
}

export const BreadcrumbsExpander = ({
  buttonRef,
  setIsExpanderOpen,
  toggled,
  variant = IconButton.Variant.Plain,
  'aria-label': ariaLabel = 'More links',
  ...props
}: BreadcrumbsExpanderProps) => {
  const hasDefaultVariant = variant === IconButton.Variant.Plain;
  // gives the plain icon variant a little extra space between the chevrons
  const defaultVariantStyles = css(hasDefaultVariant ? {margin: '0 1px'} : {});

  return (
    <IconButton
      css={defaultVariantStyles}
      variant={variant}
      icon={folderCloseIcon}
      color={colors.licorice200}
      buttonRef={buttonRef}
      toggled={toggled}
      onClick={() => setIsExpanderOpen(!toggled)}
      onKeyUp={e => {
        //   handleExpanderKeyPress(e, setIsExpanderOpen, setActiveOption, context.dropdownItems[0]);
      }}
      aria-label={ariaLabel}
      // aria-haspopup="true"
      // aria-controls="menu"
      {...props}
    />
  );
};
