import Template from "./filtro.css"
interface Props{
    listaFiliais:any[],
    carregarDadosLogistico:(n:any)=>void,
}
export function FiltroFIlial({listaFiliais,carregarDadosLogistico}:Props){
    return(
        <Template.FilterArea>
                            <Template.SelectGroup>
                                <Template.Label>Mudar filial:</Template.Label>
                                <Template.Select onChange={(e) => carregarDadosLogistico(e.target.value)}>
                                    <option value="">Selecione uma filial...</option>
                                    {listaFiliais.map((f, i) => (
                                        <option key={i} value={f?.numeroFilial}>
                                            {f?.numeroFilial} - {f?.nome}
                                        </option>
                                    ))}
                                </Template.Select>
                            </Template.SelectGroup>
                        </Template.FilterArea>
    )
}