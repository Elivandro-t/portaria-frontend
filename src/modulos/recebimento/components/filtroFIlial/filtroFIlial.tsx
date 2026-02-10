import { MdRefresh, MdAdd } from "react-icons/md"; // Importei o MdAdd
import Template from "./Dashboard.css";
import { useNavigate } from "react-router-dom";

interface Props {
    listaFiliais: any[],
    loadingRel: boolean,
    carregarDadosLogistico: (n: any) => void,
    handleClick: () => void,
}

export function FiltroFIlial({ listaFiliais, loadingRel, carregarDadosLogistico, handleClick }: Props) {
    const nav = useNavigate()
    const onAddClick = () => {
        nav("/recebimento/novo-logistico")
    }
    return (
        <Template.FilterArea style={{ gap: '15px', flexWrap: 'wrap' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Template.AddButton onClick={onAddClick}>
                    <MdAdd />
                    Novo Card
                </Template.AddButton>
                <Template.SelectGroup>
                    {/* <Template.Label>Filiais</Template.Label> */}
                    <Template.Select onChange={(e) => carregarDadosLogistico(e.target.value)}>
                        <option value="">Selecione uma filial para filtrar...</option>
                        {listaFiliais.map((f, i) => (
                            <option key={i} value={f?.filial}>
                                {f?.filial} - {f?.nome}
                            </option>
                        ))}
                    </Template.Select>
                </Template.SelectGroup>
                <Template.RefreshButton
                    loading={loadingRel}
                    disabled={loadingRel}
                    onClick={handleClick}
                    title="Atualizar dados"
                >
                    <MdRefresh />
                </Template.RefreshButton>
            </div>
        </Template.FilterArea>
    )
}