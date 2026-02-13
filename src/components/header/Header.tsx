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
    const { setBusca,setFilial } = useContext(contextProvider) as any;
    const usuario = subjet();
    const navigate = useNavigate();
    const [filialAtiva, setFilialAtiva] = useState(
        localStorage.getItem("@App:filial") || filial || ""
    );
const [filias,setFiliaiss]=useState<any[]>([])
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
        useEffect(()=>{
            carregarFiliais();
        },[])

    return (
        <Header.areaHeader>
            <Header.container>
                <Header.areaLogo>
                    <Header.logo src={logo} onClick={handleHome} />
                    {temPermissaoGerenciar ? (
                        <select 
                            value={filialAtiva} 
                            onChange={handleChangeFilial}
                            style={{
                                background: 'transparent',
                                border: '1px solid #ddd',
                                color: '#333',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                marginLeft: '10px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="">Selecionar CD</option>
                            {filias.map(f => (
                                <option key={f.id} value={f.filial}>{f.nome}</option>
                            ))}
                        </select>
                    ) : (
                        <span onClick={handleHome} style={{ cursor: 'pointer' }}>
                            CD - {filialAtiva || filial}
                        </span>
                    )}
                </Header.areaLogo>
                {ativoBusca &&
                    <Header.busca 
                        placeholder="Buscar por placa, visitante ou protocolo..." 
                        type="search" 
                        onChange={e => setBusca(e.target.value)} 
                    />
                }

                {Logued() && (
                    <Header.perfil>
                        {usuario && usuario?.nome &&
                            <Header.nomeUsuario>
                                <strong>Olá</strong> {usuario?.nome.split(" ")[0]}
                            </Header.nomeUsuario>
                        }
                        <PerfilComponet />
                    </Header.perfil>
                )}
            </Header.container>
        </Header.areaHeader>
    )
}