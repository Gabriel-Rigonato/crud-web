import { queryClient } from "@/services/react-query";
import { TaskService } from "@/services/task.service";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateTask() {
  return useMutation({
    mutationFn: async ({ uuid, data }: { uuid: string, data: any }) => await TaskService.update(uuid, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["task"]
      });
    }
  })
}
