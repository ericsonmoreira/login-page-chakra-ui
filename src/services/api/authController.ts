import { AxiosResponse } from 'axios';
import api from '.';

interface SignInParams {
  email: string;
  password: string;
}

interface SignInResponse {
  token: string;
}

export default {
  signIn(params: SignInParams): Promise<AxiosResponse<SignInResponse>> {
    return api.post('/signin', params);
  },
};
