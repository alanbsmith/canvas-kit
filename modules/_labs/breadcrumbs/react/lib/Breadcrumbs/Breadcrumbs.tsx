import React from 'react';
// components
import {CurrentCrumb} from './CurrentCrumb';
import {LinkedCrumb, LinkedCrumbProps} from './LinkedCrumb';
import {BreadcrumbsNav as Nav} from './Nav';
import {BreadcrumbsList as List} from './List';
import {BreadcrumbsListItem as ListItem} from './ListItem';

interface BreadcrumbItemProps extends LinkedCrumbProps {
  text: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItemProps[];
  expanderAriaLabel: string;
  maxWidth: number;
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <Nav maxWidth={props.maxWidth}>
      <List expanderAriaLabel={props.expanderAriaLabel}>
        {props.breadcrumbs.map(({href, text, onAction, ...elemProps}, i) => {
          const lastCrumb = i === props.breadcrumbs.length - 1;
          if (!lastCrumb) {
            return (
              <ListItem key={i}>
                <LinkedCrumb href={href} onAction={onAction} {...elemProps}>
                  {text}
                </LinkedCrumb>
              </ListItem>
            );
          }
          return <CurrentCrumb key={i}>{text}</CurrentCrumb>;
        })}
      </List>
    </Nav>
  );
};
