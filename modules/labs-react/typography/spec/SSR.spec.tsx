
/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Typography} from '../';

describe('Typography', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(
      <Typography>
        <Typography.Target>Target</Typography.Target>
        <Typography.Content>Content</Typography.Content>
      </Typography>
    );
    expect(ssrRender).not.toThrow();
  });
});

