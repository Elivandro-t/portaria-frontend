import { PerfilComponet } from "../perfilComponentHeader/perfilComponet"
import Header from "./header"
import { useNavigate } from "react-router-dom";
import { Logued } from "../../service/Logued"
import { useContext } from "react";
import { contextProvider } from "../../reducer/userProvider/userProvider";
import { subjet } from "../../service/jwt/jwtservice";
import logo from "../../assets/logo portaria (1).png"
export const HeaderComponent = () => {
    const { setBusca } = useContext(contextProvider) as any;
    const usuario = subjet();
    const navigate = useNavigate()

    const hendleHome = () => {
        navigate("/portaria")
    }

    return (
        <>
            <Header.areaHeader>
                <Header.container>

                    <Header.logo src={logo} onClick={() => hendleHome()}>
                    </Header.logo>

                    <Header.busca placeholder="Buscar..." type="search" onChange={e => setBusca(e.target.value)} />

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