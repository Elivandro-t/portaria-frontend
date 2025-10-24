import { Outlet } from "react-router-dom"
import { HeaderSecundarioComponent } from "../headerSecundario/HeaderSecundario"
import Template from "./controleCss"
export const ControleDeAcesso = ()=>{
    return(
     <Template.container>
        <HeaderSecundarioComponent></HeaderSecundarioComponent>
         <Outlet></Outlet>
     </Template.container>
    )
}