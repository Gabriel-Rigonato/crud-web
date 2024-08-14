import { removeMask } from "@/helpers/utils"
import { z } from "zod"

export const registerFormSchema = z.object({
  name: z.string()
    .nonempty("Nome é obrigatório"),
  document: z.string()
    .nonempty("CPF ou CNPJ é obrigatório")
    .transform(removeMask),
  username: z.string()
    .email("Formato de E-mail Inválido")
    .nonempty("E-mail é obrigatório"),
  phone: z.string()
    .transform(removeMask),
  password: z.string()
    .nonempty("Senha é obrigatório"),
})

export type registerFormData = z.infer<typeof registerFormSchema>