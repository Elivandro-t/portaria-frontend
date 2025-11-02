import type { ReactNode } from "react"
import Template from "./modalComponentCssss"

type children = {
    children:ReactNode
}
export const ModalComponent = ({children}:children)=>{

    return (
        <Template.container_left>
            {children}
        </Template.container_left>
    )
}