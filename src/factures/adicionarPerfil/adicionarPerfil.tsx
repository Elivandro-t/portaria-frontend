import { useRef } from "react";
import Template from "./adicionarPerfilCss"
import { useForm } from "react-hook-form";
import Api from "../../service/api"
import { notify } from "../../service/snackbarService";
type FormData = {
    nome: string,

};
export const AdicionarPerfilRouter = () => {

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        const resposta = await Api.cadastroUsuaro(data);
        if (resposta) {
            notify(resposta.msg, "success")
            reset()
        }
    }

    const senhaRef = useRef<HTMLInputElement>(null);
    const focus = (
        event: React.KeyboardEvent<HTMLInputElement>,
        nextRef?: React.RefObject<HTMLInputElement | null>
    ) => {
        if (event.key === "Enter") {
            // event.preventDefault();
            nextRef?.current?.focus();
        }
    };

    return (
        <>
            <Template.container>
                <Template.titulo>Criar Perfil</Template.titulo>
                <Template.FormSub onSubmit={handleSubmit(onSubmit)}>
                                        <Template.CamposInput>
                        <Template.label>Senha *</Template.label>
                        <Template.Campos
                            hasError={!!errors.nome} type="text"
                            autoComplete="current-password"
                            placeholder="Senha"

                            {...register("nome", {
                                required: "Senha E obrigatorio",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                    message: "Senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial"
                                }
                            })}
                            onKeyDown={(e) => focus(e, senhaRef)}
                        />
                        <Template.Erros>
                            {errors.nome && <p>{errors.nome.message}</p>}
                        </Template.Erros>
                    </Template.CamposInput>
                    <Template.BtnLogin>Cria Perfil</Template.BtnLogin>
                </Template.FormSub>
            </Template.container>
        </>
    )
}