import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useFetchTaskByUuid from "@/hooks/useFetchTaskByUuid";
import { formatStatus } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailsPage() {

  const { uuid } = useParams();

  const { data: response, isLoading, error } = useFetchTaskByUuid(uuid as string);

  const navigate = useNavigate()

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
            <CardTitle>Detalhes da Tarefa</CardTitle>
            <CardDescription>Detalhes específico de cada tarefa.</CardDescription>
          </CardHeader>
          <div>
            <Button className="space-x-2" onClick={() => navigate("/tarefas")}>
              <ArrowLeft color="#fff" strokeWidth={2} size={22} />
              Voltar
            </Button>
          </div>
        </div> 
        <CardContent>
        <div className="mt-7 p-6 bg-white shadow-md rounded-lg">
  <h2 className="text-xl font-semibold mb-4">Detalhes</h2>
  <div className="flex flex-col gap-4">
    <div className="flex gap-2">
      <p className="font-bold">Nome:</p>
      <p className="text-gray-700">{response.title}</p>
    </div>
    <div className="flex gap-2">
      <p className="font-bold">Descrição:</p>
      <p className="text-gray-700">{response.description}</p>
    </div>
    <div className="flex gap-2">
      <p className="font-bold">Status:</p>
      <p className="text-gray-700">{formatStatus(response.status)}</p>
    </div>
    <div className="flex gap-2">
      <p className="font-bold">Criada em:</p>
      <p className="text-gray-700">{response.created_at}</p>
    </div>
    <div className="flex gap-2">
      <p className="font-bold">Atualizada em:</p>
      <p className="text-gray-700">{response.updated_at}</p>
    </div>
  </div>
</div>
        </CardContent>
      </Card>
    </>
  )
}
