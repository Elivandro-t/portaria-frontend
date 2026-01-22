// import { type JSX } from "react";
// import { Navigate } from "react-router-dom";

// export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {

//   const isAuthenticated = !!localStorage.getItem("acessToken");
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };


import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { subjet } from "../../../jwt/jwtservice";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedPermissions?: string[]; // Permissões necessárias
}

export const ProtectedRoute = ({ children, allowedPermissions }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userPermissions, setUserPermissions] = useState<string[]>([]);

  useEffect(() => {
    const token = !!localStorage.getItem("acessToken");
    if (token!=null) {
      setIsAuthenticated(true);
      const user = subjet();
      setUserPermissions(user?.permissoes || []);
    }
    setLoading(false)

  },[])
  if (loading) {
    return <div>Carregando...</div>; // opcional: pode ser um spinner
  }
  // Se o usuário não está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/verify" replace />;
  }

  // Se a rota exige permissões específicas
  if (allowedPermissions && !allowedPermissions.some(p => userPermissions.includes(p))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};