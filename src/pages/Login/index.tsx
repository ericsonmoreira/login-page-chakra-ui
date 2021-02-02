import { Button, Center, Grid, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import names from '../../routes/names';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const history = useHistory();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormData) => {
    signIn(data.email, data.password);
    history.push(names.root);
  };

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
        as="form"
        gridArea="form"
        alignItems="flex-start"
        padding={2}
        height="100%"
        margin={4}
        borderRadius="md"
        shadow="md"
        backgroundColor="white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading>Login</Heading>
        <Input placeholder="Email" name="email" control={control} />
        <Input
          placeholder="Senha"
          name="password"
          control={control}
          type="password"
        />
        <Button width="full" type="submit">
          Login
        </Button>
      </VStack>
    </Grid>
  );
};

export default Login;
