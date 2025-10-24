import Template from "./Filtro"
export const FiltroComponent = () => {
    return (
        <Template.Container>
            <Template.Area>
                <Template.Label>Status</Template.Label>
                <Template.Select>
                    <Template.Option>
                        todas
                    </Template.Option>
                </Template.Select>
            </Template.Area>
            <Template.Area>
                <Template.Label>Status</Template.Label>
                <Template.Select>
                    <Template.Option>
                        todas
                    </Template.Option>
                </Template.Select>
            </Template.Area>
            <Template.Area>
                <Template.Label>Status</Template.Label>
                <Template.Select>
                    <Template.Option>
                        todas
                    </Template.Option>
                </Template.Select>
            </Template.Area>
            <Template.Area>
                <Template.Label>Status</Template.Label>
                <Template.Input placeholder="Pesquise por nome ou placa" />
            </Template.Area>
            <Template.btnArea>
                <Template.Button>Aplicar</Template.Button>
                <Template.Button>Limpar</Template.Button>
            </Template.btnArea>
        </Template.Container>
    )
}