import Template from "./registro_css"
import Api from "../../../service/api_secundaria"
import { useContext, useEffect, useState } from "react"
import { contextProvider } from "../../../reducer/userProvider/userProvider"
import { useNavigate } from "react-router-dom"
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary"
import { ItensRegistro } from "../../../components/ItensRegistro/itensRegistro"
import { subjet } from "../../../service/jwt/jwtservice"
import { BtnGlobal } from "../../../components/btnGlobal/btnGlobal"

export const MeusRegistros = () => {
    const user = subjet()
    const [size, setSize] = useState(10); // começa com 10 itens
    const [totalElements, setTotalElements] = useState(0);
    const usuario = useContext(contextProvider);
    const [lista, setLista] = useState<any[]>([])
    const [loadingItens, setLoadingItens] = useState(false);
    const [status,setStatus]=useState("")
    const carregarRegistros = async (novoSize?: number) => {
        setLoadingItens(true)
        const tamanho = novoSize ?? size;
        const resposta = await Api.Solicitacoes(user?.filial, usuario?.busca, tamanho,status);
        if (resposta.content != null) {
            setLoadingItens(false)
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
        setTimeout(() => {
            setLoadingItens(false)
        }, 3000)

    }, [user?.filial, usuario?.busca,status])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const hendleDetalhesPedidos = (numeroDoRegistro: string) => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/controle/detalhes-registro?order=${numeroDoRegistro}`, { replace: false, state: { refresh: Date.now() } })
        }, 2000)
    }
   const handleFiltroEntrada = ()=>{
     setStatus("aguardando entrada");
   }
   const handleFiltroSaida = ()=>{
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