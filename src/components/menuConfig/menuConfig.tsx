import Template from "./menuConfigCss";
import { Link, useNavigate } from "react-router-dom";
import { BotaoVoltar } from "../voltar/BotaoVoltar";
import logo from "../../assets/logo portaria (1).png"
import menuConfig from "./json"
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useEffect, useState } from "react";
import { SiderBarComponent } from "../sideBar/siderbar";
import { subjet } from "../../service/jwt/jwtservice";
import { contextProvider } from "../../reducer/userProvider/userProvider";

export const MenuConfig = () => {
        const [userPermissions, setUserPermissions] = useState<string[]>([])
        const contex = useContext(contextProvider)
      
    
    const navigate = useNavigate()
    const hendleHome = () => {
        navigate("/verify")
    }
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(false)
    }
    useEffect(()=>{
        const token = localStorage.getItem("acessToken");
        if (!token) return;
        const userSuv = subjet();
         const permition = userSuv?.permissoes || []
         setUserPermissions(permition);
    },[contex?.user])
    const hasPermission = (perm?: string | null) => {
    if (!perm) return true;
    return userPermissions.includes(perm);
};
    return (
        <Template.continer>
            <Template.areaMenu>
                <BotaoVoltar />
                <Template.menu>
                    <Template.menu_nav>
                        <Template.menu_ul>
                            {menuConfig.flatMap((item, index) => (
                                <Template.menu_li key={index}>
                                    {item.label}
                                    <Template.submenu>
                                        {item.items.filter(sub=>hasPermission(sub.permission)).map((sub, i) => (
                                            <div key={i}>
                                                <Link to={sub?.to as any}>
                                                    <Template.submenu_item>{sub.label}</Template.submenu_item>
                                                </Link>
                                            </div>
                                        ))}
                                    </Template.submenu>
                                </Template.menu_li>
                            ))}
                        </Template.menu_ul>
                    </Template.menu_nav>
                </Template.menu>
            </Template.areaMenu>
            <Template.btnMenu
                    onClick={() => setOpen(true)}
                    style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    <MenuIcon style={{ fontSize: 24, color: "#fff" }} />
                </Template.btnMenu>


            <Template.logo src={logo} onClick={hendleHome} />
            {open &&
                <SiderBarComponent setOpen={handleClick} open={open} />
            }

        </Template.continer>

    );
};
