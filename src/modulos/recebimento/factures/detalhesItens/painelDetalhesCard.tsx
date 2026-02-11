import {useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import api from "../../service/apiRecebimento";
import { notify } from "../../../portaria/service/snackbarService";
import Template from "./painelDetalhesCard.styled"; // Certifique-se que o caminho está correto
import { SemItens } from "../../components/SemItens";
import { Loading } from "../../components/Loading/loading";
import { MdRefresh } from "react-icons/md";
import { CardItensComponents } from "../../components/cardItens/cardItens";
const PainelDetalhesCard =  () => {
    const [loadingInfor, setLoadinInfor] = useState(false);
    const [itens, setItens] = useState<any[]>([]);

    const { filial } = useParams();

    const carregarDadosLogistico = async () => {
        setItens([]);
        setLoadinInfor(true);
        try {
            const resposta = await api.listaGerais(filial);
            if (resposta?.recebimentpFilias.content) {
                setItens(resposta.recebimentpFilias.content);
            }
        } catch (error) {
            notify("Erro ao carregar dados logísticos", "error");
        } finally {
            setLoadinInfor(false);
        }
    };


    useEffect(() => {
        carregarDadosLogistico();
    }, []);
    const [loadingred, setLoadingRef] = useState(false);

    const handleClick = async () => {

        setLoadingRef(true);

        try {
            carregarDadosLogistico();
            setLoadingRef(true);
            // ou qualquer função async
        } finally {
            setLoadingRef(false);
        }
    };

    return (
        <Template.Main>
            {/* ÁREA DA FILIAL (FILTRO) */}
            <Template.HeaderCard>
                <Template.TitleSection>
                    <small>Controle de Materiais</small>
                    <h2>Painel Logístico - {filial || "Geral"}</h2>
                </Template.TitleSection>

                <Template.FilterArea>
                    <Template.SelectGroup>
                        <Template.Label>Filiais:</Template.Label>
                        <input type="text"  />
                    </Template.SelectGroup>
                    <Template.RefreshButton loading={loadingred} disabled={loadingred} onClick={handleClick}>
                        <MdRefresh />
                    </Template.RefreshButton>
                </Template.FilterArea>

            </Template.HeaderCard>

            {loadingInfor && <Loading />}
            {!loadingInfor && itens.length === 0 && <SemItens />}

            {/* LISTAGEM DE RESUMOS */}
            {itens.map((c, index) => (
               <CardItensComponents c={c} key={index} handleFunction={carregarDadosLogistico}/>
            ))
            }

        </Template.Main >
    );
};

export default PainelDetalhesCard;