import { BtnGlobal } from "../../../../components/btnGlobal/btnGlobal"
import { ModalComponent } from "../../../../components/modal/modalComponent"
import Template from "./meu_perfil_css"
import apiUsuario from "../../../portaria/service/usuarioApi"
import { useForm } from "react-hook-form"
import { notify } from "../../../portaria/service/snackbarService"
type FormData = {
    senhaAntiga: string,
    novaSenha?: any,
    reperteSenha: string,
    usuarioId: number
};
export const PerfilResetSenha = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormData>()
    const senha = watch("novaSenha")
    const handlePassword = async(data: any) => {
        const order = localStorage.getItem("order");
        if (order != null) {
            data.usuarioId = order;
            const resposta = await apiUsuario.alteraSenha(data)
            if(resposta.msg){
                notify(resposta.msg,"success")
                reset()
            }

        }
    }
    const handleReset = () => {
        reset()
    }
    return (
        <ModalComponent>
            <form onSubmit={handleSubmit(handlePassword)}>
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
                    <Template.input type="password" {...register("senhaAntiga")} placeholder="Senha antiga" />
                </Template.CamposInput>
                <Template.area_campo>
                    <Template.CamposInput>
                        <Template.label>Nova senha</Template.label>
                        <Template.input hasError={!!errors.novaSenha} type="password" {...register("novaSenha", {
                            required: "Senha E obrigatorio",
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                message: "Senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial"
                            }
                        })} placeholder="Senha nova" />
                    </Template.CamposInput>
                    <Template.CamposInput>
                        <Template.label >Confirmar nova senha
                        </Template.label>
                        <Template.input type="password"
                            {...register("reperteSenha", {
                                validate: value => value === senha || "Senhas não conferem",
                                required: "Confirme Senha E obrigatorio"
                            })}
                            placeholder="Repete senha" />
                    </Template.CamposInput>

                </Template.area_campo>

                <Template.Erros>
                    {errors.reperteSenha && <p>{errors.reperteSenha.message}</p>}
                    {errors.novaSenha && <p>{errors?.novaSenha.message as any}</p>}
                </Template.Erros>
                <Template.small>A senha precisa ter no mínimo 8 caracteres, com letras e números.
                </Template.small>
                <Template.area_btn>
                    <BtnGlobal titulo="Salvar" isvalid={false} nome_btn={"undefined"} click={handleSubmit(handlePassword)} />
                    <BtnGlobal titulo="Cancelar" isvalid={true} nome_btn={"undefined"} click={handleReset} />
                </Template.area_btn>
            </form>
        </ModalComponent>
    )

}