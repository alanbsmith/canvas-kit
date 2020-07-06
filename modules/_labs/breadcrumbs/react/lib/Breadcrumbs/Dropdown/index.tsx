import React, {useContext} from 'react';
import {BreadcrumbsContext} from '../Nav';

interface DropdownProps {}

export const Dropdown = (props: DropdownProps) => {
  const {dropdownItems} = useContext(BreadcrumbsContext);
  console.log(dropdownItems);
  return <div {...props}>hiya</div>;
};
