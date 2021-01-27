import { ChakraProvider, Text, theme } from '@chakra-ui/react';
import * as React from 'react';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Text>Ola mundo</Text>
  </ChakraProvider>
);
