import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { subjet } from "../../../../../jwt/jwtservice";
import serviceTipoPessoa from "../../../service/tipoPessoaApi/serviceTipoPessoa";
import Template from "../RegistroPortariaCss"
import Api from "../../../service/apiRegistro/apiRegistro"
import BlocosApi from "../../../service/api_secundaria"
import { notify } from "../../../service/snackbarService";
import { BtnGlobal } from "../../../../../components/btnGlobal/btnGlobal";

// import DropPrincipal from "../../components/DropPrincipal/ImageDropZone";

type FormData = {
    typeMethod: "VISITANTE" | "NAO_VISITANTE",
    visitanteId: number,
    tipoAcesso?: string,
    bloco: string,
    descricao?: string,
    ocupacaoLiberada: string,
    criadorId: number,
    globalAtivo?: any,
    dataAcesso?: any,
};
type VisitanteData = {
    id: any,
    nomeCompleto?: string;
    imagem?: string; // Assumindo que a URL da imagem virá aqui
    // Adicione outras propriedades relevantes do visitante aqui:
    tipoPessoa?: string;
    categoriaAcesso?: string;
    placaVeiculo?: string;
    numeroTelefone: any
    // ... outras propriedades que a API retorna
};

// 2. Defina a interface (ou tipo) para as props do SlidePortariaComponent
type SlideProps = {
    visitante: VisitanteData;
    tipo: () => void
};
const Resize = styled.span`
  color: red;
  `;

