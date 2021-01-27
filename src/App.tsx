import { ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import Routes from './routes/Routes';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes />
  </ChakraProvider>
);
