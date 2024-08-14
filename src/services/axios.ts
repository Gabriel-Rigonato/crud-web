import axios from "axios";
import { parseCookies } from "nookies";

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_OBUC,
})

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_OBUC,
})

authInstance.interceptors.request.use(
  async (config) => {
    const cookies = parseCookies();

    const token = JSON.parse(cookies.token);

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);