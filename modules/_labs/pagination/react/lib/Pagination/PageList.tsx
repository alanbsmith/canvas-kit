/** @jsx jsx */
import * as React from 'react';
import {jsx, css} from '@emotion/core';

import {PaginationModel} from './types';
import {List, ListItem, ListItemProps, ListProps} from './common/List';
import {useStack} from './common/Stack';
import {useRTL} from './common/utils/useRTL';

export interface PageListProps extends PaginationModel, Omit<ListProps, 'as'> {
  children?: (model: PaginationModel) => React.ReactNode[] | React.ReactNode;
}

export const PageList = ({state, events, children, ...elemProps}: PageListProps) => {
  const {shouldUseRTL} = useRTL();
  const stackStyles = useStack({direction: 'row', spacing: 'xxxs', shouldUseRTL});

  return (
    <List as="ol" role="list" css={css(stackStyles)} {...elemProps}>
      {typeof children === 'function' ? children({state, events}) : children}
    </List>
  );
};

export type PageListItemProps = ListItemProps;

export const PageListItem = ({children, ...elemProps}: PageListItemProps) => {
  return <ListItem {...elemProps}>{children}</ListItem>;
};
