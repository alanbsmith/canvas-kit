type ValueOf<T> = T[keyof T];

/**
 * ### Canvas Depth Tokens
 *
 * */
export const depth: CanvasDepth = {
  inset: {
    boxShadow: 'inset 0px 0px 8px 0 rgba(82, 97, 115, 0.09)',
  },
  1: {
    boxShadow: '0px 2px 4px 0 rgba(0, 0, 0, 0.08)',
  },
  2: {
    boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 0.1)',
  },
  3: {
    boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.12)',
  },
  4: {
    border: '1px solid rgba(218, 226, 230, 1)',
    boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.12)',
  },
};

export type CanvasDepth = {
  /** Used for inset containers */
  inset: {
    boxShadow: 'inset 0px 0px 8px 0 rgba(82, 97, 115, 0.09)';
  };
  /** Standard card depth */
  1: {
    boxShadow: '0px 2px 4px 0 rgba(0, 0, 0, 0.08)';
  };
  /** On hover, depth increases */
  2: {
    boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 0.1)';
  };
  /** Active, Task Orch, PopUps, Async Notification */
  3: {
    boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.12)';
  };
  /** Cards on white backgrounds, Menus, Prompt window */
  4: {
    border: '1px solid rgba(218, 226, 230, 1)';
    boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.12)';
  };
};

export type CanvasDepthValue = ValueOf<CanvasDepth>;
