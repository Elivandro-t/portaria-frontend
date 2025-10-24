import { useRef, useState } from "react";
import Template from "./RegistroPortariaCss"
import { useForm } from "react-hook-form";
import Api from "../../service/api"
import ImageDropZone from "./Drop/ImageDropZone";
import { notify } from "../../service/snackbarService";
import { subjet } from "../../service/jwt/jwtservice";
type FormData = {
    placaVeiculo: string;
    nomeCompleto: string,
    numeroTelefone: string,
    tipoMotorista: string,
    tipoAcesso: string,
    filial: number,
    bloco:string,
    tipPessoa: string,
    descricao: string,
    ocupacao: string,
    criadorId:number
};
export const RegistrosPortaria = () => {

    const { register, handleSubmit, formState: { errors },reset } = useForm<FormData>()
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [resetCounter, setResetCounter] = useState(0);


    const handleFileSelect = (file: File | null) => {
        setSelectedFile(file);
    };
    const onSubmit = async (data: FormData) => {
        const usaurio = subjet();
        if (selectedFile != null ) {
            data.criadorId = usaurio?.id as any;
            const resposta = await Api.salvaRegistro(data, selectedFile as any)
            if (resposta) {
                notify(resposta.msg,"success")
                reset()
                setResetCounter(prev=>prev+1)

            }
        } else {
            notify("Selecione uma imagem", "error")
        }

    };
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
                <Template.area_pedidos>
                    <Template.titulo>Novo Pedido de Acesso</Template.titulo>
                    <Template.pedidos>
                        <Template.FormSub onSubmit={handleSubmit(onSubmit)}>
                            <Template.CamposInput>
                                <Template.label>Placa *</Template.label>
                                <Template.Campos
                                    hasError={!!errors.placaVeiculo} type="text"
                                    autoComplete="current-password"
                                    placeholder="Placa do veiculo"

                                    {...register("placaVeiculo", {
                                        required: "Placa E obrigatorio",
                                        pattern: {
                                              value: /^([^0-9][^0-9][^0-9][0-9][A-Za-z0-9][0-9][0-9])/,
                                              message: "Formato de placa inválido. Ex: ABC-1234 ou ABC1D23",
                                        }
                                    })}
                                    onKeyDown={(e) => focus(e, senhaRef)}
                                />
                                <Template.Erros>
                                    {errors.placaVeiculo && <p>{errors.placaVeiculo.message}</p>}
                                </Template.Erros>
                            </Template.CamposInput>
                            <Template.CamposInput>
                                <Template.label>Pessoa *</Template.label>
                                <Template.Campos hasError={!!errors.nomeCompleto} placeholder="Nome Completo" type="text"
                                    autoComplete="current-password"
                                    {...register("nomeCompleto", {
                                        required: "Nome e obrigatória",
                                        minLength: {
                                            value: 20,
                                            message: "Mínimo 20 caracteres",
                                        },
                                    })}
                                    onKeyDown={(e) => focus(e)}

                                />
                                <Template.Erros>
                                    {errors.nomeCompleto && <p>{errors.nomeCompleto.message}</p>}
                                </Template.Erros>

                            </Template.CamposInput>
                            <Template.CamposInput>
                                <Template.label>Numero de Telefone *</Template.label>
                                <Template.Campos hasError={!!errors.nomeCompleto} placeholder="Telefone" type="tel"
                                    autoComplete="current-password"
                                    {...register("numeroTelefone", {
                                        required: "O telefone é obrigatório.",
                                        pattern: {
                                            value: /^(\+?55\s?)?(\(?\d{2}\)?\s?)?(9?\d{4}-?\d{4})$/,
                                            message: "Formato de telefone inválido. Ex: (98) 9809-9999 ou 98980999977",
                                        },
                                    })}
                                    onKeyDown={(e) => focus(e)}

                                />
                                <Template.Erros>
                                    {errors.numeroTelefone && <p>{errors.numeroTelefone.message}</p>}
                                </Template.Erros>

                            </Template.CamposInput>
                            <Template.Select>
                                {/* Select 1  corrigido*/}
                                <Template.leftArea>
                                    <Template.CamposInput>
                                    <Template.label>Tipo de Pessoa</Template.label>
                                    <Template.SelectItens {...register("tipPessoa", { required: "Selecione o tipo de Pessoa" })}>
                                        <Template.Options value="">Selecione</Template.Options>
                                        <Template.Options value={"visitante"}>Visitante</Template.Options>
                                        <Template.Options value={"visitante"}>Presidente</Template.Options>
                                    </Template.SelectItens>
                                    {errors.tipPessoa && <Template.Erros><p>{errors.tipPessoa.message}</p></Template.Erros>}
                                </Template.CamposInput>
                                <Template.CamposInput>
                                    <Template.label >Bloco</Template.label>
                                    <Template.SelectItens {...register("bloco", { required: "Selecione o bloco" })}>
                                        <Template.Options value="">Selecione</Template.Options>
                                        <Template.Options value={"Secos"}>Secos</Template.Options>
                                    </Template.SelectItens>
                                    {errors.bloco && <Template.Erros><p>{errors.bloco.message}</p></Template.Erros>}
                                </Template.CamposInput>
                                </Template.leftArea>
                                {/* Select 1  erro*/}
                                
                                <Template.leftArea>
                                     <Template.CamposInput >
                                    <Template.label>Tipo de Acesso</Template.label>
                                    <Template.SelectItens  {...register("tipoAcesso", { required: "Selecione o Tipo de acesso" })}>
                                        <Template.Options value="">Selecione</Template.Options>
                                         <Template.Options value={"unico"}>unico</Template.Options>
                                        <Template.Options value={"recorrente"}>recorrente</Template.Options>
                                    </Template.SelectItens>
                                    {errors.tipoAcesso && <Template.Erros><p>{errors.tipoAcesso.message}</p></Template.Erros>}
                                </Template.CamposInput>
                                <Template.CamposInput>
                                    <Template.label>Tipo Motorista</Template.label>
                                    <Template.SelectItens {...register("tipoMotorista", { required: "Selecione o Motorista" })}>
                                        <Template.Options value="">Selecione</Template.Options>
                                        <Template.Options value={"Funcionario"}>Funcionario</Template.Options>
                                        <Template.Options value={"Tercerizado"}>Tercerizado</Template.Options>
                                    </Template.SelectItens>
                                    {errors.tipoMotorista && <Template.Erros><p>{errors.tipoMotorista.message}</p></Template.Erros>}
                                </Template.CamposInput>
                                </Template.leftArea>
                                 <Template.CamposInput>
                                    <Template.label>Ocupação</Template.label>
                                    <Template.SelectItens {...register("ocupacao", { required: "Selecione o cargo" })}>
                                            <Template.Options value="">Selecione</Template.Options>
                                          <Template.Options value="Funcionario">Funcionario</Template.Options>
                                          <Template.Options>Presidente</Template.Options>
                                    </Template.SelectItens>
                                    {errors.ocupacao && <Template.Erros><p>{errors.ocupacao.message}</p></Template.Erros>}
                                </Template.CamposInput>
                               
                                 <Template.CamposInput>
                                    <Template.label>OBS </Template.label>
                                     <Template.TextArea {...register("descricao",{required:"Selecione o cargo"})}></Template.TextArea>
                                     {errors.descricao && <Template.Erros><p>{errors.descricao.message}</p></Template.Erros>}
                                </Template.CamposInput>
                            </Template.Select>
                            
                            <ImageDropZone onFileSelect={handleFileSelect} titulo={"Clique ou arraste outra imagem para substituir"} resetSignal={resetCounter}/>

                            {selectedFile && <p>Arquivo selecionado: {selectedFile.name}</p>}
                            <Template.BtnLogin>Enviar Pedido</Template.BtnLogin>

                        </Template.FormSub>
                    </Template.pedidos>
                </Template.area_pedidos>
            </Template.container>
        </>
    )
}