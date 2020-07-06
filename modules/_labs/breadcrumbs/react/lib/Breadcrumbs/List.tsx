/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
// local components
import {BreadcrumbsContext} from './Nav';
import {BreadcrumbsExpander} from './Expander';
import {BreadcrumbsListItem} from './ListItem';
import {Dropdown} from './Dropdown';
// hooks
import {useActiveDropdownOption, useBuildDropdown, useExpander} from './hooks';
// types
import {Breadcrumb} from './types';

export interface BreadcrumbsListProps extends React.HTMLAttributes<HTMLUListElement> {
  expanderAriaLabel: string;
}

const breadcrumbListStyles = css({
  alignItems: 'center',
  display: 'inline-flex',
  // minHeight set to keep the nav from bouncing when the icon button appears / disappears
  minHeight: 40,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const BreadcrumbsList = ({children, expanderAriaLabel, ...props}: BreadcrumbsListProps) => {
  // context
  const context = React.useContext(BreadcrumbsContext);
  // refs
  const listRef = React.useRef<HTMLUListElement>(null);
  const expanderRef = React.useRef<HTMLButtonElement>(null);
  const activeDropdownOptionEl = React.useRef<HTMLDivElement>(null);
  // behaviors
  const [activeDropdownOption, setActiveDropdownOption] = useActiveDropdownOption(
    activeDropdownOptionEl
  );
  const {shouldShowExpander, isExpanderOpen, setIsExpanderOpen} = useExpander(
    listRef,
    context.maxWidth
  );
  const {dropdownItems, dropdownItemIndices} = useBuildDropdown(
    listRef,
    children,
    context.maxWidth
  );

  context.setDropdownItems(dropdownItems);

  const handleExpanderKeyPress = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    setOpenState: React.Dispatch<React.SetStateAction<boolean>>,
    setActiveOption: React.Dispatch<React.SetStateAction<Breadcrumb>>,
    firstOption: Breadcrumb
  ) => {
    if (e.key === 'Enter') {
      setOpenState(true);
      setActiveOption(firstOption);
    }
  };

  const childArray = React.Children.toArray(children);
  const {0: rootItem, length, [length - 1]: currentItem} = childArray;
  const crumbItems = childArray.slice(1, -1);

  return (
    <ul css={breadcrumbListStyles} role="list" ref={listRef} {...props}>
      {rootItem}
      {shouldShowExpander && (
        <BreadcrumbsListItem>
          <BreadcrumbsExpander
            aria-label={expanderAriaLabel}
            buttonRef={expanderRef}
            toggled={isExpanderOpen}
            setIsExpanderOpen={setIsExpanderOpen}
            onKeyUp={e => {
              handleExpanderKeyPress(
                e,
                setIsExpanderOpen,
                setActiveDropdownOption,
                context.dropdownItems[0]
              );
            }}
          />
        </BreadcrumbsListItem>
      )}
      {crumbItems.map((crumbItem, i) => {
        if (dropdownItemIndices.indexOf(i + 1) !== -1) {
          return;
        }
        return crumbItem;
      })}
      {currentItem}
      <Popper open={}>{isExpanderOpen && <Dropdown />}</Popper>
    </ul>
  );
};

// {isExpanderOpen && (
//   <DropdownPopover
//     isOpen={isExpanderOpen}
//     buttonRef={expanderRef}
//     options={[context.dropdownItems]}
//     activeOption={activeDropdownOption}
//     activeOptionEl={activeDropdownOptionEl}
//     setOpenState={setIsExpanderOpen}
//     setActiveOption={setActiveDropdownOption}
//     onOptionChange={opt => {
//       if (!opt.onAction) {
//         return (window.location.href = opt.link);
//       }
//       console.log(opt);
//       return opt.onAction(opt);
//     }}
//     portalElement={document.body}
//   />
// )}
