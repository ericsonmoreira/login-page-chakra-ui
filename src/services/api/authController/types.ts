export interface SignInParams {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
}
