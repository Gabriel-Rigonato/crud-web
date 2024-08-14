import { TaskService } from "@/services/task.service";
import { queryClient } from "@/services/react-query";
import { useMutation } from "@tanstack/react-query";
import { taskFormData } from "@/schemas/Tasks/task.schema";


export default  function useCreateTask() {
  return useMutation({
    mutationFn: async (data: taskFormData) => await TaskService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["task"]
      });
    }
  })
}
