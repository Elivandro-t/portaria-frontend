import { BotaoVoltar } from "../voltar/BotaoVoltar";
import Header from "./headerSecundario"
import { useNavigate } from "react-router-dom";
type props = {
    titulo:any,
    ativo:boolean
}
export const HeaderSecundarioComponent = ({titulo,ativo}:props) => {
    const navigate = useNavigate()
    const hendleHome = () => {
        navigate("/")
    }
    return (
        <>
            <Header.areaHeader>
                <Header.container>
                    
                        <Header.btnLogin>
                            {/* <Header.ButtomService onClick={hendleHome} >
                                {/* <ArrowBackIcon /> */}
                               {
                                ativo &&
                                  <BotaoVoltar/>
                               }
                    
                        </Header.btnLogin>
                     <Header.logo onClick={() => hendleHome()}>
                               {titulo}
                        </Header.logo>
                    
                </Header.container>
            </Header.areaHeader>

        </>

    )
}

//  Portaria - Controle de Acesso