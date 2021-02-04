import { Button, Text, VStack } from '@chakra-ui/react';
import { User } from '@types';
import useAuth from 'hooks/useAuth';
import { LogOutIcon } from 'icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import names from 'routes/names';
import authController from 'services/api/authController';

const Home: React.FC = () => {
  const history = useHistory();

  const { signOut } = useAuth();

  const [users, setUsers] = useState<User[]>([]);

  const handleFetchData = useCallback(async () => {
    try {
      const { data } = await authController.get();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut();
    history.push(names.login);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

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
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </VStack>
  );
};

export default Home;
