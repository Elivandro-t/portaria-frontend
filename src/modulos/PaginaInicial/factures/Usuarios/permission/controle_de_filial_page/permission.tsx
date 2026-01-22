import Template from "./peermissionCss"
import { IncluirAcesso } from "./permissionUsuario"
export const PermissionComponent = () => {
   
    return (
        <>
            <Template.container >
                <Template.container_int>
                    <Template.conainter_right>
                        <IncluirAcesso/>
                    </Template.conainter_right>
                </Template.container_int>
            </Template.container >


        </>
    )
}