import Template from "./registro_css"
import Api from "../../../service/api_secundaria"
import { useContext, useEffect, useState } from "react"
import { contextProvider } from "../../../reducer/userProvider/userProvider"
import { useNavigate } from "react-router-dom"
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary"
import { ItensRegistro } from "../../../components/ItensRegistro/itensRegistro"
import { subjet } from "../../../service/jwt/jwtservice"

export const MeusRegistros = () => {
    const user = subjet()
    const [size, setSize] = useState(10); // começa com 10 itens
    const [totalElements, setTotalElements] = useState(0);
    const usuario = useContext(contextProvider);
    const [lista, setLista] = useState<any[]>([])
    const carregarRegistros = async (novoSize?: number) => {
        const tamanho = novoSize ?? size;
        const resposta = await Api.Solicitacoes(user?.filial, usuario?.busca, tamanho);
        if (resposta.content != null) {
            setLista(resposta.content);
            setTotalElements(resposta.totalElements);
        }
    }

    const exibirMais = () => {
        const novoSize = size + 10; // aumenta o size em 10
        setSize(novoSize);
        carregarRegistros(novoSize);
    }
    useEffect(() => {
        carregarRegistros()
    }, [user?.filial,usuario?.busca])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const hendleDetalhesPedidos = (numeroDoRegistro: string) => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/controle/detalhes-registro?order=${numeroDoRegistro}`, { replace: true, state: { refresh: Date.now() } })
        }, 2000)
    }

    return (
        <Template.container>
            <ItensRegistro lista={lista} hendleDetalhesPedidos={hendleDetalhesPedidos} hendleBusca={exibirMais} visibleCount={totalElements} loading={loading}></ItensRegistro>
                {loading &&
                 <LoadingSecundary></LoadingSecundary>
                }
            
        </Template.container>
    )
}