import { Route, Routes } from "react-router-dom"

import ProtectedRoutes from "@/layouts/PrivateRoute/ProtectedRoute";
import AdminLayout from "@/layouts/PrivateRoute/AdminLayout";
import PublicRoutes from "@/layouts/PublicRoute/PublicRoutes";

import LoginPage from "@/pages/LoginPage/LoginPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import ErrorPage from "@/pages/ErrorPage";
import TaskPage from "@/pages/TaskPage/TaskPage";
import DetailsPage from "@/pages/DetailsPage/DetailsPage";


const AppRoutes = () => {

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />

      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Route>

      <Route element={
          <ProtectedRoutes>
            <AdminLayout />
          </ProtectedRoutes>}>
        <Route path="/tarefas" element={<TaskPage />} />
        <Route path="/tarefas/:uuid" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;