import { ModalComponent } from "../../../../../../components/modal/modalComponent";
import api from "../../../../service/apiUsuario"
import Template from "./peermissionCss"
import AcessoTree from "../AcessoTree/AcessoTree";
import { useState } from "react";

export const IncluirAcesso = () => {
    const [email,setEmail]=useState("")
    const [ativo, setAtivo] = useState(false)
    const [usuario, setUsuario] = useState<any>();
    const cadastrarFIlial = async (e:any) => {
        e.preventDefault()
        const resposta = await api.BuscaPefilUsuario(email);
        if (resposta.usuario) {
            setAtivo(true)
            setUsuario(resposta.usuario)
        }
    }
    const handleReset = () => {
        setAtivo(false)
        setEmail("")
    }
    return (
        <ModalComponent>
            <Template.form onSubmit={cadastrarFIlial}>
                <div style={{ marginBottom: 10 }}>
                    <Template.container_titulo>Inclusão de Acesso</Template.container_titulo>
                </div>
                <Template.area_campo>
                    <Template.CamposInput>
                        <Template.label>Email do usuario</Template.label>
                        <Template.input value={email} type="search" autoFocus onChange={(e)=>setEmail(e.target.value)} />
                    </Template.CamposInput >
                </Template.area_campo>
            </Template.form>
             {
                ativo &&
               <>
                <AcessoTree modulos={usuario?.acess} handleReset={handleReset} usuario={usuario} />
               </>
            }
        </ModalComponent>
    )

}