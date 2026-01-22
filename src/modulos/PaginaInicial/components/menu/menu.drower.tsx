import Drower from "./menu.css"
import Logout from "../../../../localStorage/service-localStorage"
import { LogOutIcon, ChevronDown } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { subjet } from "../../../../jwt/jwtservice"
import apiModulos from "../../service/moduleApi"
import { FaTruck } from "react-icons/fa";
import SouthWestIcon from '@mui/icons-material/SouthWest';
import InventoryIcon from '@mui/icons-material/Inventory';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import menuConfig from "../../../../json"
import { contextProvider } from "../../../../reducer/userProvider/userProvider"
import { Link, useNavigate } from "react-router-dom"
export const MenuDropComponent = ({ handleBtn }: any) => {
    const handleLogout = () => {
        window.location.href = "/verify"
        Logout.logout()
    }
    const [userPermissions, setUserPermissions] = useState<string[]>([])
    const [activeMenu, setActiveMenu] = useState<number | null>(null); // Estado para controlar qual menu está aberto

    const contex = useContext(contextProvider)

    const toggleMenu = (index: number) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    const usuario = subjet();
    const navigate = useNavigate();
    const [menu, setModule] = useState<any[]>([]);
    useEffect(() => {
        window.scroll(0, 0)
        const handleApi = async () => {
            const json = await apiModulos.modulo(usuario?.id);
            if (json) {
                setModule(json?.acess);

            }
        }
        handleApi()
    }, [])
    // p=>perfil.permissoes.includes(p))

    useEffect(() => {
        if (menu?.length === 1) {
            navigate(menu[0].router);
        };
    }, [menu]);

    useEffect(() => {
        const userSuv = subjet();
        setUserPermissions(userSuv?.permissoes || []);
    }, [contex?.user])

    const hasPermission = (perm?: string | null) => {
        if (!perm) return true;
        return userPermissions.includes(perm);
    };
    function retornaIcone(modulo: string, valor: any) {
        switch (modulo) {
            case "PORTARIA_ACCESS":
                return <FaTruck color="#5B7FFF" size={valor} />
            case "INVENTARIO_ACCESS":
                return <InventoryIcon sx={{ color: '#5B7FFF', fontSize: valor }} />
            case "RECEBIMENTO_ACCESS":
                return <SouthWestIcon sx={{ color: '#5B7FFF', fontSize: valor, fontWeight: "bold" }} />
            case "LOGISTICO_ACCESS":
                return <Inventory2Icon sx={{ color: '#5B7FFF', fontSize: valor, fontWeight: "bold" }} />
        }
    }
    return (
        <Drower.container onClick={handleBtn}>
            <Drower.container_int onClick={(e) => e.stopPropagation()}>
                <Drower.areaMenu>
                    <Drower.menu_nav>
                        {usuario?.permissoes && usuario?.permissoes.includes("GERENCIAR_USUARIOS") &&
                            <Drower.LabelSection>Menu Principal</Drower.LabelSection>
                        }
                        <Drower.menu_ul>
                            {menuConfig.filter(it => hasPermission(it.permission)).map((item, index) => (
                                <Drower.menu_li key={index} onClick={() => toggleMenu(index)}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {item.label}
                                        <ChevronDown size={14} style={{ transform: activeMenu === index ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                                    </div>

                                    {/* Passamos o estado isOpen para o styled-component */}
                                    <Drower.submenu isOpen={activeMenu === index} onClick={(e) => e.stopPropagation()}>
                                        {item.items.filter(sub => hasPermission(sub.permission)).map((sub, i) => (
                                            <Link to={sub?.to as any} onClick={handleBtn} key={i} style={{ textDecoration: 'none' }}>
                                                <Drower.submenu_item>
                                                    {sub.label}
                                                </Drower.submenu_item>
                                            </Link>
                                        ))}
                                    </Drower.submenu>
                                </Drower.menu_li>
                            ))}
                        </Drower.menu_ul>
                        <Drower.LabelSection>Permissões & Ações</Drower.LabelSection>
                        <Drower.menu_ul>
                            {menu.flatMap((n: any, i: any) => (

                                <Drower.menu_liApi key={i}>
                                    <Link to={n.router}>
                                        {retornaIcone(n?.permission_name, 16)}
                                        {n.titulo}
                                    </Link>

                                </Drower.menu_liApi>
                            ))}
                            <Drower.menu_liApi onClick={handleLogout}>
                                <LogOutIcon color="#5B7FFF" size={16} />
                                Sair
                            </Drower.menu_liApi>
                        </Drower.menu_ul>
                    </Drower.menu_nav>
                </Drower.areaMenu>
            </Drower.container_int>
        </Drower.container>
    )
}