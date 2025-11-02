import { BtnGlobal } from "../../components/btnGlobal/btnGlobal"
import { ModalComponent } from "../../components/modal/modalComponent"
import Template from "./meu_perfil_css"
import {  useForm } from "react-hook-form"
type FormData = {
    password: string,
    newPassword?: any,
    repet: string,
    usuarioId: any
};
export const PerfilResetSenha = () => {
    const {register, handleSubmit,reset,watch,formState:{errors}} = useForm<FormData>()
    const senha = watch("newPassword")
    const handlePassword=(data:any)=>{

    console.log("data "+JSON.stringify(data))
    }
    const handleReset = ()=>{
        reset()
    }
    return (
        <ModalComponent>
            <div style={{ marginBottom: 10 }}>
                <Template.container_titulo>
                    Segurança & Senha
                </Template.container_titulo>
                <Template.small>
                    Mude sua senha periodicamente para manter sua conta segura.
                </Template.small>
            </div>
            <Template.CamposInput>
                <Template.label>Senha atual
                </Template.label>
                <Template.input type="password" {...register("password")} placeholder="Senha antiga" />
            </Template.CamposInput>
            <Template.area_campo>
                <Template.CamposInput>
                    <Template.label>Nova senha</Template.label>
                    <Template.input type="password" {...register("newPassword")} placeholder="Senha nova" />
                </Template.CamposInput>
                <Template.CamposInput>
                    <Template.label {...register("repet",{
                        validate:value=>value===senha || "Senha não confere"
                    })}>Confirmar nova senha
                    </Template.label>
                    <Template.input type="password" placeholder="Repete senha" />
                </Template.CamposInput>
                
            </Template.area_campo>
            
                    <Template.Erros>
                    {errors.repet && <p>{errors.repet.message}</p>}
                </Template.Erros> 
            <Template.small>A senha precisa ter no mínimo 8 caracteres, com letras e números.
            </Template.small>
            <Template.area_btn>
                <BtnGlobal titulo="Salvar" isvalid={false} nome_btn={"undefined"} click={handleSubmit(handlePassword)} />
                <BtnGlobal titulo="Cancelar" isvalid={true} nome_btn={"undefined"} click={()=>handleReset()} />

            </Template.area_btn>
        </ModalComponent>
    )

}