import menuConfig from "../menuConfig/json"
import Template from "./cssSidebar"
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
type props = {
    setOpen: () => void,
    open: boolean
}
export const SiderBarComponent = ({ setOpen, open }: props) => {
    const [openIndex, setOpenIndex] = useState<number[]>([]);
    const togleMenu = (index: any) => {
        setOpenIndex(prev => prev.includes(index)
            ? prev.filter(i => i !== index) // se já está aberto, fecha
            : [...prev, index]);
    }

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };
    return (
        <Template.container onClick={setOpen}>
            <Template.container_int open={open} onClick={handleClick}

            >
                {/* Botão de fechar */}

                {/* Menu dinâmico */}
                {menuConfig.map((item, index) => (
                    <div key={index} style={{ marginBottom: "20px", cursor: "pointer" }}>
                        <Template.menu onClick={() => togleMenu(index)}>
                            {item.label}
                            {openIndex.includes(index) ? (
                                <ExpandMoreIcon style={{ color: "#B0B0B0" }} />
                            ) : (
                                <ChevronRightIcon style={{ color: "#B0B0B0" }} />
                            )}
                        </Template.menu>
                        {openIndex.includes(index) &&
                            <Template.subMenu >
                                {item.items.map((sub, i) =>
                                    sub.to ? (
                                        <Template.MenuLink
                                            key={i}
                                            to={sub.to}
                                            onClick={setOpen}
                                            style={{
                                                display: "block",
                                                color: "#B0B0B0",
                                                textDecoration: "none",
                                                padding: "6px 0",
                                            
                                            }}
                                        >
                                            {sub.label}
                                        </Template.MenuLink>
                                    ) : (
                                        ""
                                    )
                                )}
                            </Template.subMenu>
                        }

                    </div>
                ))}
            </Template.container_int>
        </Template.container>

    )
}