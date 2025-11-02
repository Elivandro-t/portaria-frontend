import Chip from "@mui/material/Chip"
import Template from "./ItensRegistroCss"

type lista = {
    lista: any[],
    hendleDetalhesPedidos: (n: any) => void,
    hendleBusca: () => void,
    visibleCount: number,
    loading: boolean
}
export const ItensRegistro = ({ lista, hendleDetalhesPedidos, hendleBusca, visibleCount, loading }: lista) => {
    const retornaCorStatus = (status: string) => {
        switch (status) {
            case "AGUARDANDO_ENTRADA":
                return "info"; // azul (Chip info)
            case "AGUARDANDO_SAIDA":
                return "warning"; // amarelo
            case "SAIDA_LIBERADA":
                return "success"; // verde
            default:
                return "error"; // vermelho
        }
    };
    const exibirMais = () => {
        // setVisibleCount(prev=>prev+1)
        hendleBusca()
    }


    return (
        <Template.area_pedidos>
            {/* <Template.titulo>Solicitações</Template.titulo> */}
            <Template.pedidos>
                {loading ? (
                    <Template.loading>
                        <>Carregando...</>
                    </Template.loading>
                ) : lista.length === 0 ? (
                    <Template.semItens>
                        <Template.iconSemItens />
                        Nenhum item encontrado
                    </Template.semItens>
                ) : (

                    lista.map((item) => (
                        <div key={item.id}>
                            <Template.dataPedido >
                                {"Criado " + new Date(item?.dataCriacao).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </Template.dataPedido>
                            <Template.cardItem onClick={() => hendleDetalhesPedidos(item?.id)} >
                                <Template.card_item_header>
                                    <Template.numeroDoPedido>Protocolo #{item?.protocolo}</Template.numeroDoPedido>
                                    <Chip style={{ width: 150, fontSize: 10 }} color={retornaCorStatus(item?.status)} label={item?.status.replace("_", " ")} variant="outlined" />
                                </Template.card_item_header>
                                <Template.card_item_center>
                                    <Template.Image src={item?.visitante?.imagem} />
                                    <Template.Areaitem>
                                        <Template.inforLabel>
                                            <Template.Span>Placa: </Template.Span>
                                            <Template.Infor>{item.placaVeiculo}</Template.Infor>
                                        </Template.inforLabel>
                                        <Template.inforLabel>
                                            <Template.Span>Nome: </Template.Span>
                                            <Template.Infor>{item?.visitante.nomeCompleto}</Template.Infor>
                                        </Template.inforLabel>
                                        <Template.inforLabel>
                                            <Template.Span>Tipo Pessoa: </Template.Span>
                                            <Template.Infor>{item.tipPessoa}</Template.Infor>
                                        </Template.inforLabel>
                                        <Template.inforLabel>
                                            <Template.Span>Acesso: </Template.Span>
                                            <Template.Infor>{item?.visitante.tipoAcesso}</Template.Infor>
                                        </Template.inforLabel>

                                    </Template.Areaitem>
                                </Template.card_item_center>
                            </Template.cardItem>
                        </div>

                    ))
                )
                }
            </Template.pedidos>
            {visibleCount > lista.length && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <Template.buttonNext onClick={exibirMais}>Exibir mais</Template.buttonNext>
                </div>
            )}
        </Template.area_pedidos>
    )
}