import { useRef } from "react";
import Template from "./reseteSenhaCss"
import { useForm } from "react-hook-form";
import Api from "../../service/api"
import { notify } from "../../service/snackbarService";
type FormData = {
    idUsuario: string;
    password: string,
    repeteSenha?: string; // só para validação

};
export const AlterarSenhaUsuarioComponent = () => {

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>()
    const senha = watch("password"); // observa o valor da senha

    const onSubmit = async (data: FormData) => {
        const { repeteSenha, ...dataToSend } = data; // remove repeteSenha
        const resposta = await Api.cadastroUsuaro(dataToSend);
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
                <Template.titulo>Alterar senha de Usuario</Template.titulo>
                <Template.FormSub onSubmit={handleSubmit(onSubmit)}>
                                        <Template.CamposInput>
                        <Template.label>Senha *</Template.label>
                        <Template.Campos
                            hasError={!!errors.password} type="text"
                            autoComplete="current-password"
                            placeholder="Senha"

                            {...register("password", {
                                required: "Senha E obrigatorio",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                    message: "Senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial"
                                }
                            })}
                            onKeyDown={(e) => focus(e, senhaRef)}
                        />
                        <Template.Erros>
                            {errors.password && <p>{errors.password.message}</p>}
                        </Template.Erros>
                    </Template.CamposInput>
                    <Template.CamposInput>
                        <Template.label>Repete Senha *</Template.label>
                        <Template.Campos
                            hasError={!!errors.repeteSenha as any} type="text"
                            autoComplete="current-password"
                            placeholder="Repita a senha"

                            {...register("repeteSenha" as any, {
                                required: "Senha E obrigatorio",
                                validate: value => value === senha || "Senhas não conferem"

                            })}
                            onKeyDown={(e) => focus(e, senhaRef)}
                        />
                        <Template.Erros>
                            {errors.repeteSenha && <p>{errors.repeteSenha.message}</p>}
                        </Template.Erros>
                    </Template.CamposInput>

                    <Template.BtnLogin>Alterar senha</Template.BtnLogin>
                </Template.FormSub>
            </Template.container>
        </>
    )
}