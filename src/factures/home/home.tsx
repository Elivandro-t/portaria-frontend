import { Outlet, useOutlet } from "react-router-dom";
import { HeaderComponent } from "../../components/header/Header"
import Makert from "./homeCss"
import { useEffect } from "react";
import { subjet } from "../../service/jwt/jwtservice";
export const HomeComponent = () => {
    const user = subjet()
    const isPortaria = location.pathname === "/portaria/pendentes";

    const outlet = useOutlet();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <Makert.container>
            <HeaderComponent filial={user?.filial} ativoBusca={outlet&&isPortaria} />
            <Makert.Container_int>
                {outlet ? (
                    <Outlet />
                ) : (
                    <Makert.PlaceholderContainer>
                        <div className="emoji">🛡️</div>
                        <h2 className="title">Bem-vindo à Portaria!</h2>
                        <p className="description">
                            Use o menu à esquerda para navegar entre as opções, visualizar registros, e gerenciar usuários.
                        </p>
                    </Makert.PlaceholderContainer>
                )
                }
            </Makert.Container_int>
        </Makert.container>
    )
}