import { Button, Center, Grid, Heading, Image, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Input from 'components/Input';
import useAuth from 'hooks/useAuth';
import { LogInIcon } from 'icons';
import names from 'routes/names';
import schema from './schema';
import { LoginFormData } from './types';

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const history = useHistory();

  const {
    control,
    errors,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormData) => {
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
        <Input
          placeholder="Email"
          name="email"
          type="email"
          control={control}
          errors={errors}
        />
        <Input
          placeholder="Senha"
          name="password"
          type="password"
          control={control}
          errors={errors}
        />
        <Button
          width="full"
          colorScheme="green"
          rightIcon={<LogInIcon />}
          type="submit"
          isLoading={isSubmitting}
        >
          Login
        </Button>
      </VStack>
    </Grid>
  );
};

export default Login;
