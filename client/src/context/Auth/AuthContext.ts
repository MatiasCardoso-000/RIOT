import { createContext } from "react";
import type { User } from "../../types/user.interface";

interface AuthContextType {
  user: User;
  signUp: (user: User) => void;
  signIn: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  errors: string[]
}

export const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  signUp: (user: User) => user,
  signIn: (user: User) => user,
  logout: () => {},
  isAuthenticated: false,
  isLoading: true,
  errors:[]
});
