import { Button, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { LogOutIcon } from 'icons';
import names from 'routes/names';

const Home: React.FC = () => {
  const history = useHistory();

  const { signOut } = useAuth();

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut();
    history.push(names.login);
  };

  return (
    <VStack>
      <Text>Home</Text>
      <Button
        variant="outline"
        rightIcon={<LogOutIcon />}
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </VStack>
  );
};

export default Home;
