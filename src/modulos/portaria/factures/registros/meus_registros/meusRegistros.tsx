import Template from "./meuRegistrosCs"
import Api from "../../../service/api_secundaria"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoadingSecundary } from "../../../../../components/LoadingSecundary/LoadingSecundary"
import { ItensRegistro } from "../../../../../components/ItensRegistro/itensRegistro"
import { subjetUsuarioId } from "../../../service/jwt/jwtservice"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search";


export const MeusRegistroComponets = () => {
    const usuario = subjetUsuarioId()
    const [lista, setLista] = useState<any[]>([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [busca, setBusca] = useState("")
    const hendleButton = async () => {
        if (usuario != null) {
            const resposta = await Api.solitacaoAutorizador(usuario as any, busca);
            if (resposta?.content != null) {
                setLista(resposta?.content)
                setLoading(false)
            }

        }

    }
    useEffect(() => {
        if (busca.trim() === "") {
            hendleButton()
        }

    }, [usuario, busca])

    const hendleDetalhesPedidos = (numeroDoRegistro: string) => {
        setLoading(true)
        setTimeout(
            () => {
                navigate(`/portaria/controle/detalhes-registro?order=${numeroDoRegistro}`, { replace: false, state: { refresh: Date.now() } })
                setLoading(false)

            }
            , 1000);
    }

    return (
        <Template.container>
            <Template.div>
                <Template.busca
                    placeholder="Buscar por placa, visitante ou protocolo..."
                    type="search" onChange={(e) => setBusca(e.target.value)} />
                <IconButton
                    onClick={hendleButton}
                    sx={{
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#1565c0" },
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Template.div>
            <Template.container_int>
                <ItensRegistro lista={lista} hendleDetalhesPedidos={hendleDetalhesPedidos} hendleBusca={function (): void {
                    throw new Error("Function not implemented.")
                }} visibleCount={0} loading={loading}></ItensRegistro>
                {loading &&
                    <LoadingSecundary></LoadingSecundary>
                }
            </Template.container_int>
        </Template.container>
    )
}