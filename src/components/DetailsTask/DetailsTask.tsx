import { useNavigate } from 'react-router-dom'
import { DropdownMenuItem } from '../ui/dropdown-menu'

export interface IDetailsTask {
  uuid: string;
}

export default function DetailsTask({ uuid }: IDetailsTask ) {

  const navigate = useNavigate();

  return (
    <>
      <button className='w-full'>
        <DropdownMenuItem onClick={() => navigate(`/tarefas/${uuid}`)}>Detalhes</DropdownMenuItem>
      </button>
    </>
  )
}
