import Template from "./logisticos.css"
import { ChevronRight } from "lucide-react";
type lista = {
    lista: any[],
    hendleDetalhesPedidos: (n: any) => void,
    hendleBusca: () => void,
    visibleCount: number,
    loading: boolean
}
export const ItensLogisticos = ({ lista, hendleDetalhesPedidos, hendleBusca, visibleCount, loading }: lista) => {
    const exibirMais = () => {
        hendleBusca()
    }
    return (
        <Template.area_pedidos>
            {/* <Template.titulo>Solicitações</Template.titulo> */}
            <Template.pedidos>
                {!loading && lista.length === 0 ? (
                    <Template.semItens>
                        <Template.iconSemItens />
                        Nenhum item encontrado
                    </Template.semItens>
                ) : (

                    lista.map((item) => (
                        <div key={item.id}>
                            <Template.cardItem  onClick={() => hendleDetalhesPedidos(item?.numeroFilial)}>
                                <Template.card_item_center >
                                    <Template.numeroDoPedido>{item?.numeroFilial} - {item?.nome}</Template.numeroDoPedido>
                                    <Template.btn >
                                        <ChevronRight />
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