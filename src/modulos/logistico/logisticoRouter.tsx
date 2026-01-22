import { Navigate, Route, Routes } from "react-router-dom"
import HomeLogistico from "./factures/HomeLogistico/homeLogistico";
import RegistroLogistico from "./factures/Registro/registro";
import Dashboard from "./factures/Dashboard/Dashboard";
import NotFund from "../../paga_segunds/404/NotFund";
import ListaItensFiliasi from "./factures/lista/lista";
import DetahesRegistros from "./factures/detalhesItens/detalheItens";
const LogisticoRouter = () => {

   return (
      <Routes>
         <Route path="/" element={<HomeLogistico />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="novo-logistico" element={<RegistroLogistico />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="listaFiliais" element={<ListaItensFiliasi />} />
            <Route path="detalhes-filial/:filial" element={<DetahesRegistros />} />

         </Route>
         <Route path="*" element={<NotFund />} />

      </Routes>
   )
}
export default LogisticoRouter; 