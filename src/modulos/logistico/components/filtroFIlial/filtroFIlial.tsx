import { MdRefresh } from "react-icons/md"
import Template from "../../factures/Dashboard/Dashboard.css"
interface Props{
    listaFiliais:any[],
    loadingRel:boolean,
    carregarDadosLogistico:(n:any)=>void,
    handleClick:()=>void

}
export function FiltroFIlial({listaFiliais,loadingRel,carregarDadosLogistico,handleClick}:Props){
    return(
        <Template.FilterArea>
                            <Template.SelectGroup>
                                <Template.Label>Filiais:</Template.Label>
                                <Template.Select onChange={(e) => carregarDadosLogistico(e.target.value)}>
                                    <option value="">Selecione uma filial para filtrar...</option>
                                    {listaFiliais.map((f, i) => (
                                        <option key={i} value={f?.numeroFilial}>
                                            {f?.numeroFilial} - {f?.nome}
                                        </option>
                                    ))}
                                </Template.Select>
                            </Template.SelectGroup>
                            <Template.RefreshButton loading={loadingRel} disabled={loadingRel} onClick={handleClick}>
                                <MdRefresh />
                            </Template.RefreshButton>
                        </Template.FilterArea>
    )
}