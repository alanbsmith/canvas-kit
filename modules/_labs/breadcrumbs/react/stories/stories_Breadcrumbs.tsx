/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {number, withKnobs} from '@storybook/addon-knobs/react';

import README from '../README.md';
import {Breadcrumbs} from '../lib/Breadcrumbs/Breadcrumbs';
import {CurrentCrumb} from '../lib/Breadcrumbs/CurrentCrumb';
import {LinkedCrumb} from '../lib/Breadcrumbs/LinkedCrumb';
import {BreadcrumbsNav} from '../lib/Breadcrumbs/Nav';
import {BreadcrumbsList} from '../lib/Breadcrumbs/List';
import {BreadcrumbsListItem} from '../lib/Breadcrumbs/ListItem';

const exampleBreadcrumbs = [
  {
    text: 'Wicked: The Life and Times of the Wicked Witch of the West',
    href: '/',
    onAction: () => {
      window.alert(`Root`);
    },
  },
  {
    text: 'Folder1',
    href: '/Folder1',
    onAction: () => {
      window.alert(`Folder1`);
    },
  },
  {
    text: 'Folder2',
    href: '/Folder2',
    onAction: () => {
      window.alert(`Folder2`);
    },
  },
  {
    text: 'Folder3',
    href: '/Folder3',
    onAction: () => {
      window.alert(`Folder3`);
    },
  },
  {
    text: 'Folder4',
    href: '/Folder4',
    onAction: () => {
      window.alert(`Folder4`);
    },
  },
  {
    text: 'The rise and fall of a fellow with a really really long last name',
    href: '/Folder5',
    onAction: () => {
      window.alert(`Folder5`);
    },
  },
];

export default {
  title: 'Labs|Breadcrumbs/React',
  decorators: [withReadme(README), withKnobs],
};

// storiesOf('Labs/Breadcrumbs', module)
//   .addParameters({component: Breadcrumbs})
//   .addDecorator(withReadme(README))
//   .add('Default', () => (
//     <div className="story">
// <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={600} />
//     </div>
//   ))
//   .add('Truncated', () => (
//     <div className="story">
//       <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={400} />
//     </div>
//   ))
//   .add('Extra Truncated', () => (
//     <div className="story">
//       <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={100} />
//     </div>
//   ));

export const Configurable = () => {
  return (
    <Breadcrumbs breadcrumbs={exampleBreadcrumbs} maxWidth={100} expanderAriaLabel="more links" />
  );
};

export const Composable = () => {
  return (
    <BreadcrumbsNav maxWidth={800}>
      <BreadcrumbsList expanderAriaLabel="more links">
        <BreadcrumbsListItem>
          <LinkedCrumb
            onAction={href => alert(href)}
            onClick={e => console.log('currentTarget', e.currentTarget)}
            href="/artists"
          >
            income_statement_actuals_vs_budget_ytd_with_variance
          </LinkedCrumb>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <LinkedCrumb onAction={href => alert(href)} href="/david-bowie">
            Ledger Account is “4200: Property”
          </LinkedCrumb>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <LinkedCrumb href="/albums">Albums</LinkedCrumb>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <LinkedCrumb
            maxWidth={200}
            href="/the-rise-and-fall-of-ziggy-stardust-and-the-spiders-from-mars"
            onAction={href => alert(href)}
          >
            Policy_Type_is_Homeowners_Year_is_FY2020_Version_is_Actuals
          </LinkedCrumb>
        </BreadcrumbsListItem>
        <CurrentCrumb>The weather better be better when we get together forever</CurrentCrumb>
      </BreadcrumbsList>
    </BreadcrumbsNav>
  );
};
