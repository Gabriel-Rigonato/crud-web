import { TableBody, TableCell, TableRow } from "../ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoveHorizontalIcon } from "lucide-react";

import DeleteTask from "../DeleteTask/DeleteTask";
import EditTask from "../EditTask/EditTask";
import DetailsTask from "../DetailsTask/DetailsTask";
import { ITask } from "@/interfaces/tasks";
import { formatStatus } from "@/lib/utils";

export default function ListTasks({ uuid, title, description, status}: ITask) {
  return (
    <TableBody>
      <TableRow className="text-center">
        <TableCell>{title}</TableCell>
        <TableCell>{formatStatus(status as string)}</TableCell>
        <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <MoveHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <EditTask 
                uuid={uuid}
                title={title}
                description={description} status={status}            />
            <DeleteTask uuid={uuid} title={title}/>
            <DetailsTask uuid={uuid} />
          </DropdownMenuContent>
        </DropdownMenu>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}
