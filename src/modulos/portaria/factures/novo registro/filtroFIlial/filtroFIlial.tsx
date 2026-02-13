import Template from "./Dashboard.css";

interface Props {
    listaFiliais: any[],
    carregarDadosLogistico: (n: any) => void,
}

export function FiltroFIlialUsuario({ listaFiliais, carregarDadosLogistico }: Props) {
    
    return (
        <Template.FilterArea style={{ gap: '15px', flexWrap: 'wrap' }}>

                <Template.SelectGroup>
                    <Template.Label>Portaria Filial</Template.Label>
                    <Template.Select onChange={(e) => carregarDadosLogistico(e.target.value)}>
                        <option value="">Selecione uma Filial</option>
                        {listaFiliais.map((f, i) => (
                            <option key={i} value={f?.filial}>
                                {f?.filial} - {f?.nome}
                            </option>
                        ))}
                    </Template.Select>
                </Template.SelectGroup>
        </Template.FilterArea>
    )
}