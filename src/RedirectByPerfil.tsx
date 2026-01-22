import { Navigate } from "react-router-dom";

type Props = {
  permissoes: any;
};

export const RedirectByPermissoes = ({ permissoes }: Props) => {
  // // Se tiver permissão de registrar entrada/saída → Minhas Entradas
  // if (permissoes==="FISCAL") {
  //   return <Navigate to= "/portaria/pendentes" replace />;
  // }

  // // Se tiver permissão de visualizar registros → Meus Registros
  // if (permissoes === "AUTORIZADOR") {
  //   return <Navigate to="/portaria" replace />;
  // }
  // if (permissoes === "ADMIN") {
  //   return <Navigate to= "/portaria/pendentes" replace />;
  // }

  // Caso não tenha nenhuma permissão específica
  // return <Navigate to="/portaria" replace />;
  switch(permissoes){
    case "FISCAL":
      return <Navigate to= "/portaria/active/pendentes" replace />;
    case "AUTORIZADOR":
      return <Navigate to="/portaria/active" replace />;
    case "ADMIN":
      return <Navigate to= "/portaria/active/pendentes" replace />;
    case "GERENTE_PREVENCAO":
      return <Navigate to= "/portaria/active/pendentes" replace />;
    default:
      return <Navigate to="/portaria" replace />;
  }
};
