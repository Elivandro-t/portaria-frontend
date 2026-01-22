import { Outlet } from "react-router-dom";
import Template from "./PaginaInicialCss";
import { useEffect, useState } from "react";
import { HeaderPaginaInicial } from "./components/header/header.component";
import { MenuDropComponent } from "./components/menu/menu.drower";
function PaginaInicial() {

    useEffect(() => {
        // remove o scroll
        document.body.style.overflow = "hidden";

        return () => {
            // restaura o scroll ao sair da página
            document.body.style.overflow = "auto";
        };
    }, []);

    const [ativoMenu, setAtivoMenu] = useState(false)
    const handleBtn = () => {
        setAtivoMenu(!ativoMenu)
    }
    const ativo = true;
    return (
        <Template.container>
            <HeaderPaginaInicial ativaBtnDrower={ativo}  handleBtn={handleBtn} />
            <Template.main>
                {ativoMenu &&
                    <MenuDropComponent handleBtn={handleBtn} ></MenuDropComponent>
                }
                <Template.scroll>
                    <Outlet></Outlet>

                </Template.scroll>
            </Template.main>
        </Template.container>
    )
}
export default PaginaInicial;




// {ativoMenu &&
//                     <MenuDropComponent handleBtn={handleBtn} module={menu} moduleIcone={retornaIcone} ></MenuDropComponent>
//                 }
//                 <Template.container_2>
//                     {menu.length === 0 &&
//                         <Template.semItens>
//                             <Template.iconSemItens />
//                             Sem permissão encontrada
//                         </Template.semItens>
//                     }
//                     {menu.length > 0 &&

//                         <Template.scroll>
//                             {/* <Template.titulo>Modulos:</Template.titulo> */}

//                             <Template.grid>
//                                 {menu.map((item, index) => (
//                                     <Template.link key={index} onClick={() => handlenavigate(item.router)}>
//                                         {retornaIcone(item?.permission_name, 28)}
//                                         <Template.card_title>{item?.titulo}</Template.card_title>
//                                         <Template.card_desc>{item?.subtitulo}</Template.card_desc>
//                                     </Template.link>

//                                 ))}


//                             </Template.grid>

//                         </Template.scroll>
//                     }
//                     <Template.footer>© Elivandro</Template.footer>

//                 </Template.container_2>