import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiUsuario from "../../../PaginaInicial/service/apiUsuario";
import { notify } from "../../../portaria/service/snackbarService";
import Template from "../Dashboard/Painel.styles"; // Certifique-se que o caminho está correto
import { SemItens } from "../../components/SemItens";
import { Loading } from "../../components/Loading/loading";
import { MdAdd, MdRefresh } from "react-icons/md";
import { subjet } from "../../../../jwt/jwtservice";
const ListaItensFiliasRecebimento = () => {
    const [loadingInfor, setLoadinInfor] = useState(false);

    const { filial } = useParams();
    const nav = useNavigate();
        const [listaFiliais, setListaFiliais] = useState<any[]>([]);


    // const carregarDadosLogistico = async (filial?: any) => {
    //     setItens([]);
    //     setLoadinInfor(true);
    //     try {
    //         const resposta = await api.listaGerais(filial);
    //         if (resposta?.logisticoFilias?.content) {
    //             setItens(resposta?.logisticoFilias.content);
    //         }
    //     } catch (error) {
    //         notify("Erro ao carregar dados logísticos", "error");
    //     } finally {
    //         setLoadinInfor(false);
    //     }
    // };
    const user = subjet()

    const [filialFiltrada, setFilialFiltrada] = useState<any[]>([])
    const carregarFiliais = useCallback(async () => {
        try {
            setListaFiliais([])
            setLoadinInfor(true);
            const resposta = await apiUsuario.FiliaisUsuario(user?.id);
            if (resposta?.acess) {
                setListaFiliais(resposta.acess);
                setFilialFiltrada(resposta.acess)
            }
        } catch (error) {
            setLoadinInfor(false);
            notify("Erro ao carregar filiais", "error");
        } finally {
            setLoadinInfor(false);
        }
    }, []);

    useEffect(() => {
        carregarFiliais();
    }, [carregarFiliais]);

    const handerNavigate = (number:any) => {
        setTimeout(() => {
            nav(`/recebimento/detalhes-filial/${number}`);
        }, 300);
    };
    const [loadingred, setLoadingRef] = useState(false);

    const handleClick = async () => {

        setLoadingRef(true);

        try {
            setLoadingRef(true);
            // ou qualquer função async
        } finally {
            setLoadingRef(false);
        }
    };
    function handleFiltroFilial(value: any) {
        if (!value) {
            if (!value) {
                setFilialFiltrada(listaFiliais);
                return;
            }
        }
        const numero = Number(value);
        var filtrada = listaFiliais.filter(item => item.numeroFilial === numero);
        setFilialFiltrada(filtrada);
    }

    return (
        <Template.Main>
            {/* ÁREA DA FILIAL (FILTRO) */}
            <Template.HeaderCard>
                <Template.TitleSection>
                    <h2>Painel Logístico - Unidade {filial || "Geral"}</h2>
                </Template.TitleSection>

                <Template.FilterArea>
                    <Template.SelectGroup>
                        <Template.Label>Filiais:</Template.Label>
                        <Template.Select onChange={(e) => handleFiltroFilial(e.target.value)}>
                            <option value="">Selecione uma filial para filtrar...</option>
                            {listaFiliais.map((f, i) => (
                                <option key={i} value={f?.numeroFilial}>
                                    {f?.numeroFilial} - {f?.nome}
                                </option>
                            ))}
                        </Template.Select>
                    </Template.SelectGroup>
                    <Template.RefreshButton loading={loadingred} disabled={loadingred} onClick={handleClick}>
                        <MdRefresh />
                    </Template.RefreshButton>
                </Template.FilterArea>

            </Template.HeaderCard>

            {loadingInfor && <Loading />}
            {!loadingInfor && listaFiliais.length === 0 && <SemItens />}

            {/* LISTAGEM DE RESUMOS */}
            {filialFiltrada.map((c, index) => (
                <Template.Container key={index}>
                    <Template.Card style={{cursor:"pointer"}} onClick={()=>handerNavigate(c?.filial)}>
                        <Template.CardHeaderPrincipal>
                            <div className="info-title">
                                <span className="tag">Resumo  CD-{c.numeroFilial}</span>
                                <h3>{c?.nome}</h3>
                            </div>
                            <div className="info-date">
                                <span><MdAdd /></span>
                            </div>
                        </Template.CardHeaderPrincipal>
                    </Template.Card>
                </Template.Container>
            ))
            }
        </Template.Main >
    );
};

export default ListaItensFiliasRecebimento;