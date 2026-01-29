import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./factures/Dashboard/PainelRecebimento";
import NotFund from "../../paga_segunds/404/NotFund";
import HomeModuloRecebmento from "./factures/HomeModuloRecebimento/homeModuloRecebimento";
import RegisttroCardRecebimento from "./factures/Registro/registroCardRecebimento";
import ListaItensFiliasRecebimento from "./factures/lista/lista";
import PainelRecebimento from "./factures/Dashboard/PainelRecebimento";
const RecebimentoRouter = () => {

   return (
      <Routes>
         <Route path="/" element={<HomeModuloRecebmento />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="novo-logistico" element={<RegisttroCardRecebimento />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="listaFiliais" element={<ListaItensFiliasRecebimento />} />
            <Route path="detalhes-filial/:filial" element={<PainelRecebimento />} />

         </Route>
         <Route path="*" element={<NotFund />} />

      </Routes>
   )
}
export default RecebimentoRouter; 