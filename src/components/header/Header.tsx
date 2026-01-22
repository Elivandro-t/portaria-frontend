import { PerfilComponet } from "../perfilComponentHeader/perfilComponet"
import Header from "./header"
import { useNavigate } from "react-router-dom";
import { Logued } from "../../modulos/portaria/service/Logued"
import { useContext } from "react";
import { contextProvider } from "../../reducer/userProvider/userProvider";
import { subjet } from "../../jwt/jwtservice";
import logo from "../../assets/logo portaria (1).png"
type props = {
    ativoBusca?: any,
    filial?:any
}
export const HeaderComponent = ({ ativoBusca,filial }: props) => {
    const { setBusca } = useContext(contextProvider) as any;
    const usuario = subjet();
    const navigate = useNavigate()

    const handleHome = () => {
        navigate("/")
    }

    return (
        <>
            <Header.areaHeader>
                <Header.container>
                    <Header.areaLogo>
                      <Header.logo src={logo} onClick={handleHome}/>
                      <span onClick={handleHome}>CD - {filial}</span>
                    </Header.areaLogo>
                    
                    {ativoBusca &&
                        <Header.busca placeholder="Buscar por placa, visitante ou protocolo..." type="search" onChange={e => setBusca(e.target.value)} />
                    }

                    {Logued() && (
                        <Header.perfil>
                            {usuario && usuario?.nome &&
                                <Header.nomeUsuario><strong>Olá</strong> {usuario?.nome.split(" ")[0]}</Header.nomeUsuario>
                            }
                            <PerfilComponet />
                        </Header.perfil>
                    )
                    }
                </Header.container>
            </Header.areaHeader>

        </>

    )
}