export const ocupacoesLiberada = [
    { id: 1, nome: "Somente Motorista", codigo: "PRES" },
    { id: 2, nome: "Motorista e Passageiros", codigo: "DIR" },

];
export const SlidePortariaComponent = ({ visitante, tipo }: SlideProps) => {

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>({
        defaultValues: {
            globalAtivo: "false",   // ou "true"
        }
    })
    const [recorrencia, setRecorrencia] = useState<any[]>([])
    const usuario = subjet()
    const permissions: string[] = usuario?.permissoes || [];
    const [blocos, setBlocos] = useState<any[]>([])
    const permissionEdit = permissions.includes("GERENCIAR_USUARIOS")
    const tipoAcesso = watch("tipoAcesso");
    const [bloqueioBTN, setbloqueioBTN] = useState(false);
    const onSubmit = async (data: FormData) => {
        try {
            setbloqueioBTN(true)
            const usuario = subjet();
            if (!data.descricao) {
                delete data.descricao;
            }
            data.criadorId = usuario?.id as any;
            const acess = tipoAcesso?.toUpperCase() === "RECORRENTE TEMPORARIO";
            if (!acess) {
                delete data.dataAcesso
            }
            data.typeMethod = "VISITANTE";
            data.visitanteId = visitante?.id
            if(tipoAcesso==null){
               data.tipoAcesso = visitante.categoriaAcesso;
            }
            const resposta = await Api.RegistroFactory(data);
            if (resposta) {
                setbloqueioBTN(false)
                notify(resposta.msg, "success")
                reset()

            }
        } finally {
            setbloqueioBTN(false)
        }

    };
    const handleCancelar = () => {
        tipo()
        reset()
    }
    const focus = (
        event: React.KeyboardEvent<HTMLInputElement>,
        nextRef?: React.RefObject<HTMLInputElement | null>
    ) => {
        if (event.key === "Enter") {
            nextRef?.current?.focus();
        }
    };

    const buscar_recorencia = async () => {

        const resposta = await serviceTipoPessoa.recorrecia();
        if (resposta.recorrencia) {
            setRecorrencia(resposta.recorrencia)
        }

    }


    const hendleBusca = async () => {
        const resposta = await BlocosApi.blocos();
        if (resposta.blocos) {
            setBlocos(resposta?.blocos);

        }
    }
    useEffect(() => {
        buscar_recorencia();
        hendleBusca();
    }, []);
    return (
        <>
            <Template.container>
                <Template.area_pedidos>
                    <Template.CardCentro >
                        <Template.Image src={visitante?.imagem} />
                        <Template.ItemDetails>
                            <Template.AreaItemJust>
                                <Template.Label>Nome Completo:</Template.Label>
                                <Template.LabelSubtitulo>{visitante?.nomeCompleto}</Template.LabelSubtitulo>
                            </Template.AreaItemJust>
                            <Template.AreaItemJust>
                                <Template.Label>Tipo de Pessoa:</Template.Label>
                                <Template.LabelSubtitulo>
                                    {visitante?.tipoPessoa}
                                </Template.LabelSubtitulo>
                            </Template.AreaItemJust>
                            {/* <p><strong>Data entrada:</strong> <Template.Bold>1100011</Template.Bold></p> */}
                        </Template.ItemDetails>
                        <Template.ItemDetails>
                            <Template.AreaItemJust>
                                <Template.Label>Categoria de Acesso:</Template.Label>
                                <Template.LabelSubtitulo>{visitante?.categoriaAcesso}</Template.LabelSubtitulo>
                            </Template.AreaItemJust>
                            <Template.AreaItemJust>
                                <Template.Label>NumeroTelefone:</Template.Label>
                                <Template.LabelSubtitulo>{visitante?.numeroTelefone}</Template.LabelSubtitulo>
                            </Template.AreaItemJust>
                            {/* <p><strong>Data entrada:</strong> <Template.Bold>1100011</Template.Bold></p> */}
                        </Template.ItemDetails>
                    </Template.CardCentro>
                    <Template.pedidos>
                        <Template.FormSub >
                            <Template.Select>
                                {/* Select 1  corrigido*/}
                                <Template.leftArea>
                                    <Template.CamposInput>
                                        <Template.label >Bloco<Resize>*</Resize></Template.label>
                                        <Template.SelectItens {
                                            ...register("bloco", { required: "Selecione o bloco" })}>
                                            <Template.Options value="">Selecione</Template.Options>
                                            {blocos.flatMap((item) => (
                                                <Template.Options value={item?.nome.toUpperCase()}>{item?.nome.toUpperCase()}</Template.Options>

                                            ))}
                                        </Template.SelectItens>
                                        {errors.bloco && <Template.Erros><p>{errors?.bloco?.message}</p></Template.Erros>}
                                    </Template.CamposInput>
                                </Template.leftArea>
                                {/* Select 1  erro*/}

                                <Template.leftArea>
                                    {permissionEdit &&
                                        <Template.CamposInput >
                                            <Template.label>Recorrência do Acesso <Resize>*</Resize></Template.label>
                                            <Template.SelectItens  {...register("tipoAcesso", { required: "Selecione o Tipo de acesso" })}>
                                                <Template.Options value="">Selecione</Template.Options>
                                                {recorrencia.map(rec => (
                                                    <Template.Options value={rec?.nome.toLowerCase()}>{rec?.nome}</Template.Options>

                                                ))}
                                            </Template.SelectItens>
                                            {errors.tipoAcesso && <Template.Erros><p>{errors.tipoAcesso.message}</p></Template.Erros>}

                                        </Template.CamposInput>

                                    }                                    {permissionEdit && tipoAcesso?.toUpperCase() === "RECORRENTE" &&
                                        <Template.CamposInput>
                                            <Template.label >Global?
                                            </Template.label>
                                            <Template.labelCheck style={{ display: "flex" }}>
                                                <Template.checkbox type="radio" value="true" {
                                                    ...register("globalAtivo")} />
                                                <small>Sim</small>
                                            </Template.labelCheck>
                                            <Template.labelCheck>
                                                <Template.checkbox type="radio" value="false"{
                                                    ...register("globalAtivo")} />
                                                <small>Não</small>
                                            </Template.labelCheck>
                                        </Template.CamposInput>
                                    }
                                    <Template.CamposInput>
                                        <Template.label>Ocupação Liberada <Resize>*</Resize></Template.label>
                                        <Template.SelectItens {...register("ocupacaoLiberada", { required: "Selecione uma ocupaçao" })}>
                                            <Template.Options value="">Selecione</Template.Options>
                                            {ocupacoesLiberada.flatMap((item: any) => (
                                                <Template.Options key={item.id} value={item.nome}>{item.nome}</Template.Options>
                                            ))}
                                        </Template.SelectItens>
                                        {errors.ocupacaoLiberada && <Template.Erros><p>{errors.ocupacaoLiberada.message}</p></Template.Erros>}
                                    </Template.CamposInput>
                                </Template.leftArea>

                                {tipoAcesso?.toUpperCase() === "RECORRENTE TEMPORARIO" &&
                                    <Template.CamposInput>
                                        <Template.label>Data <Resize>*</Resize></Template.label>
                                        <Template.Campos
                                            hasError={!!errors.dataAcesso} placeholder="data" type="date"
                                            autoComplete="current-password"
                                            {...register("dataAcesso", {
                                                required: "A data é obrigatória para acesso recorrente temporário"
                                            })}
                                            onKeyDown={(e) => focus(e)}

                                        />
                                        {errors.dataAcesso && <Template.Erros><p>{errors.dataAcesso.message as any}</p></Template.Erros>}
                                    </Template.CamposInput>
                                }
                                <Template.CamposInput>
                                    <Template.label>OBS</Template.label>
                                    <Template.TextArea {...register("descricao")}></Template.TextArea>
                                </Template.CamposInput>
                            </Template.Select>

                        </Template.FormSub>
                        <Template.btnDivider>
                            <Template.BtnLogin disabled={bloqueioBTN} onClick={handleSubmit(onSubmit)}>Enviar Pedido</Template.BtnLogin>
                            <BtnGlobal click={handleCancelar} nome_btn={"red"} isvalid={true}>Limpar</BtnGlobal>
                        </Template.btnDivider>
                    </Template.pedidos>
                </Template.area_pedidos>
            </Template.container>
        </>
    )
}