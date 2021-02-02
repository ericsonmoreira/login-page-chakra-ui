import { ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './providers/auth';
import Routes from './routes/Routes';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => (
  <ChakraProvider theme={theme}>
    <ToastContainer position="top-right" autoClose={2000} />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ChakraProvider>
);
