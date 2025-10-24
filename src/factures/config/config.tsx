import { Outlet, useOutlet } from "react-router-dom";
import { MenuConfig } from "../../components/menuConfig/menuConfig"
import Template from "./ConfigCss"
export const ConfigComponent = ()=>{
    const outlet = useOutlet();
    return(
     <Template.container>
        <MenuConfig></MenuConfig>
        <Template.container_int>
                {outlet ? (
          <Outlet />
        ) : (
          <Template.placeholder>
            <h2>Bem-vindo às Configurações ⚙️</h2>
            <p>Selecione uma opção no menu para começar.</p>
          </Template.placeholder>
        )}
        </Template.container_int>
     </Template.container>
        
    )
}