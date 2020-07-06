import React from 'react';

import {Breadcrumb} from './types';
interface BreadcrumbsContext {
  dropdownItems: Breadcrumb[];
  maxWidth: number;
  setDropdownItems: React.Dispatch<React.SetStateAction<Breadcrumb[]>>;
}

export interface BreadcrumbsNavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  maxWidth: number;
}

export const BreadcrumbsContext = React.createContext({} as BreadcrumbsContext);

export const BreadcrumbsNav = ({maxWidth, children, ...props}: BreadcrumbsNavProps) => {
  const [dropdownItems, setDropdownItems] = React.useState<Breadcrumb[]>([]);
  const context = {
    dropdownItems,
    maxWidth,
    setDropdownItems,
  };

  return (
    <BreadcrumbsContext.Provider value={context}>
      <nav role="navigation" aria-label="Breadcrumb" {...props}>
        {children}
      </nav>
    </BreadcrumbsContext.Provider>
  );
};
