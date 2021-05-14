import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';

export const Display = createComponent('h1')({
  displayName: '',
  Component: ({ children, ...elemProps }, Element, ref) => {
    return (
      <h1 ref={ref} {...elemProps}>{children}</h1>
    );
  }
});

export const Title = createComponent('h1')({
  displayName: '',
  Component: ({ children, ...elemProps }, Element, ref) => {
    return (
      <h1 ref={ref} {...elemProps}>{children}</h1>
    );
  }
});

export const Heading = createComponent('h2')({
  displayName: '',
  Component: ({ children, ...elemProps }, Element, ref) => {
    return (
      <h2 ref={ref} {...elemProps}>{children}</h2>
    );
  }
});

export const Body = createComponent('p')({
  displayName: '',
  Component: ({ children, ...elemProps }, Element, ref) => {
    return (
      <p ref={ref} {...elemProps}>{children}</p>
    );
  }
});

export const Detail = createComponent('span')({
  displayName: '',
  Component: ({ children, ...elemProps }, Element, ref) => {
    return (
      <span ref={ref} {...elemProps}>{children}</span>
    );
  }
});