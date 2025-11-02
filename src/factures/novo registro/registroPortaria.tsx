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
    tipoAcesso: string,
    filial?: number,
    bloco: string,
    tipPessoa: string,
    descricao: string,
    ocupacaoLiberada: string,
    criadorId: number
};
export const ocupacoes = [
    { id: 1, nome: "Presidente", codigo: "PRES" },
    { id: 2, nome: "Diretor", codigo: "DIR" },
    { id: 3, nome: "Coordenador", codigo: "COORD" },
    { id: 4, nome: "Supervisor", codigo: "SUP" },
    { id: 5, nome: "TI", codigo: "TI" },
    { id: 6, nome: "Prevenção de Perdas", codigo: "PP" },
    { id: 7, nome: "Fornecedor", codigo: "FORN" },
    { id: 8, nome: "Comprador", codigo: "COMP" },
    { id: 9, nome: "Analista", codigo: "ANA" },
    { id: 10, nome: "Programador", codigo: "PROG" }
];

export const ocupacoesLiberada = [
    { id: 1, nome: "Somente Motorista", codigo: "PRES" },
    { id: 2, nome: "Motorista e Passageiros", codigo: "DIR" },

];
export const filias = [
    { id: 1, nome: 81 },
    { id: 2, nome: 82 },
    { id: 3, nome: 116 },
    { id: 4, nome: 331 },
    { id: 5, nome: 335 },
    { id: 6, nome: 336 },
];
export const blocos = [
    { id: 1, nome: "Secos", codigo: "SEC" },
    { id: 2, nome: "Hortifrúti", codigo: "HORTI" },
    { id: 3, nome: "Frios", codigo: "FRI" },
    { id: 4, nome: "Fatiados", codigo: "FAT" },
    { id: 5, nome: "Indústria", codigo: "IND" },
    { id: 6, nome: "Spazio", codigo: "SPZ" },
    { id: 7, nome: "Oficina Caminhões", codigo: "OFI" },
    { id: 8, nome: "Material Logistico", codigo: "CAM" }
];

