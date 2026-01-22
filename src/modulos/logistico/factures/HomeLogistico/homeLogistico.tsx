import { useState } from "react";
import { HeaderSecundarioComponent } from "../../../../components/headerSecundario/HeaderSecundario";
import { HeaderPaginaInicial } from "../../../PaginaInicial/components/header/header.component";
import Template from "./homeLogisticoCss"
import { Outlet, useLocation } from "react-router-dom";

const HomeLogistico = () => {
    const location = useLocation();
const isPortaria = location.pathname === "/logistico/dashboard";
const [menuTivo,setAtivoMenu]=useState(false)
 const handleBtn = () => {
        setAtivoMenu(!menuTivo)
    }
    return (
        <Template.container>
            {isPortaria ? (
                <HeaderPaginaInicial ativaBtnDrower={false} subtitulo="Logistico" handleBtn={handleBtn} />
            ) : (
                <HeaderSecundarioComponent titulo={"Material Logistico"} ativo={true} />
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

export default HomeLogistico;