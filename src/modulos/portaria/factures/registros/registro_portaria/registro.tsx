import Template from "./registro_css"
import Api from "../../../service/api_secundaria"
import { useContext, useEffect, useRef, useState } from "react"
import { contextProvider } from "../../../../../reducer/userProvider/userProvider"
import { useNavigate } from "react-router-dom"
import { LoadingSecundary } from "../../../../../components/LoadingSecundary/LoadingSecundary"
import { ItensRegistro } from "../../../../../components/ItensRegistro/itensRegistro"
import { subjet } from "../../../../../jwt/jwtservice"
import { BtnGlobal } from "../../../../../components/btnGlobal/btnGlobal"
function MeusRegistros() {
    const user = subjet()
    const [size, setSize] = useState(20); // começa com 10 itens
    const [totalElements, setTotalElements] = useState(0);
    const context = useContext(contextProvider);
    const [lista, setLista] = useState<any[]>([])
    const [loadingItens, setLoadingItens] = useState(false);
    const [status, setStatus] = useState("")
    const carregarRegistros = async (novoSize?: number) => {
        if (loadingItens) return; // Se já estiver carregando, bloqueia novas chamadas
        const filLocal = localStorage.getItem("@App:filial");
        const filial = filLocal && filLocal !== "undefined"
            ? filLocal
            : user?.filial;

        if (!filial) {
            console.warn("Filial inválida, busca cancelada");
            return;
        }
        setLoadingItens(true);
        const tamanho = novoSize ?? size;
        try {
            const resposta = await Api.Solicitacoes(filial, context?.busca, tamanho, status);
            if (resposta.content) {
                setLista(resposta.content);
                setTotalElements(resposta.totalElements);
            }
        } finally {
            // Delay artificial para o usuário "sentir" o carregamento e não carregar tudo de uma vez
            setLoadingItens(false);
        }
    }
    const buscaAnterior = useRef<string | null>(null);

    const exibirMais = () => {
        if (!loadingItens && lista.length < totalElements) {
            const novoSize = size + 5; // Carregando de 5 em 5 como solicitado
            setSize(novoSize);
            carregarRegistros(novoSize);
        }
    }
    useEffect(() => {
        if (
            buscaAnterior.current &&
            (!context?.busca || context.busca.trim() === "")
        ) {
            setStatus("aguardando entrada"); // volta para geral
        }
        buscaAnterior.current = context?.busca ?? null;

        setLista([]);
        setSize(20);
        carregarRegistros(20);

    }, [user?.filial, status, context?.busca, context?.filial]);

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const hendleDetalhesPedidos = (numeroDoRegistro: string) => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/portaria/controle/detalhes-registro?order=${numeroDoRegistro}`)
        }, 500);
    }
    const handleFiltroEntrada = () => {
        setStatus("aguardando entrada");
    }
    const handleFiltroSaida = () => {
        setLista([])
        setStatus("aguardando saida");
        setSize(10)
    }
    return (
        <Template.container>
            <Template.container_int>
                <BtnGlobal titulo={"Entrada"} click={handleFiltroEntrada} isvalid={status === "aguardando entrada"}></BtnGlobal>
                <BtnGlobal titulo={"Saida"} click={handleFiltroSaida} isvalid={status == "aguardando saida"}> </BtnGlobal>

            </Template.container_int>
            <ItensRegistro lista={lista} hendleDetalhesPedidos={hendleDetalhesPedidos} hendleBusca={exibirMais} visibleCount={totalElements} loading={loadingItens}></ItensRegistro>
            {loading &&
                <LoadingSecundary></LoadingSecundary>
            }

        </Template.container>
    )
}
export default MeusRegistros;

