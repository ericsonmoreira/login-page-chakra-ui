import { ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { AuthProvider } from './providers/auth';
import Routes from './routes/Routes';

export const App = () => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ChakraProvider>
);
