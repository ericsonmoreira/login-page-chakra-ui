import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Control, useController } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  control: Control;
  name: string;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
}

const Input: React.FC<InputProps> = (props) => {
  const { control, name, label, errors, ...rest } = props;

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl id={name} isInvalid={errors[name]}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        backgroundColor="gray.500"
        borderRadius="full"
        focusBorderColor="purple.600"
        variant="outline"
        ref={ref}
        {...inputProps}
        {...rest}
      />
      <ErrorMessage errors={errors} name={name} as={FormErrorMessage} />
    </FormControl>
  );
};

export default Input;
