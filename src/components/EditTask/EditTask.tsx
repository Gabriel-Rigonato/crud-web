import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import TextInput from "../InputText/InputText";
import { toast } from "../ui/use-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useUpdateTask from "@/hooks/useUpdateTask";
import { useState } from "react";
import { ITask } from "@/interfaces/tasks";
import { Input } from "../ui/input";


export default function EditTask({ uuid, title, description, status}: ITask) {
  const { mutateAsync } = useUpdateTask();
  const [isOpen, setIsOpen] = useState(false);
  
  const { 
    // control, 
    handleSubmit,
    register,
     reset 
    } = useForm<any>({
    // resolver: zodResolver(updateTaskFormSchema),
  });

  const handleUpdateTask = async (data: any) => {

    if(data.title.lenght == 0){
      data.title = title;
    }
    if(data.description.lenght == 0){
      data.description = description;
    }
    if(data.status.lenght == 0){
      data.status = status;
    }
    try {
      reset();
      await mutateAsync({ uuid, data });
      setIsOpen(false);
        
      toast({
        title: "Tarefa editada com sucesso!",
        variant: "default",
      });
      
    } catch (ex: any) {
      toast({
        title: "Não foi possível atualizar a tarefa",
        variant: "destructive",
        description: `${ex.response.data.message || "Erro desconhecido"}!`,
      });
    }
  };

  return (
    <>
      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="w-full">
            <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent w-full focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" onClick={() => setIsOpen(true)}>
              Editar
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Dados para atualizar tarefa</DialogTitle>
              <DialogDescription>
                Adicione nos campos abaixo detalhes da tarefa editada.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleUpdateTask)} className="flex flex-col gap-4 my-4">
              <div>
                <Input {...register("title")}  placeholder={title}/>
              </div>
              <div>
                <Input {...register("description")} placeholder={description}/>
              </div>
              <div>
              <label htmlFor="selectValue" className="block font-bold mb-1">Selecione um status</label>
              <select
                {...register("status")}
                className="border rounded px-3 py-2"
              >
                <option value="" >Selecione...</option>
                <option value="NOT_STARTED">Não iniciada</option>
                <option value="IN_PROGRESS">Em andamento</option>
                <option value="COMPLETED">Finalizada</option>
              </select>
              </div>
              <Button type="submit" size="sm" className="px-3">Salvar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
