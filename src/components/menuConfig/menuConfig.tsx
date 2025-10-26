import Template from "./menuConfigCss";
import { Link } from "react-router-dom";
import { BotaoVoltar } from "../voltar/BotaoVoltar";
import logo from "../../assets/logo portaria (1).png"
export const MenuConfig = () => {
    return (
        <Template.continer>
            <BotaoVoltar/> 
            <Template.logo src={logo}/>
            <Template.menu>
                <Template.menu_nav>
                    <Template.menu_ul>
                        <Template.menu_li>
                            Configurações
                            <Template.submenu>
                                <Link to="/configuracoes/usuarios/lista">
                                        <Template.submenu_item>Usuários</Template.submenu_item>
                                </Link>
                                    <Link to="/configuracoes/perfil">
                                        <Template.submenu_item>Perfis</Template.submenu_item>

                                    </Link>
                                    <Link to="/configuracoes/permissoes">
                                        <Template.submenu_item>Permissões</Template.submenu_item>
                                    </Link>
                            </Template.submenu>
                        </Template.menu_li>
                        <Template.menu_li>
                            Portaria
                            <Template.submenu>
                                <Template.submenu_item>Entrada</Template.submenu_item>
                                <Template.submenu_item>Saída</Template.submenu_item>
                            </Template.submenu>
                        </Template.menu_li>
                        <Template.menu_li>
                            Visitantes
                            <Template.submenu>
                                <Template.submenu_item>Entrada</Template.submenu_item>
                                <Template.submenu_item>Saída</Template.submenu_item>
                                <Template.submenu_item>Relatórios</Template.submenu_item>
                                <Link to="/configuracoes/visitantes/lista">
                                    <Template.submenu_item>Quantidade</Template.submenu_item>

                                </Link>
                                 <Link to="/configuracoes/historico">
                                    <Template.submenu_item>Historico</Template.submenu_item>
                                </Link>
                            </Template.submenu>
                        </Template.menu_li>
                        <Template.menu_li>
                            Usuario
                            <Template.submenu>
                                <Link to="/configuracoes/cadastro/usuario">
                                    <Template.submenu_item >cadastro</Template.submenu_item>
                                </Link>
                                <Link to="/configuracoes/senha/usuario">
                                    <Template.submenu_item>resetar senha</Template.submenu_item>
                                </Link>
                            </Template.submenu>
                        </Template.menu_li>
                    </Template.menu_ul>
                </Template.menu_nav>
            </Template.menu>
        </Template.continer>
    );
};