export const RegistrosPortaria = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [resetCounter, setResetCounter] = useState(0);


    const handleFileSelect = (file: File | null) => {
        setSelectedFile(file);
    };
    const onSubmit = async (data: FormData) => {
        const usaurio = subjet();
        if (!data.filial) {
            delete data.filial;
        }
        if (selectedFile != null) {
            data.criadorId = usaurio?.id as any;
            const resposta = await Api.salvaRegistro(data, selectedFile as any)
            if (resposta) {
                notify(resposta.msg, "success")
                reset()
                setResetCounter(prev => prev + 1)

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
                                            message: "Formato de placa inválido. Ex: ABC1234 ou ABC1D23",
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
                                            value: 10,
                                            message: "Mínimo 10 caracteres",
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
                            <Template.CamposInput>
                                <Template.label >Filial (Opcional)
                                </Template.label>
                                <Template.SelectItens {
                                    ...register("filial")}>
                                    <Template.Options value="">Selecione</Template.Options>
                                    {filias.flatMap((item) => (
                                        <Template.Options value={item.nome}>{item.nome}</Template.Options>

                                    ))}
                                </Template.SelectItens>
                                {errors.bloco && <Template.Erros><p>{errors.bloco.message}</p></Template.Erros>}
                            </Template.CamposInput>
                            <Template.Select>
                                {/* Select 1  corrigido*/}
                                <Template.leftArea>
                                    <Template.CamposInput>
                                        <Template.label>Tipo de Pessoa</Template.label>
                                        <Template.SelectItens {...register("tipPessoa", { required: "Selecione o tipo de Pessoa" })}>
                                            <Template.Options value="">Selecione</Template.Options>
                                            <Template.Options value={"visitante"}>Visitante</Template.Options>
                                            <Template.Options value={"visitante"}>Funcionário</Template.Options>
                                            <Template.Options value={"visitante"}>Gerencia</Template.Options>
                                            <Template.Options value={"visitante"}>Diretoria</Template.Options>
                                            <Template.Options value={"visitante"}>Presidente</Template.Options>
                                        </Template.SelectItens>
                                        {errors.tipPessoa && <Template.Erros><p>{errors.tipPessoa.message}</p></Template.Erros>}
                                    </Template.CamposInput>
                                    <Template.CamposInput>
                                        <Template.label >Bloco</Template.label>
                                        <Template.SelectItens {
                                            ...register("bloco", { required: "Selecione o bloco" })}>
                                            <Template.Options value="">Selecione</Template.Options>
                                            {blocos.flatMap((item) => (
                                                <Template.Options value={item.nome}>{item.nome}</Template.Options>

                                            ))}
                                        </Template.SelectItens>
                                        {errors.bloco && <Template.Erros><p>{errors.bloco.message}</p></Template.Erros>}
                                    </Template.CamposInput>
                                </Template.leftArea>
                                {/* Select 1  erro*/}

                                <Template.leftArea>
                                    <Template.CamposInput >
                                        <Template.label>Recorrência do Acesso</Template.label>
                                        <Template.SelectItens  {...register("tipoAcesso", { required: "Selecione o Tipo de acesso" })}>
                                            <Template.Options value="">Selecione</Template.Options>
                                            <Template.Options value={"unico"}>Unico</Template.Options>
                                            <Template.Options value={"recorrente"}>Recorrente</Template.Options>
                                        </Template.SelectItens>
                                        {errors.tipoAcesso && <Template.Erros><p>{errors.tipoAcesso.message}</p></Template.Erros>}
                                    </Template.CamposInput>
                                    {/* <Template.CamposInput>
                                        <Template.label>Tipo Motorista</Template.label>
                                        <Template.SelectItens {...register("tipoMotorista", { required: "Selecione o Motorista" })}>
                                            <Template.Options value="">Selecione</Template.Options>
                                            <Template.Options value={"Funcionario"}>Funcionario</Template.Options>
                                            <Template.Options value={"Tercerizado"}>Tercerizado</Template.Options>
                                        </Template.SelectItens>
                                        {errors.tipoMotorista && <Template.Erros><p>{errors.tipoMotorista.message}</p></Template.Erros>}
                                    </Template.CamposInput> */}
                                    <Template.CamposInput>
                                        <Template.label>Ocupação Liberada</Template.label>
                                        <Template.SelectItens {...register("ocupacaoLiberada", { required: "Selecione uma ocupaçao" })}>
                                            <Template.Options value="">Selecione</Template.Options>
                                            {ocupacoesLiberada.flatMap((item: any) => (
                                                <Template.Options key={item.id} value={item.nome}>{item.nome}</Template.Options>
                                            ))}
                                        </Template.SelectItens>
                                        {errors.ocupacaoLiberada && <Template.Erros><p>{errors.ocupacaoLiberada.message}</p></Template.Erros>}
                                    </Template.CamposInput>
                                </Template.leftArea>


                                <Template.CamposInput>
                                    <Template.label>OBS </Template.label>
                                    <Template.TextArea {...register("descricao", { required: "Selecione o cargo" })}></Template.TextArea>
                                    {errors.descricao && <Template.Erros><p>{errors.descricao.message}</p></Template.Erros>}
                                </Template.CamposInput>
                            </Template.Select>

                            <ImageDropZone onFileSelect={handleFileSelect} titulo={"Clique ou arraste outra imagem para substituir"} resetSignal={resetCounter} />

                            {selectedFile && <p>Arquivo selecionado: {selectedFile.name}</p>}
                            <Template.BtnLogin>Enviar Pedido</Template.BtnLogin>

                        </Template.FormSub>
                    </Template.pedidos>
                </Template.area_pedidos>
            </Template.container>
        </>
    )
}