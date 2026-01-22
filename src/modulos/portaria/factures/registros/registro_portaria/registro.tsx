import Template from "./registro_css"
import Api from "../../../service/api_secundaria"
import { useContext, useEffect, useState } from "react"
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
    const usuario = useContext(contextProvider);
    const [lista, setLista] = useState<any[]>([])
    const [loadingItens, setLoadingItens] = useState(false);
    const [status, setStatus] = useState("")
    const carregarRegistros = async (novoSize?: number) => {
        if (loadingItens) return; // Se já estiver carregando, bloqueia novas chamadas

        setLoadingItens(true);
        const tamanho = novoSize ?? size;

        try {
            const resposta = await Api.Solicitacoes(user?.filial, usuario?.busca, tamanho, status);
            if (resposta.content) {
                setLista(resposta.content);
                setTotalElements(resposta.totalElements);
            }
        } finally {
            // Delay artificial para o usuário "sentir" o carregamento e não carregar tudo de uma vez
            setTimeout(() => {
                setLoadingItens(false);
            }, 800);
        }
    }
    const exibirMais = () => {
        if (!loadingItens && lista.length < totalElements) {
            const novoSize = size + 5; // Carregando de 5 em 5 como solicitado
            setSize(novoSize);
            carregarRegistros(novoSize);
        }
    }
    useEffect(() => {
        carregarRegistros()
        setTimeout(() => {
            setLoadingItens(false)
        }, 3000)

    }, [user?.filial, usuario?.busca, status])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const hendleDetalhesPedidos = (numeroDoRegistro: string) => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/portaria/controle/detalhes-registro?order=${numeroDoRegistro}`, { replace: false, state: { refresh: Date.now() } })
        }, 2000)
    }
    const handleFiltroEntrada = () => {
        setStatus("aguardando entrada");
    }
    const handleFiltroSaida = () => {
        setStatus("aguardando saida");

    }
    return (
        <Template.container>
            <Template.container_int>
                <BtnGlobal titulo={"Entrada"} click={handleFiltroEntrada} isvalid={true}> </BtnGlobal>
                <BtnGlobal titulo={"Saida"} click={handleFiltroSaida} isvalid={false}> </BtnGlobal>

            </Template.container_int>
            <ItensRegistro lista={lista} hendleDetalhesPedidos={hendleDetalhesPedidos} hendleBusca={exibirMais} visibleCount={totalElements} loading={loadingItens}></ItensRegistro>
            {loading &&
                <LoadingSecundary></LoadingSecundary>
            }
             
        </Template.container>
    )
}
export default MeusRegistros;