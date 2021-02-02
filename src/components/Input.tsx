import React from 'react';

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { Control, useController } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  control: Control;
  name: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { control, name, ...rest } = props;

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });

  return (
    <ChakraInput
      backgroundColor="gray.500"
      borderRadius="md"
      focusBorderColor="purple.600"
      variant="outline"
      ref={ref}
      {...inputProps}
      {...rest}
    />
  );
};

export default Input;
