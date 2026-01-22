import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { Logued } from "../../../portaria/service/Logued"
import Template from "./header.css"
import { subjet } from "../../../../jwt/jwtservice";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { contextProvider } from "../../../../reducer/userProvider/userProvider";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
type props = {
    handleBtn: () => void,
    subtitulo?: string,
    ativaBtnDrower: boolean

}
const settings = [
    { name: "Minha Conta" },
    { name: "Sair" }
];
export const HeaderPaginaInicial = ({ handleBtn, subtitulo, ativaBtnDrower }: props) => {
    const contex = useContext(contextProvider)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const navigate = useNavigate()
    const usuario = subjet();
    const handleCloseUserMenu = (setting: string) => {
        setAnchorElUser(null);

        switch (setting) {
            case "Minha Conta":
                setTimeout(() => {
                    navigate("/required/profile");
                }, 1000)

                break;
            case "Sair":
                window.location.href = "/verify";
                contex?.logout()
                break;
            default:
                break;
        }
    };
    return (
        <Template.header>
            <Template.contaier>
                {ativaBtnDrower &&
                    <IconButton onClick={handleBtn} edge="start" color="inherit"  aria-label="menu">
                        <MenuIcon sx={{ color: '#f7f8fc' ,fontSize:28}} />
                    </IconButton>
                }
                <Link to={"/"}>
                    <h1 >ERP / LOGISTICA <small>{subtitulo ? "- Controle " + subtitulo : null}</small></h1>
                </Link>
            </Template.contaier>
            {Logued() && (
                <Template.perfil>
                    {usuario && usuario?.nome &&
                        <Template.nomeUsuario><strong>Olá</strong> {usuario?.nome.split(" ")[0]}</Template.nomeUsuario>
                    }
                    <IconButton onClick={handleOpenUserMenu} >

                        {contex?.usuario?.avatar ? (
                            <Avatar style={{ objectFit: "contain" }} alt={usuario?.nome} src={contex?.usuario?.avatar} />
                        ) : (
                            <Avatar alt={usuario?.nome} src="/static/images/avatar/2.jpg" />

                        )
                        }
                    </IconButton>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.flatMap((setting) => (
                            <MenuItem key={setting.name} onClick={() => handleCloseUserMenu(setting?.name)}>
                                <Typography sx={{ textAlign: 'center' }}>{setting?.name}</Typography>

                            </MenuItem>
                        ))}
                    </Menu>
                </Template.perfil>
            )
            }
        </Template.header>
    )
}