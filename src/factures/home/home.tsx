import { Outlet, useOutlet } from "react-router-dom";
import { HeaderComponent } from "../../components/header/Header"
import Makert from "./homeCss"
import { useEffect } from "react";

export const HomeComponent = () => {
    const outlet = useOutlet();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <Makert.container>
            <HeaderComponent />
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