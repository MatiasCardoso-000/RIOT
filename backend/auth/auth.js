import { axiosInstance } from "./axios";

export const registerRequest = async (user) => {
  try {
    return await axiosInstance.post("/register", user);
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const loginRequest = async (user) => {
  try {
    return await axiosInstance.post("/login", user);
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const verifyToken = async (token) => {
  return await axiosInstance.get("/verify", token);
};
