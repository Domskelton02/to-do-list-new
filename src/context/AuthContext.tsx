// src/context/AuthContext.tsx
import React, { createContext, useState } from 'react';
import { AuthContextType } from '../types/types';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null); // You'll want to replace 'null' with a proper User state

  const login = async (username: string, password: string) => {
    // Here you'd make an API call to log in the user
    console.log('Login attempt:', username, password);
    // On successful login:
    setUser({ id: 1, username, password }); // Replace with actual user data from the response
  };

  // Provide the login function to the context
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
