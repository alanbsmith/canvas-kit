import React, {Children, useEffect, useLayoutEffect} from 'react';
import {CSSObject} from '@emotion/core';

import {dummyOption, OptionProps} from './DropdownPopup';
import {BreadcrumbsListItem} from './ListItem';
import {LinkedCrumb} from './LinkedCrumb';
import {Breadcrumb} from './types';

export const useActiveDropdownOption = <E extends HTMLElement>(
  activeDropdownOptionEl: React.RefObject<E>,
  option: OptionProps = dummyOption
) => {
  const [activeDropdownOption, setActiveDropdownOption] = React.useState(option);

  useEffect(() => {
    if (activeDropdownOptionEl.current) {
      return activeDropdownOptionEl.current.focus();
    }
  }, [activeDropdownOption, activeDropdownOptionEl]);

  return [activeDropdownOption, setActiveDropdownOption];
};

export const useExpander = <E extends HTMLElement>(listEl: React.RefObject<E>, maxWidth = 0) => {
  const [isExpanderOpen, setIsExpanderOpen] = React.useState<boolean>(false);
  const [shouldShowExpander, setShouldShowExpander] = React.useState<boolean>(false);

  useLayoutEffect(() => {
    const listWidth = listEl.current?.clientWidth || 0;
    setShouldShowExpander(listWidth > maxWidth);
  }, [listEl, maxWidth]);

  return {shouldShowExpander, isExpanderOpen, setIsExpanderOpen};
};

const getBreadcrumbLink = (breadcrumb: React.ReactElement) => {
  return Children.toArray(breadcrumb.props.children).filter(child => {
    return child.type === LinkedCrumb;
  })[0];
};

const buildDropdownList = (
  list: Breadcrumb[],
  containerWidth: number,
  maxWidth: number,
  dropdownList: Breadcrumb[] = []
): Breadcrumb[] => {
  // TODO: Calculate expander width dynamically
  const EXPANDER_WIDTH = 66;
  // recurse over the breadcrumb items until the containerWidth is less than or equal to the maxWidth
  if (!list.length || containerWidth + EXPANDER_WIDTH <= maxWidth) {
    return dropdownList;
  }

  const [firstCrumb, ...restList] = list;
  const updatedDropdownList = dropdownList.concat(firstCrumb);
  const adjustedWidth = containerWidth - firstCrumb.width;
  return buildDropdownList(restList, adjustedWidth, maxWidth, updatedDropdownList);
};

export const useBuildDropdown = <E extends HTMLElement>(
  listEl: React.RefObject<E>,
  children: React.ReactNode,
  maxWidth = 0
) => {
  const [dropdownItems, setDropdownItems] = React.useState<Breadcrumb[]>([]);

  useLayoutEffect(() => {
    const listItemNodes = listEl.current ? listEl.current.querySelectorAll('li') : [];
    const containerWidth = listEl.current ? listEl.current.clientWidth : 0;
    const listItems: Breadcrumb[] = [];
    Children.forEach(children, (child: React.ReactElement, index) => {
      if (child.type !== BreadcrumbsListItem) {
        return;
      }

      const breadcrumbLink = getBreadcrumbLink(child);
      // We should make this match work better
      const listItemNode = listItemNodes[index];

      listItems.push({
        index: index,
        link: breadcrumbLink ? breadcrumbLink.props.href : '',
        text: listItemNode ? listItemNode.innerText : '',
        width: listItemNode ? listItemNode.clientWidth : 0,
        onAction: breadcrumbLink ? breadcrumbLink.props.onAction : undefined,
      } as Breadcrumb);
    });

    // don't collapse the root breadcrumb
    const collapsibleListItems = listItems.slice(1);
    const dropdownList = buildDropdownList(collapsibleListItems, containerWidth, maxWidth);
    setDropdownItems(dropdownList);
  }, [maxWidth]);

  const dropdownItemIndices = dropdownItems.map(child => child.index);
  return {dropdownItems, dropdownItemIndices};
};

export const useTruncateTooltip = (maxWidth: number | string = 350) => {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState<boolean>(false);

  const truncateStyles: CSSObject = {
    display: 'inline-block',
    maxWidth,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  const openTooltip = (event: React.MouseEvent | React.FocusEvent) => {
    const {currentTarget} = event;
    // if the target is truncated, show the tooltip
    if (currentTarget.scrollWidth > currentTarget.clientWidth) {
      setIsTooltipOpen(true);
    }
  };

  const closeTooltip = () => {
    setIsTooltipOpen(false);
  };

  return {truncateStyles, isTooltipOpen, openTooltip, closeTooltip};
};
