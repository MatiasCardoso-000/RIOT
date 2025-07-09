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
  const [errors, setErrors] = useState([]);

  const signUp = async (user: User) => {
    try {
      const res = await registerRequest(user);
      if (!res.ok) {
        throw new Error("Hubo un error al registrar el usuario");
      }
      setUser(res.data);
    } catch (error: any) {
      setErrors(error.response.data.message);
    }
  };

  const signIn = async (user: User) => {
    try {
      const res = await loginRequest(user);
      if (res.status !== 200) {
        throw new Error("Hubo un error al iniciar sesión");
      }
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error: any) {
      setErrors(error.response.data.errors);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser({} as User);
    setIsLoading(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const token = Cookies.get("token");

      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        setUser({} as User);
        return;
      }

      try {
        const res = await verifyToken(token);
        if (!res.data) {
          setIsAuthenticated(false);
          setIsLoading(false);
          setUser({} as User);
          return;
        }
        
        setUser(res.data);
        setIsAuthenticated(true);
        setIsLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({} as User);
        setIsLoading(false);
        setErrors(error.response.data.message);
      }
    };

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        logout,
        isAuthenticated,
        isLoading,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
