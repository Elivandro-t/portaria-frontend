import Chip from "@mui/material/Chip"
import Template from "./statusComponetCss"
export const StatusPedidosComponet = ()=>{
    return(
        <Template.container>
            <Template.container_int>
            <Chip color="warning" label={"AGUARDANDO ENTRADA"} variant="outlined" />

            </Template.container_int>
        </Template.container>
    )
}