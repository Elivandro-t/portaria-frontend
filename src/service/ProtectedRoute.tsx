// import { type JSX } from "react";
// import { Navigate } from "react-router-dom";

// export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  
//   const isAuthenticated = !!localStorage.getItem("acessToken");
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };


import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { subjet } from "./jwt/jwtservice";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedPermissions?: string[]; // Permissões necessárias
}

export const ProtectedRoute = ({ children, allowedPermissions }: ProtectedRouteProps) => {
    const isAuthenticated = !!localStorage.getItem("acessToken");

  const user = subjet();

  const userPermissions: string[] = user?.permissoes || [];

  // Se o usuário não está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Se a rota exige permissões específicas
  if (allowedPermissions && !allowedPermissions.some(p => userPermissions.includes(p))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};