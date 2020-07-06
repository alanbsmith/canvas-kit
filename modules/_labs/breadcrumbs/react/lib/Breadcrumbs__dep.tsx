import * as React from 'react';
import styled from '@emotion/styled';
import {colors} from '@workday/canvas-kit-react-core';
import {chevronRightSmallIcon, folderCloseIcon} from '@workday/canvas-system-icons-web';
import {DropdownPopover, dummyOption, OptionProps} from './Breadcrumbs/DropdownPopup';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {IconButton} from '@workday/canvas-kit-react-button';

// new local components
import {BreadcrumbsList} from './Breadcrumbs/List';
import {CurrentCrumb} from './Breadcrumbs/CurrentCrumb';
import {LinkedCrumb, LinkedCrumbProps} from './Breadcrumbs/LinkedCrumb';
import {BreadcrumbsNav} from './Breadcrumbs/Nav';

export interface Breadcrumb extends LinkedCrumbProps {
  /**
   * The text displayed for the Breadcrumb.
   */
  name: string;
  /**
   * The function called when the Breadcrumb is interacted with.
   */
  onAction: () => void;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * A list of all the Breadcrumbs in order from root to current location.
   */
  breadcrumbs: Breadcrumb[];
  /**
   * The width of the breadcrumbs container, used to determine which breadcrumbs to hide.
   */
  containerWidth: number;
}

const BreadcrumbsItem = styled.li({
  display: `flex`,
  alignItems: `center`,
});

const breadcrumbOptionEquality = (breadcrumb: Breadcrumb, option: OptionProps) => {
  return breadcrumb.name === option.text;
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const [expanderOpen, setExpanderOpen] = React.useState<boolean>(false);
  const [breadcrumbsHidden, setBreadcrumbsHidden] = React.useState<number[]>([]);
  const [activeOption, setActiveOption] = React.useState(dummyOption);
  const expanderRef = React.useRef<HTMLButtonElement>(null);
  const activeOptionEl = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLOListElement>(null);
  const iconRef = React.useRef<HTMLSpanElement>(null);

  React.useLayoutEffect(() => {
    if (activeOptionEl.current) {
      activeOptionEl.current.focus();
    }
  });

  React.useLayoutEffect(() => {
    const breadcrumbsListWidth = listRef.current?.clientWidth || 0;

    const listItems = listRef.current ? listRef.current.querySelectorAll('li') : [];
    const breadcrumbWidths = Array.from(listItems).map(li => li.clientWidth);

    // If too wide for container, hide breadcrumbs starting after root
    if (breadcrumbsListWidth > props.containerWidth) {
      const hiddenItems = [...breadcrumbsHidden];
      let adjustedWidth = breadcrumbsListWidth;
      for (let i = 1; i < breadcrumbWidths.length - 1; i++) {
        hiddenItems.push(i);
        adjustedWidth = adjustedWidth - breadcrumbWidths[i];
        if (adjustedWidth <= props.containerWidth) {
          break;
        }
      }
      return setBreadcrumbsHidden(hiddenItems);
    }
    // The container width is large enough to show all breadcrumbs
    return setBreadcrumbsHidden([]);
  }, []);

  let expanderRendered = false;

  const getHiddenDropdownOptions = () => {
    const hiddenSorted = breadcrumbsHidden.sort();
    return [
      hiddenSorted.map(crumb => {
        return {text: props.breadcrumbs[crumb].name};
      }),
    ];
  };

  const dropdownOptions = getHiddenDropdownOptions();

  const getExpanderDropdown = () => {
    return (
      <DropdownPopover
        isOpen={expanderOpen}
        buttonRef={expanderRef}
        options={dropdownOptions}
        activeOption={activeOption}
        activeOptionEl={activeOptionEl}
        setOpenState={setExpanderOpen}
        setActiveOption={setActiveOption}
        onOptionChange={option => {
          const crumb = props.breadcrumbs.find(breadcrumb =>
            breadcrumbOptionEquality(breadcrumb, option)
          );
          if (crumb) {
            crumb.onAction();
          }
        }}
        portalElement={document.body}
      />
    );
  };

  const handleExpanderKeyPress = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    setOpenState: React.Dispatch<React.SetStateAction<boolean>>,
    setActiveOption: React.Dispatch<React.SetStateAction<OptionProps>>,
    firstOption: OptionProps
  ) => {
    if (e.key === 'Enter') {
      setOpenState(true);
      setActiveOption(firstOption);
    }
  };

  const onLinkedCrumbKeyPress = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    onOptionChange: () => void
  ) => {
    if (e.key === 'Enter') {
      onOptionChange();
    }
  };

  return (
    <BreadcrumbsNav>
      <BreadcrumbsList ref={listRef}>
        {props.breadcrumbs.map(({name, onAction, ...breadcrumbProps}, index) => {
          // if the breadcrumb is visible
          if (breadcrumbsHidden.indexOf(index) === -1) {
            if (index < props.breadcrumbs.length - 1) {
              return (
                <BreadcrumbsItem key={index}>
                  <LinkedCrumb
                    onClick={onAction}
                    tabIndex={0}
                    onKeyDown={e => onLinkedCrumbKeyPress(e, onAction)}
                    {...breadcrumbProps}
                  >
                    {name}
                  </LinkedCrumb>
                  <SystemIcon
                    iconRef={iconRef}
                    icon={chevronRightSmallIcon}
                    color={colors.licorice200}
                    colorHover={colors.licorice200}
                    aria-hidden
                  />
                </BreadcrumbsItem>
              );
            } else {
              return (
                <CurrentCrumb key={index} title="Breadcrumb">
                  {name}
                </CurrentCrumb>
              );
            }
          } else if (!expanderRendered && breadcrumbsHidden.length > 0) {
            expanderRendered = true;
            return (
              <BreadcrumbsItem key={index}>
                <IconButton
                  style={{margin: '0 2px'}}
                  variant={IconButton.Variant.Plain}
                  icon={folderCloseIcon}
                  color={colors.licorice200}
                  buttonRef={expanderRef}
                  toggled={expanderOpen}
                  onClick={() => {
                    if (activeOption !== dropdownOptions[0][0]) {
                      setExpanderOpen(!expanderOpen);
                    }
                  }}
                  onKeyUp={e => {
                    handleExpanderKeyPress(
                      e,
                      setExpanderOpen,
                      setActiveOption,
                      dropdownOptions[0][0]
                    );
                  }}
                  data-testid={`more-breadcrumbs`}
                  aria-label={`more-breadcrumbs`}
                />
                {breadcrumbsHidden.indexOf(props.breadcrumbs.length - 1) === -1 && (
                  <SystemIcon
                    icon={chevronRightSmallIcon}
                    color={colors.licorice200}
                    colorHover={colors.licorice200}
                    aria-hidden
                  />
                )}
              </BreadcrumbsItem>
            );
          }
          return <div key={index}></div>;
        })}
      </BreadcrumbsList>
      {expanderOpen && getExpanderDropdown()}
    </BreadcrumbsNav>
  );
};

export default Breadcrumbs;
