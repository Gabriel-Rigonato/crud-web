import { z } from "zod"

export const createTaskFormSchema = z.object({
  title: z.string()
    .nonempty("Nome é obrigatório"),
  description: z.string()
    .nonempty("Descrição é obrigatória"),
});

export type taskFormData = z.infer<typeof createTaskFormSchema>;
