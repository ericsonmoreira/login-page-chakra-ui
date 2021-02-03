import React, { createContext } from 'react';
import { toast } from 'react-toastify';
import { User } from '../@types';
import useLocalStorage from '../hooks/useLocalStorage';
import api from '../services/api';
import authController from '../services/api/authController';

interface AuthContextData {
  user: User;
  token: string;
  signIn(email: string, password: string): void;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = (props) => {
  const { children } = props;

  const [user] = useLocalStorage<User>('teste@user', {} as User);
  const [token, setLocalStorageToken] = useLocalStorage<string>(
    'teste@token',
    ''
  );

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await authController.signIn({ email, password });
      setLocalStorageToken(data.token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.error(error);
      toast.error('Erro');
    }
  };

  // TODO: testando o logout
  const signOut = async () => {
    console.log('signOut');
    setLocalStorageToken('');
    delete api.defaults.headers.common.Authorization;
  };

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
