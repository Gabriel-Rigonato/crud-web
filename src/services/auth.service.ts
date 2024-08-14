import { registerFormData } from "@/schemas/Login/register.schema";
import { authInstance } from "./axios";

export class AuthService {
  
  static async login(username: string, password: string) {
    try {
      const response = await authInstance({
        method: "POST",
        url: "user/auth/signin",
        data: { username, password }
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }

  static async create(data: registerFormData) {
    try {
      const response = await authInstance({
        method: "POST",
        url: "user/register",
        data
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }
}