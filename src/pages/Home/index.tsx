import { Button, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <VStack>
      <Text>Home</Text>
      <Button variant="outline">Logout</Button>
    </VStack>
  );
};

export default Home;
