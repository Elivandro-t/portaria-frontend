import { MdAdd } from "react-icons/md"
import Template from "./global.styled"
import { SendIcon } from "lucide-react";
type props = {
    onAddClick:()=>void,
    IconeType: "erro"|"sucess"|"receb";
    tituloBtn:any,
    def:boolean
}
export const BtnComponent = ({onAddClick,IconeType,tituloBtn,def}:props) => {
    const getAddIcon = (titulo:any)=>{
        switch(titulo){
            case "sucess":
                return <MdAdd />
            case "receb":
                return <SendIcon/>
        }
    }
    return (
        <Template.AddButton cor={def} onClick={onAddClick}>
           {getAddIcon(IconeType)}
            {tituloBtn}
        </Template.AddButton>
    )
}