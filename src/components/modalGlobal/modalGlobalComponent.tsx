import type { ReactNode,MouseEvent } from "react"
import Template from "./modalGlobalComponentCss"

type children = {
    children: ReactNode,
        cancelar:()=>void

}

export const ModalGlobalComponent = ({ children ,cancelar}: children) => {
    const handleCancela=(env:MouseEvent)=>{
        env?.stopPropagation()
     }
    return (
        <Template.container onClick={cancelar}>
            <Template.container_left onClick={handleCancela}>
                {children}
            </Template.container_left>
        </Template.container>
    )
}