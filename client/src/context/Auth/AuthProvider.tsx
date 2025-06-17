import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "../../types/user.interface";
import {
  registerRequest,
  loginRequest,
  verifyToken,
} from "../../../../backend/auth/auth.js";
import Cookies from "js-cookie";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const signUp = async (user: User) => {
    try {
      const res = await registerRequest(user);
      if (!res.ok) {
        throw new Error("Hubo un error al registrar el usuario");
      }
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (user: User) => {
    try {
      const res = await loginRequest(user);
      if (res.status !== 200) {
        throw new Error("Hubo un error al iniciar sesión");
      }
      console.log(res.data);
      
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return setUser({} as User);
      }

      try {
        const res = await verifyToken();
        if (!res.data) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setIsLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({} as User);
        setIsLoading(false);
        console.log(error);
      }
    };

    checkLogin();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ user, signUp, signIn, isAuthenticated, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
