import CreateTask from "@/components/CreateTask/CreateTask";
import Error from "@/components/Error/Error";
import ListTasks from "@/components/ListTasks/ListTasks"
import Loading from "@/components/Loading/Loading";
import TableHeadRow from "@/components/TableHeadRow/TableHeadRow"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableCaption,
} from "@/components/ui/table"
import useFetchTasks from "@/hooks/useFetchTasks";
import { ITask } from "@/interfaces/tasks";


export default function TaskPage() {

  const { data, isLoading, error } = useFetchTasks();

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }
  return (
    <>
      <Card>
        <div className="flex justify-between items-center pr-16">
          <CardHeader>
            <CardTitle>Tarefas</CardTitle>
            <CardDescription>Painel de gerenciamento de todas Tarefas.</CardDescription>
          </CardHeader>
          <div>
            <CreateTask />
          </div>
        </div> 
        <CardContent>
          <Table>
            <TableCaption>Uma lista de todos as Tarefas.</TableCaption>
            <TableHeadRow head={["Titulo", "status"]}/>
            {data.map((item: ITask) => (
              <ListTasks 
                uuid={item.uuid}
                title={item.title}
                description={item.description} status={item.status}              />
            ))}
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
