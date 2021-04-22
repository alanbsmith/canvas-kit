import * as React from 'react';
import {VStack, Stack, Flex} from '@workday/canvas-kit-labs-react/layout';
import {TextButton} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-labs-react/tokens';

const Card = ({heading = '', body = ''}) => (
  <Flex flex={1} depth={2} padding="s" backgroundColor="frenchVanilla100">
    <Stack direction="column" spacing="xs">
      <h3 style={{...type.h3, margin: 0}}>{heading}</h3>
      <span style={{...type.body}}>{body}</span>
      <Flex>
        <TextButton>Add to order</TextButton>
      </Flex>
    </Stack>
  </Flex>
);

export const VStackCards = () => {
  return (
    <>
      <VStack spacing="s" backgroundColor="soap100" padding="s">
        <Card heading="Diavola" body="sauce, smoked mozzarella, pepperoni, basil, chili flake" />
        <Card
          heading="Four Cheese"
          body="mozzarella, gorgonzola, smoked mozzarella, parmesan, garlic oil "
        />
        <Card
          heading="Veggie"
          body="sauce, mozzarella, artichokes, roasted red peppers, broccolini"
        />
      </VStack>
    </>
  );
};