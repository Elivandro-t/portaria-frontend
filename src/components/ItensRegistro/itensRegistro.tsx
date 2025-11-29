import Chip from "@mui/material/Chip"
import Template from "./ItensRegistroCss"
import { ChevronRight } from "lucide-react";

import { Alert, Button } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CardSkeleton from "../skeleton/registroSkeleon/registroSkelen";
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
    const handleConvertData = (data: any) => {
        const date = new Date(data);

        const day = String(date.getDate()).padStart(2, "0"); // dia com 2 dígitos
        const month = String(date.getMonth() + 1).padStart(2, "0"); // mês (0-indexado)
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day}/${month}/${year} às ${hours}:${minutes}`;
    };
    const handleConvetData = (data: any) => {
        return new Date(data).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }
    const renderSkeletons = () => {
        return Array.from({ length: 4 }).map((_, i) => (
            <CardSkeleton key={i} />
        ));
    };
    return (
        <Template.area_pedidos>
            {/* <Template.titulo>Solicitações</Template.titulo> */}
            <Template.pedidos>
                {loading ? (
                    renderSkeletons()
                ) : !loading && lista.length === 0 ? (
                    <Template.semItens>
                        <Template.iconSemItens />
                        Nenhum item encontrado
                    </Template.semItens>
                ) : (

                    lista.map((item) => (
                        <div key={item.id}>
                            <Template.dataPedido >
                                {"Criado " + handleConvetData(item?.dataCriacao)}
                            </Template.dataPedido>
                            <Template.cardItem  >
                                {item?.prioridadeAtrasoAtivo &&
                                    <Alert icon={<WarningAmberIcon fontSize="small" sx={{ fontSize: '0.75rem' }} />} severity="warning"
                                        sx={{
                                            padding: "0 5px",
                                            fontSize: "0.52rem",
                                            display: "flex",
                                            alignItems: "center",
                                            "& .MuiAlert-icon": {
                                                fontSize: "0.9rem",
                                                marginRight: "4px",
                                            }

                                        }}
                                    >
                                        {item.prioridadeAviso ? item.prioridadeAviso : item.prioridadeAtraso}
                                    </Alert>
                                }
                                <Template.card_item_header>
                                    <Template.numeroDoPedido>Protocolo #{item?.protocolo}</Template.numeroDoPedido>
                                    <Template.AreaStatus>
                                        <Chip style={{ width: 140, fontSize: 9 }} color={retornaCorStatus(item?.status)} label={item?.status.replace("_", " ")} variant="outlined" />
                                        {item?.entrada?.dataEntrada &&
                                            <span style={{ fontSize: 11 }}><strong>Entrada: </strong><small>{handleConvertData(item?.entrada?.dataEntrada)}</small></span>

                                        }

                                    </Template.AreaStatus>
                                </Template.card_item_header>
                                <Template.card_item_center>
                                    <Template.Image src={item?.visitante?.imagem} />
                                    <Template.Areaitem>
                                        <Template.inforLabel>
                                            <Template.Span>Placa: </Template.Span>
                                            <Template.Infor>{item?.placaVeiculo}</Template.Infor>
                                        </Template.inforLabel>
                                        <Template.inforLabel>
                                            <Template.Span>Nome: </Template.Span>
                                            <Template.Infor>{item?.visitante?.nomeCompleto.toUpperCase().split(" ")[0]}</Template.Infor>
                                        </Template.inforLabel>
                                        <Template.inforLabel>
                                            <Template.Span>Tipo de Pessoa: </Template.Span>
                                            <Template.Infor>{item.tipPessoa.toUpperCase()}</Template.Infor>
                                        </Template.inforLabel>
                                        <Template.inforLabel>
                                            <Template.Span>Acesso: </Template.Span>
                                            <Template.Infor>{item?.visitante?.recorrencia?.nome}</Template.Infor>
                                        </Template.inforLabel>

                                    </Template.Areaitem>
                                    <Template.btn>
                                        <Button
                                            onClick={() => hendleDetalhesPedidos(item?.id)}
                                            variant="contained"
                                            sx={{
                                                width: { xs: 40, sm: 45, md: 56 },   // mobile first
                                                height: { xs: 40, sm: 45, md: 48 },
                                                minWidth: "auto",
                                                borderRadius: { xs: "10px", sm: "12px", md: "14px" },
                                                background: "linear-gradient(135deg, #42A5F5, #1E88E5)",
                                                boxShadow: "0 3px 8px rgba(30,136,229,0.28)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "0.25s",
                                                padding: 0,
                                                "& svg": {
                                                    fontSize: { xs: "20px", sm: "22px" }, // ícone também reduz no celular
                                                },
                                                "&:hover": {
                                                    background: "linear-gradient(135deg, #1E88E5, #1565C0)",
                                                    boxShadow: "0 6px 16px rgba(21,101,192,0.35)",
                                                    transform: "translateY(-2px)",
                                                },
                                            }}
                                        >
                                            <ChevronRight />
                                        </Button>
                                    </Template.btn>
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