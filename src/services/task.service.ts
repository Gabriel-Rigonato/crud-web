import { taskFormData } from "@/schemas/Tasks/task.schema";
import { authInstance } from "./axios";

export class TaskService {
  static async list() {
    try {
      const response = await authInstance({
        method: "GET",
        url: "user/tasks",
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }

  static async getByUuid(uuid: string) {
    try {
      const response = await authInstance({
        method: "GET",
        url: `user/tasks/details?uuid=${uuid}`,
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }

  static async create(data: taskFormData) {
    try {
      const response = await authInstance({
        method: "POST",
        url: "user/tasks",
        data
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }

  static async delete(uuid: string) {
    try {
      const response = await authInstance({
        method: "DELETE",
        url: `user/tasks?uuid=${uuid}`,
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }

  static async update(uuid: string, data: any) {
    try {
      const response = await authInstance({
        method: "PUT",
        url: `user/tasks?uuid=${uuid}`,
        data,
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }
}