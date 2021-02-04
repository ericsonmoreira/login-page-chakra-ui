import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { User } from '../@types';
import useLocalStorage from '../hooks/useLocalStorage';
import api from '../services/api';
import authController from '../services/api/authController';

interface AuthContextData {
  user: User | undefined;
  token: string | undefined;
  isSubmiting: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = (props) => {
  const { children } = props;

  const [isSubmiting, setIsSubmiting] = useState(false);

  const [user, setLocalStorageUser, removeLocalStorageUser] = useLocalStorage<
    User | undefined
  >('teste@user', undefined);
  const [
    token,
    setLocalStorageToken,
    removeLocalStorageToken,
  ] = useLocalStorage<string | undefined>('teste@token', undefined);

  const signIn = async (email: string, password: string) => {
    try {
      setIsSubmiting(true);
      const { data } = await authController.signIn({ email, password });
      setLocalStorageUser(data.user);
      setLocalStorageToken(data.token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.error(error);
      toast.error('Erro');
    } finally {
      setIsSubmiting(false);
    }
  };

  const signOut = async () => {
    removeLocalStorageUser();
    removeLocalStorageToken();
    delete api.defaults.headers.common.Authorization;
  };

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut, isSubmiting }}>
      {children}
    </AuthContext.Provider>
  );
};
