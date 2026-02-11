import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUsuario from "../../../PaginaInicial/service/apiUsuario";
import Template from "./Painel.styles";
import { Loading } from "../../components/Loading/loading";
import { MdRefresh, MdBusiness, MdChevronRight } from "react-icons/md";
import { subjet } from "../../../../jwt/jwtservice";

const ListaItensFiliasRecebimento = () => {
    const [loading, setLoading] = useState(false);
    const [filiais, setFiliais] = useState<any[]>([]);
    const [filtradas, setFiltradas] = useState<any[]>([]);
    const nav = useNavigate();
    const user = subjet();

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await apiUsuario.FiliaisUsuario(user?.id);
            if (res?.acess) {
                setFiliais(res.acess);
                setFiltradas(res.acess);
            }
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => { loadData(); }, [loadData]);
    return (
        <Template.Main>
            <Template.Header>
                <Template.TitleSection>
                    <h2>Painel Logístico</h2>
                    <p>Unidades disponíveis para recebimento</p>
                </Template.TitleSection>

                <Template.FilterGroup>
                    <Template.Select onChange={(e) => {
                        const val = e.target.value;
                        setFiltradas(val ? filiais.filter(f => String(f.filial) === val) : filiais);
                    }}>
                        <option value="">Filtrar unidade...</option>
                        {filiais.map((f, i) => (
                            <option key={i} value={f?.filial}>{f?.nome}</option>
                        ))}
                    </Template.Select>
                    <Template.RefreshButton loading={loading} onClick={loadData}>
                        <MdRefresh size={20} />
                    </Template.RefreshButton>
                </Template.FilterGroup>
            </Template.Header>

            {loading ? <Loading /> : (
                <Template.Grid>
                    {filtradas.map((c, index) => (
                        <Template.Card key={index} onClick={() => nav(`/recebimento/detalhes-filial/${c?.filial}`)}>
                            <Template.CardInfo>
                                <div className="icon-wrapper">
                                    <MdBusiness size={24} />
                                </div>
                                <div className="text-content">
                                    <span className="tag">RESUMO CD - {c?.filial}</span>
                                    <h3>{c?.nomeFilial}</h3>
                                </div>
                            </Template.CardInfo>
                            <MdChevronRight size={24} color="#D0D5DD" />
                        </Template.Card>
                    ))}
                </Template.Grid>
            )}
        </Template.Main>
    );
};

export default ListaItensFiliasRecebimento;