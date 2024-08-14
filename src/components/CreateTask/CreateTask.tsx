import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import TextInput from "../InputText/InputText";
import { useForm } from "react-hook-form";
import { toast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTaskFormSchema, taskFormData } from "@/schemas/Tasks/task.schema";
import useCreateTasks from "@/hooks/useCreateTasks";
import { useState } from "react";

export default function CreateTask() {
  const { mutateAsync } = useCreateTasks();
  const [isOpen, setIsOpen] = useState(false);

  const { control, handleSubmit, reset } = useForm<taskFormData>({
    resolver: zodResolver(createTaskFormSchema),
  });

  const handleCreateTask = async (data: taskFormData) => {
    try {
      reset();
      const response = await mutateAsync(data);
      
      response && response ? setIsOpen(false) : null;
      
      toast({
        title: "Tarefa criada com sucesso!",
        variant: "default",
      });
      
    } catch (ex: any) {
      console.log(ex)
      toast({
        title: "Não foi possível criar a tarefa",
        variant: "destructive",
        description: `${ex.response.data.message || "Erro desconhecido"}!`,
      });
    }
  };

  return (
    <>
      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger>
            <Button className="space-x-2" onClick={() => setIsOpen(true)}>
              <Plus color="#fff" strokeWidth={2} size={22} />
              Criar Tarefa
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Dados do nova tarefa</DialogTitle>
              <DialogDescription>
                Adicione nos campos abaixo detalhes da tarefa.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleCreateTask)} className="flex flex-col gap-4 my-4">
              <div>
                <TextInput name="title" label="Titulo" control={control} placeholder="Ex: Estudar Algoritmos..." />
              </div>
              <div>
                <TextInput name="description" label="Descrição" control={control} placeholder="Ex: Entender Insert On Sort..." />
              </div>
              <Button type="submit" size="sm" className="px-3">Criar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
