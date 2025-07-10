import { createContext } from "react";
import type { User } from "../../types/user.interface";

interface AuthContextType {
  user: User;
  signIn: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  errors: string[]
}

export const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  signIn: (user: User) => user,
  logout: () => {},
  isAuthenticated: false,
  isLoading: true,
  errors:[]
});
