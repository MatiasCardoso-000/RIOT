import { axiosInstance } from "./axios";

export const registerRequest = async (user) => {
  return await axiosInstance.post("/register", user);
};

export const loginRequest = async (user) => {
  return await axiosInstance.post("/login", user);
};

export const verifyToken = async (token) => {
  return axiosInstance.get("/verify", {
    headers: {
      Authorization: `Bearer: ${token}`
    }
  });
};
