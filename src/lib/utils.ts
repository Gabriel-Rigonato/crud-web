import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatStatus(status: string) {

  switch(status){
    case 'NOT_STARTED':
      return "NÃO INICIADO"
    case 'IN_PROGRESS':
        return "EM ANDAMENTO"
    case 'COMPLETED':
          return "FINALIZADA"
        }
}
