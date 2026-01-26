import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import apiAcess from "./modulos/PaginaInicial/service/moduleApi"
import { subjet } from "./jwt/jwtservice";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedPermissions?: string;
};

export const ProtectedRoute = ({ children, allowedPermissions }: ProtectedRouteProps) => {
  const user = subjet();
  const [loading, setLoading] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPermissions, setUserPermissions] = useState<any>(null);

  useEffect(() => {
    // Inicializa o carregamento em true
    setLoading(true); 
    const token = !!localStorage.getItem("acessToken");

    if (token!=null) {
      setIsAuthenticated(true);
      
      async function handleBuscaApi() {
        try {
          const resposta = await apiAcess.modulo(user?.id);
                    if (resposta?.acess) {
            setUserPermissions(resposta);
          }
        } catch (error) {
          setUserPermissions({ acess: [] }); // Trata erro definindo sem permissão
        } finally {
          setLoading(false); 
        }
      }

      handleBuscaApi();
    }else{
      setIsAuthenticated(false);
    }
    
  }, []); 

  // --- LÓGICA DE VERIFICAÇÃO ---

  // Calcula a permissão
  const hasPermission = userPermissions?.acess?.some((p: any) =>
    p?.permission_name.includes(allowedPermissions)
  );
  if (loading) {
    return ; 
  }

  // Se o carregamento terminou, prossegue com as verificações de acesso

  if (!isAuthenticated) {
    return <Navigate to="/verify" replace />;
  };

  if (allowedPermissions && !hasPermission) {
    return <Navigate to="/unauthorized" replace />;
  };

  return <>{children}</>;
};