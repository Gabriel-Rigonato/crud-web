import { z } from "zod"

export const loginFormSchema = z.object({
  username: z.string()
    .nonempty("Email é obrigatório"),
  password: z.string()
    .nonempty("Senha é obrigatório"),
})

export type loginFormData = z.infer<typeof loginFormSchema>