import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Esse campo deve ser um email')
    .required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

export default schema;
