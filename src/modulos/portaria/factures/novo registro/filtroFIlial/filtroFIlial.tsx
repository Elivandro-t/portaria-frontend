import Template from "./Dashboard.css";

interface Props {
    listaFiliais: any[],
    carregarDadosLogistico: (n: any) => void,
    filialUsuario: any
}

export function FiltroFIlialUsuario({ listaFiliais, carregarDadosLogistico, filialUsuario }: Props) {
    return (
        <Template.FilterArea>
            <Template.SelectGroup>
                <Template.Label>Portaria Filial</Template.Label>
                <Template.Select
                    onChange={(e) => carregarDadosLogistico(e.target.value)}
                >
                    {listaFiliais.some(s => s.filial == filialUsuario) ? (
                        <option value={filialUsuario}>
                            {/* Filtramos o array, pegamos o primeiro item [0] e acessamos o nome */}
                            {listaFiliais.find(e => e.filial == filialUsuario)?.nome || filialUsuario}
                        </option>
                    ) : (
                        <option value="">Selecione uma Filial</option>
                    )}

                    {listaFiliais.map((f, i) => (
                        <option key={i} value={f?.filial}>
                            {f?.filial} - {f?.nome}
                        </option>
                    ))}
                </Template.Select>
            </Template.SelectGroup>
        </Template.FilterArea>
    );
}