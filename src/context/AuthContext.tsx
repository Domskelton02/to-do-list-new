// src/context/AuthContext.tsx
import { createContext, useState, FC } from 'react';
import { IUser, IAuthContext, IAuthProviderProps } from '../types/types';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login: IAuthContext['login'] = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/users?username=' + username);
      const [user] = await response.json();

      if (user && user.password === password) {
        setUser(user);
      } else {
        alert('Invalid username or password');
        setUser(null);
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  };

  const logout: IAuthContext['logout'] = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
