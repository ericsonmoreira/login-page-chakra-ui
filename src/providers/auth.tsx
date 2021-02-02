import React, { createContext } from 'react';
import { User } from '../@types';
import useLocalStorage from '../hooks/useLocalStorage';

interface AuthContextData {
  user: User | ((value: User | ((val: User) => User)) => void);
  token: string | ((value: string | ((val: string) => string)) => void);
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = (props) => {
  const { children } = props;

  const [user] = useLocalStorage<User>('teste@user', {} as User);
  const [token] = useLocalStorage<string>('teste@token', '');

  return (
    <AuthContext.Provider value={{ user, token }}>
      {children}
    </AuthContext.Provider>
  );
};
