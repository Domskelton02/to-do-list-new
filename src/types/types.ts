import { ReactNode } from 'react';


// User type
export interface IUser {
    id: number;
    username: string;
    // Note: Passwords should not be stored in the frontend in a real application
    password?: string;
  }
  
  // Auth context type
  export interface IAuthContext {
    user: IUser | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
  }

  export interface IAuthProviderProps {
    children: ReactNode;
  }
  
  // List type
  export interface IList {
    id: number;
    title: string;
    // If lists are user-specific, include the userId
    // userId?: number;
  }
  
  // Card type
  export interface ICard {
    id: number;
    title: string;
    description?: string;
    listId: number;
    status: 'incomplete' | 'inProgress' | 'pending'; // Updated status options
    // userId?: number; // Include if cards are user-specific
  }
  
  
  // Type for any other entities or operations
  // For example, if you have a function to add a card, you might define a type for it:
  
  export interface IAddCard {
    (title: string, description: string, listId: number): void;
  }
  
  // Any additional types related to your application go here
  // Example: State types, function types, etc.
  
  // Exporting a type for a generic function that might be used for API calls
  export type ApiFunction<T> = (data: T) => Promise<T>;
  