import {BtnLogin} from "./btnGlobalCss"
type props = {
    titulo:string,
    nome_btn:String,
    click:()=>void,
      isvalid:boolean

}
export const BtnGlobal = (prop:props)=>{
    return(
        <BtnLogin disabled={prop.isvalid} onClick={prop.click} global={prop.isvalid?"code":"default"} >{prop.titulo}</BtnLogin>
    )
}