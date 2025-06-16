import { axiosInstance } from "./axios"; 

export const login = async (user) => {
  try {
    const response = await axiosInstance.post("/login", user);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}