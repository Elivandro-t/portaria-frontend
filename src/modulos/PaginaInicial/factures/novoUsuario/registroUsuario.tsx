import { useEffect, useRef, useState } from "react";
import Template from "./registroUsuarioCss"
import { useForm } from "react-hook-form";
import { notify } from "../../../portaria/service/snackbarService";
import api from "../../service/apiUsuario";
import apiFilial from "../../../portaria/service/filiaisApi/filiasAPi";

import { subjetUsuarioId } from "../../../../jwt/jwtservice";
type FormData = {
    nome: string;
    email: string,
    ocupacaoOperacional: string,
    password: string,
    filial: number,
    perfilId: number,
    repeteSenha?: string; 
    usuarioLogado:any// só para validação

};
const ocupacao = [
    { nome: "GERENTE OPERACIONAL" },
    { nome: "GERENTE DE LOGISTICA" },
    { nome: "GERENTE DE TRANSPORTE" },
    { nome: "GERENTE DE MANUTENÇÃO" },
    { nome: "PROGRAMADOR" },
    { nome: "FISCAL" },
    { nome: "DIRETOR" },
    { nome: "SUPERVISOR" },
    { nome: "COORDENADOR" },
    { nome: "PRESIDENTE" }

]
// const filials = [
//     { id: 1, filial: 81 },
//     { id: 2, filial: 82 },
//     { id: 3, filial: 87 },
//     { id: 4, filial: 116 },
//     { id: 5, filial: 122 },
//     { id: 6, filial: 331 },
//     { id: 7, filial: 335 },
//     { id: 8, filial: 336 }
// ]
function RegistroDeUsuarioComponent(){
    const usuarioLogado = subjetUsuarioId()

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>()
    const senha = watch("password"); // observa o valor da senha

    const onSubmit = async (data: FormData) => {
        data.usuarioLogado = usuarioLogado;
        const { repeteSenha, ...dataToSend } = data; // remove repeteSenha
        const resposta = await api.cadastroUsuaro(dataToSend);
        if (resposta) {
            notify(resposta.msg, "success")
            reset()
        }
    }
    const [listaPerfil, setListaPerfil] = useState<any[]>();
     const [filiais, setFiliais] = useState<any[]>([]);
        const handleSearchFiliais = async () => {
            const resposta = await apiFilial.lista();
            if (resposta?.filial) {
                setFiliais(resposta?.filial)
            }
    
        }
    useEffect(() => {
        const hendleBnt = async () => {
            const resposta = await api.listaPerfil();
            if (resposta && resposta.perfis) {
                setListaPerfil(resposta.perfis);
            }
        }
        hendleBnt();
        handleSearchFiliais();

    }, [])

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
                <Template.titulo>Cadastro de Usuario</Template.titulo>
                <Template.FormSub onSubmit={handleSubmit(onSubmit)}>
                    <Template.CamposInput>
                        <Template.label>Nome *</Template.label>
                        <Template.Campos
                            hasError={!!errors.nome} type="text"
                            autoComplete="current-password"
                            placeholder="Nome completo"

                            {...register("nome", {
                                required: "Nome E obrigatorio"
                            })}
                            onKeyDown={(e) => focus(e, senhaRef)}
                        />
                        <Template.Erros>
                            {errors.nome && <p>{errors.nome.message}</p>}
                        </Template.Erros>
                    </Template.CamposInput>
                    <Template.CamposInput>
                        <Template.label>Email *</Template.label>
                        <Template.Campos hasError={!!errors.email} placeholder="Nome Completo" type="text"
                            autoComplete="current-password"
                            {...register("email", {
                                required: "Email e obrigatório",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Email inválido. Ex: usuario@dominio.com"
                                }
                            })}
                            onKeyDown={(e) => focus(e)}

                        />
                        <Template.Erros>
                            {errors.email && <p>{errors.email.message}</p>}
                        </Template.Erros>

                    </Template.CamposInput>
                    <Template.Select>
                        {/* Select 1  corrigido*/}
                        <Template.leftArea>
                            <Template.CamposInput>
                                <Template.label>Ocupaçao</Template.label>
                                <Template.SelectItens {...register("ocupacaoOperacional", { required: "Selecione ocupação" })}>
                                    <Template.Options value="">Selecione</Template.Options>
                                    {ocupacao.flatMap((item, index) => (
                                        <Template.Options key={index} value={item.nome}>{item.nome}</Template.Options>

                                    ))}
                                </Template.SelectItens>
                                {errors.ocupacaoOperacional && <Template.Erros><p>{errors.ocupacaoOperacional.message}</p></Template.Erros>}
                            </Template.CamposInput>
                            <Template.CamposInput>
                                <Template.label >Filial</Template.label>
                                <Template.SelectItens {...register("filial", { required: "Selecione a filial" })}>
                                    <Template.Options value="">Selecione filial</Template.Options>
                                    {filiais.flatMap((item) => (
                                        <Template.Options key={item.id} value={item?.numeroFilial}>{item?.numeroFilial} - {item?.nome}</Template.Options>

                                    ))}                                </Template.SelectItens>
                                {errors.filial && <Template.Erros><p>{errors.filial.message}</p></Template.Erros>}
                            </Template.CamposInput>
                        </Template.leftArea>
                        {/* Select 1  erro*/}
                    </Template.Select>
                    <Template.CamposInput>
                        <Template.label >Perfil</Template.label>
                        <Template.SelectItens {...register("perfilId", { required: "Selecione o perfil" })}>
                            <Template.Options value="">Selecione o perfil</Template.Options>
                            {
                                listaPerfil?.flatMap(perfil => (
                                    <Template.Options key={perfil?.id} value={perfil.id}>{perfil.nome}</Template.Options>
                                ))
                            }
                        </Template.SelectItens>
                        {errors.perfilId && <Template.Erros><p>{errors.perfilId.message}</p></Template.Erros>}
                    </Template.CamposInput>
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
                            placeholder="Confirme senha"

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

                    <Template.BtnLogin>Cadastrar Usuario</Template.BtnLogin>
                </Template.FormSub>
            </Template.container>
        </>
    )
}
export default RegistroDeUsuarioComponent;