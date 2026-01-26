import { Outlet } from "react-router-dom"
import { HeaderSecundarioComponent } from "../headerSecundario/HeaderSecundario"
import Template from "./controleCss"
const ControleDeAcesso = ()=>{
    return(
     <Template.container>
        <HeaderSecundarioComponent titulo={"Portaria - Controle de Acesso"} ativo={true}></HeaderSecundarioComponent>
         <Outlet></Outlet>
     </Template.container>
    )
}

export default ControleDeAcesso;