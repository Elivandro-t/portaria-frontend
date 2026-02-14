import { PerfilComponet } from "../perfilComponentHeader/perfilComponet"
import Header from "./header"
import { useNavigate } from "react-router-dom";
import { Logued } from "../../modulos/portaria/service/Logued"
import { useCallback, useContext, useEffect, useState } from "react";
import { contextProvider } from "../../reducer/userProvider/userProvider";
import { subjet } from "../../jwt/jwtservice";
import logo from "../../assets/logo portaria (1).png"
import { notify } from "../../modulos/portaria/service/snackbarService";
import apiUsuario from "../../modulos/PaginaInicial/service/apiUsuario";

type props = {
    ativoBusca?: any,
    filial?: any
}

export const HeaderComponent = ({ ativoBusca, filial }: props) => {
    const { setBusca, setFilial } = useContext(contextProvider) as any;
    const usuario = subjet();
    const navigate = useNavigate();
    const [filialAtiva, setFilialAtiva] = useState(
        localStorage.getItem("@App:filial") || filial || ""
    );
    const [filias, setFiliaiss] = useState<any[]>([])
    const temPermissaoGerenciar = usuario?.permissoes?.includes("GERENCIAR_USUARIOS");
    const handleHome = () => {
        navigate("/");
    }
    const handleChangeFilial = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const novaFilial = e.target.value;
        setFilialAtiva(novaFilial);
        setFilial(novaFilial)

        localStorage.setItem("@App:filial", novaFilial);
    };

    const carregarFiliais = useCallback(async () => {
        try {
            const resposta = await apiUsuario.FiliaisUsuario(usuario?.id);
            if (resposta?.acess) {
                setFiliaiss(resposta?.acess);
            }
        } catch (error) {
            notify("Erro ao carregar filiais", "error");
        }
    }, []);
    useEffect(() => {
        carregarFiliais();
    }, [])

    return (
        <Header.areaHeader>
            <Header.container>
                <Header.areaLogo>
                    <Header.logo src={logo} onClick={handleHome} />
                    {ativoBusca && (
                        temPermissaoGerenciar ? (
                            <Header.SelectFilial value={filialAtiva} onChange={handleChangeFilial}>
                                <option value="">CD Principal</option>
                                {filias.map(f => (
                                    <option key={f.id} value={f.filial}>{f.filial}</option>
                                ))}
                            </Header.SelectFilial>
                        ) : (
                            <Header.BadgeFilial onClick={handleHome} style={{ cursor: 'pointer' }}>
                                CD - {filialAtiva || filial}
                            </Header.BadgeFilial>
                        )
                    )}
                </Header.areaLogo>

                {/* Wrapper da busca sempre visível */}
                {ativoBusca && (
                    <Header.wrapperBusca>
                        <Header.busca
                            placeholder="Buscar placa, visitante..."
                            type="search"
                            onChange={e => setBusca(e.target.value)}
                        />
                    </Header.wrapperBusca>
                )}

                {Logued() && (
                    <Header.perfil>
                        {usuario?.nome && (
                            <Header.nomeUsuario>
                                <strong>Operador</strong>
                                {usuario.nome.split(" ")[0]}
                            </Header.nomeUsuario>
                        )}
                        <PerfilComponet />
                    </Header.perfil>
                )}
            </Header.container>
        </Header.areaHeader>
    );
}