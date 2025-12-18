import { BotaoVoltar } from "../voltar/BotaoVoltar";
import Header from "./headerSecundario"
import { useNavigate } from "react-router-dom";
export const HeaderSecundarioComponent = () => {
    const navigate = useNavigate()
    const hendleHome = () => {
        navigate("/portaria")
    }
    return (
        <>
            <Header.areaHeader>
                <Header.container>
                    
                        <Header.btnLogin>
                            {/* <Header.ButtomService onClick={hendleHome} >
                                {/* <ArrowBackIcon /> */}
                                <BotaoVoltar/>
                    
                        </Header.btnLogin>
                     <Header.logo onClick={() => hendleHome()}>
                                Portaria - Controle de Acesso
                        </Header.logo>
                    
                </Header.container>
            </Header.areaHeader>

        </>

    )
}