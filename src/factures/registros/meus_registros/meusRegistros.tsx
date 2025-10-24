import Template from "./meuRegistrosCs"
import Api from "../../../service/api_cunsulto_produto"
import { useContext, useEffect, useState } from "react"
import { contextProvider } from "../../../reducer/userProvider/userProvider"
import { useNavigate } from "react-router-dom"
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary"
import { ItensRegistro } from "../../../components/ItensRegistro/itensRegistro"

export const MeusRegistroComponets = () => {
    const usuario = useContext(contextProvider);
    const [lista, setLista] = useState<any[]>([])
     const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if(usuario?.user!=null){
            const hendleButton = async () => {
            const resposta = await Api.solitacaoAutorizado(usuario?.user);
            if (resposta?.registros != null) {
                setLista(resposta?.registros)
                setLoading(false)
            }
        }
                 hendleButton()

        }
    }, [usuario])

    const hendleDetalhesPedidos = (numeroDoRegistro: string) => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/controle/detalhes-registro?order=${numeroDoRegistro}`, { replace: true, state: { refresh: Date.now() } })
        }, 2000)
    }

    return (
        <Template.container>
            <ItensRegistro lista={lista} hendleDetalhesPedidos={hendleDetalhesPedidos} hendleBusca={function (): void {
                throw new Error("Function not implemented.")
            } } visibleCount={0}></ItensRegistro>
                {loading &&
                 <LoadingSecundary></LoadingSecundary>
                }       
        </Template.container>
    )
}