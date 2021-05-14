import React from 'react';

import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

type TypographyState = {
  open: boolean;
};

type TypographyEvents = {
  open(data: {}): void;
  close(data: {}): void;
};

export type TypographyModel = Model<TypographyState, TypographyEvents>;

const typographyEventMap = createEventMap<TypographyEvents>()({
  guards: {
    shouldOpen: 'open',
    shouldClose: 'close',
  },
  callbacks: {
    onOpen: 'open',
    onClose: 'close',
  },
});

export type TypographyModelConfig = {
  initialOpen?: boolean;
} & Partial<ToModelConfig<TypographyState, TypographyEvents, typeof typographyEventMap>>;

export const useTypographyModel = (
  config: TypographyModelConfig = {}
): TypographyModel => {
  const [open, setOpen] = React.useState(config.initialOpen || false);

  const state = {
    open,
  };

  const events = useEventMap(typographyEventMap, state, config, {
    open(data) {
      setOpen(true);
    },
    close(data) {
      setOpen(false);
    },
  });

  return {
    state,
    events,
  };
};
