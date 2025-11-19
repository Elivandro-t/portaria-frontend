import { useEffect, useState } from "react"
import { ModalComponent } from "../../components/modal/modalComponent"
import Template from "./controleFilialcss"
import api from "../../service/filiaisApi/filiasAPi"
import { IncluirFilial } from "./ControleListaFilial"
export const ControleFilial = () => {
    const [filiais, setFiliais] = useState<any[]>([]);
    const handleSearchFiliais = async () => {
        const resposta = await api.lista();
        if (resposta?.filial) {
            setFiliais(resposta?.filial)
        }

    }

    useEffect(() => {
        handleSearchFiliais()
    }, [])

    return (
        <>
            <Template.container >
                <Template.container_int>
                    <Template.conainter_right>
                        <IncluirFilial handle={handleSearchFiliais}/>
                    </Template.conainter_right>
                    <ModalComponent>
                        <Template.container_titulo>Filias Inclusas</Template.container_titulo>
                        {filiais.length === 0 ? (
                            <>Sem filiais</>
                        ) : (
                                <Template.area_forma >
                                    {filiais.map((item) => (

                                        <Template.CamposInput key={item?.id}>
                                            <Template.label>Filial {item?.numeroFilial}</Template.label>
                                            <Template.nomeFilial    >{item?.nome}</Template.nomeFilial>
                                        </Template.CamposInput>
                                        
                                    ))}
                                </Template.area_forma>


                        )}
                    </ModalComponent>
                </Template.container_int>
            </Template.container >


        </>
    )
}