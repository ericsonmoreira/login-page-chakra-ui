import { Center, Grid, Heading, Image, Input, VStack } from '@chakra-ui/react';
import React from 'react';

const Login: React.FC = () => {
  return (
    <Grid
      backgroundColor="gray.900"
      height="100vh"
      templateColumns="1fr 400px 400px 1fr"
      templateRows="1fr 400px 1fr"
      templateAreas="
        '. . . .'
        '. image form .'
        '. . . .'
      "
    >
      <Center gridArea="image">
        <Image src="/security.svg" />
      </Center>
      <VStack
        gridArea="form"
        alignItems="flex-start"
        padding={2}
        height="100%"
        margin={4}
        borderRadius="md"
        shadow="md"
        backgroundColor="white"
      >
        <Heading>Login</Heading>
        <Input
          placeholder="Email"
          backgroundColor="gray.500"
          borderRadius="md"
          focusBorderColor="purple.600"
          variant="outline"
        />
        <Input
          placeholder="Senha"
          backgroundColor="gray.500"
          borderRadius="md"
          focusBorderColor="purple.600"
          variant="outline"
        />
      </VStack>
    </Grid>
  );
};

export default Login;
