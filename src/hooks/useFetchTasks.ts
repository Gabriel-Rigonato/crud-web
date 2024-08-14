import { TaskService } from "@/services/task.service";
import { useQuery } from "@tanstack/react-query";

export default function useFetchTasks(status?: string) {

  if(status == null){
    status = undefined
  }
   return useQuery({
    queryKey: ["task"],
    queryFn: TaskService.list
  })
}
