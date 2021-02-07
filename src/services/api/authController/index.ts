import { User } from '@types';
import { AxiosResponse } from 'axios';
import api from 'services/api';
import { SignInParams, SignInResponse } from './types';

export default {
  signIn(params: SignInParams): Promise<AxiosResponse<SignInResponse>> {
    return api.post('/signin', params);
  },
  get(): Promise<AxiosResponse<User[]>> {
    return api.get('/user');
  },
};
