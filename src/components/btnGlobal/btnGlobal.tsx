import type { ReactNode } from "react"
import {BtnLogin} from "./btnGlobalCss"
type props = {
    titulo?:string,
    nome_btn?:string,
    click:()=>void,
      isvalid:boolean,
      children?:ReactNode

}

export const BtnGlobal = (prop:props)=>{
    return(
        <BtnLogin  onClick={prop.click} global={prop.isvalid?"admin":"default"} >{prop?.titulo} {prop.children}</BtnLogin>
    )
}