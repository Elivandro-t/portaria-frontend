import { useNavigate } from "react-router-dom";
import Template from "./PaginaInicialCss";
import { Fragment, useContext, useEffect, useMemo, useState } from "react";
import apiModulos from "./service/moduleApi"
import { subjet } from "../portaria/service/jwt/jwtservice";
import { Logued } from "../portaria/service/Logued";
import IconButton from "@mui/material/IconButton";
import { contextProvider } from "../../reducer/userProvider/userProvider";
import Avatar from "@mui/material/Avatar";
function PaginaInicial() {
    const usuario = subjet();
    const navigate = useNavigate();
    const handlenavigate = (router: any) => {
        navigate(router, { replace: true })
    }
    const [menu, setModule] = useState<any[]>([]);
      const contex = useContext(contextProvider)
    
    useEffect(() => {
        const handleApi = async () => {
            const json = await apiModulos.modulo(usuario?.id);
            if (json) {
                setModule(json?.acess);

            }
        }
        handleApi()
    }, [])
    // p=>perfil.permissoes.includes(p))

    useEffect(() => {
        if (menu?.length === 1) {
            navigate(menu[0].router, { replace: true });
        };
    }, [menu])
    return (
        <Template.container>
            <Template.header>
                <h1>Gestão de Acessos</h1>
                {Logued() && (
                    <Template.perfil>
                        {usuario && usuario?.nome &&
                            <Template.nomeUsuario><strong>Olá</strong> {usuario?.nome.split(" ")[0]}</Template.nomeUsuario>
                        }
                        <IconButton>
                                   {contex?.usuario?.avatar ? (
                                     <Avatar style={{ objectFit: "contain" }} alt={usuario?.nome} src={contex?.usuario?.avatar} />
                                   ) : (
                                     <Avatar alt={usuario?.nome} src="/static/images/avatar/2.jpg" />
                       
                                   )
                                   }
                       </IconButton>
                    </Template.perfil>
                )
                }
            </Template.header>
            <Template.container_2>
                {menu.length === 0 &&
                    <Template.semItens>
                        <Template.iconSemItens />
                        Sem permissão encontrada
                    </Template.semItens>
                }
                {menu.length > 0 &&
                
                    <Fragment>
                        <Template.titulo>Modulos:</Template.titulo>

                        <Template.grid>
                            {menu.map((item, index) => (
                                <Template.link key={index} onClick={() => handlenavigate(item.router)}>
                                    <Template.card_title>{item?.titulo}</Template.card_title>
                                    <Template.card_desc>{item?.subtitulo}</Template.card_desc>
                                </Template.link>

                            ))}

                        </Template.grid>
                    </Fragment>
}
            </Template.container_2>
            <Template.footer>© Elivandro</Template.footer>
        </Template.container>
    )
}
export default PaginaInicial;