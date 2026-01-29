import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/apiLogistico";
import apiUsuario from "../../../PaginaInicial/service/apiUsuario";
import { notify } from "../../../portaria/service/snackbarService";
import Template from "./Dashboard.css"; // Certifique-se que o caminho está correto
import Home from "../HomeLogistico/homeLogisticoCss";
import { SemItens } from "../../components/SemItens";
import { Loading } from "../../components/Loading/loading";
import BasicSpeedDial from "../../../../components/SpeedDial/SpeedDial";
import { CardItensComponents } from "../../components/cardItens/cardItens";
import { FiltroFIlial } from "../../components/filtroFIlial/filtroFIlial";
import ListAltIcon from '@mui/icons-material/ListAlt'; // Ou FormatListBulleted
import AddIcon from '@mui/icons-material/Add';
import { subjet } from "../../../../jwt/jwtservice";
const actions = [
    { icon: <AddIcon />, name: 'Adicionar', router: "/Logistico/novo-logistico" },
    { icon: <ListAltIcon />, name: 'Todas os itens', router: "/Logistico/listaFiliais" },
];
const Dashboard = () => {
    const [listaFiliais, setListaFiliais] = useState<any[]>([]);
    const [loadingInfor, setLoadinInfor] = useState(false);
    const [itens, setItens] = useState<any[]>([]);
    const from = location.pathname + location.search + location.hash;
    const { filial } = useParams();
    const user = subjet()
    const carregarDadosLogistico = async (filial?: any) => {
        setItens([]);
        setLoadinInfor(true);
        const filiais = listaFiliais.flatMap(item => item.filial);
        try {
            const resposta = await api.lista(filial,filiais);
            if (resposta?.logisticoFilias) {
                setItens(resposta.logisticoFilias);
            }
        } catch (error) {
            notify("Erro ao carregar dados logísticos", "error");
        } finally {
            setLoadinInfor(false);
        }
    };

    const carregarFiliais = useCallback(async () => {
        try {
            const resposta = await apiUsuario.FiliaisUsuario(user?.id);
            if (resposta?.acess) {
                setListaFiliais(resposta.acess);
            }
        } catch (error) {
            notify("Erro ao carregar filiais", "error");
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("redirectAfterLogin", from);
        carregarFiliais();
    }, []);
    useEffect(() => {
        if (listaFiliais.length > 0) {
            carregarDadosLogistico(filial);
        }
    }, [listaFiliais, filial]);
    const [loadingred, setLoadingRef] = useState(false);

    const handleClick = async () => {
        setLoadingRef(true);
        try {
            carregarDadosLogistico();
            setLoadingRef(false);
        } finally {
            setLoadingRef(false);
        }
    };

    return (
        <Template.Main>
            {/* ÁREA DA FILIAL (FILTRO) */}
            <Template.HeaderCard>
                <Template.TitleSection>
                    <small>Materiais Logistico</small>
                    <h2>Painel Logístico - {filial || "Geral"}</h2>
                </Template.TitleSection>
                <FiltroFIlial listaFiliais={listaFiliais} loadingRel={loadingred} carregarDadosLogistico={(n: any) => carregarDadosLogistico(n)} handleClick={handleClick} />

            </Template.HeaderCard>

            {loadingInfor && <Loading />}
            {!loadingInfor && itens.length === 0 && <SemItens />}

            {/* LISTAGEM DE RESUMOS */}
            {itens.map((c, index) => (
                <CardItensComponents c={c} key={index} handleFunction={carregarDadosLogistico} />
            ))
            }
            <Home.ButtonContainer>
                {/* <Home.StyledActionButton onClick={handerNavigate} title="Novo Registro">
                    <AddIcon sx={{ fontSize: 32 }} />
                </Home.StyledActionButton> */}
                <BasicSpeedDial actions={actions} />
            </Home.ButtonContainer>
        </Template.Main >
    );
};

export default Dashboard;