import { Navigate } from "react-router-dom";

type Props = {
  permissoes: any;
};

export const RedirectByPermissoes = ({ permissoes }: Props) => {
  // Se tiver permissão de registrar entrada/saída → Minhas Entradas
  if (permissoes==="FISCAL") {
    return <Navigate to="/portaria" replace />;
  }

  // Se tiver permissão de visualizar registros → Meus Registros
  if (permissoes ==="AUTORIZADOR") {
    return <Navigate to="/controle/meus-registros" replace />;
  }

  // Caso não tenha nenhuma permissão específica
  return <Navigate to="/portaria" replace />;
};
