import { useState } from "react";
import { HeaderSecundarioComponent } from "../../../../components/headerSecundario/HeaderSecundario";
import { HeaderPaginaInicial } from "../../../PaginaInicial/components/header/header.component";
import Template from "././homeModuloRecebimento.styled"
import { Outlet, useLocation } from "react-router-dom";

const HomeModuloRecebmento = () => {
    const location = useLocation();
const isPortaria = location.pathname === "/recebimento/dashboard";
const [menuTivo,setAtivoMenu]=useState(false)
 const handleBtn = () => {
        setAtivoMenu(!menuTivo)
    }
    return (
        <Template.container>
            {isPortaria ? (
                <HeaderPaginaInicial ativaBtnDrower={false} subtitulo="Recebimento" handleBtn={handleBtn} />
            ) : (
                <HeaderSecundarioComponent titulo={"Recebimento de Mercadoria"} ativo={true} />
            )}
            {/* <HeaderPaginaInicial subtitulo="Logistico" handleBtn={function (): void {
                throw new Error("Function not implemented.");
            } }/> */}
            {/* <HeaderSecundarioComponent titulo={"Material Logistico"} ativo={outlet&&isPortaria as any}/> */}
            <Template.Main>
                <Outlet></Outlet>
            </Template.Main>

        </Template.container>
    )
}

export default HomeModuloRecebmento;