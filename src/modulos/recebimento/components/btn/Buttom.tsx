import Template from "./btn.css"
type btn = {
    btn:()=>void,
    titulo:string
}
export const BtnAdd = ({btn,titulo}:btn,)=>{
    return(
        <Template.btnAdd onClick={btn} >{titulo}</Template.btnAdd>
        
    )
}