import { useState } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "../../types/user.interface";
import {
  registerRequest,
  loginRequest,
} from "../../../../backend/auth/auth.js";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signUp = async (user: User) => {
    const res = await registerRequest(user);
    if (!res.ok) {
      throw new Error("Someting went wrong trying to process the data");
    }
    setUser(res.data);
  };

  const signIn = async (user: User) => {
    const res = await loginRequest(user);
    if (!res.ok) {
      throw new Error("Someting went wrong trying to process the data");
    }
    setUser(res.data);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn,isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
