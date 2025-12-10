import Perfil from "./perfil"
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import save from "../../modulos/portaria/service/localStorage/service-localStorage"
import { contextProvider } from "../../reducer/userProvider/userProvider";
import { useContext } from "react";
import { LoadingSecundary } from "../LoadingSecundary/LoadingSecundary";
import { subjet } from "../../modulos/portaria/service/jwt/jwtservice";
const settings = [
  { name: "Minha Conta" },
  { name: "Portaria Pendentes", permissions: ["REGISTRAR_SAIDA"] },
  { name: "Meus Registros", permissions: ["VISUALIZAR_REGISTRO"] },
  { name: "Registros Gerais", permissions: ["GERENCIAR_REGISTROS"] },
  { name: "Criar Registro", permissions: ["CRIAR_REGISTRO"] },
  { name: "Configuraçoẽs", permissions: ["LISTA_GERAL"] },
  { name: "Sair" }
];

export const PerfilComponet = () => {
  const user = subjet()
  const contex = useContext(contextProvider)
  const [loadign, setLoading] = React.useState(false)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [userPermissions, setUserPermissions] = React.useState<string[]>([])
  const [menuItens, setITensMenu] = React.useState<any[]>([])
  const navigate = useNavigate()
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  function removeToken() {
    save.logout()
  }
  const handleCloseUserMenu = (setting: string) => {
    setAnchorElUser(null);

    switch (setting) {
      case "Meus Registros":
        setLoading(true)
        navigate("/controle/meus-registros", { replace: false });
        setTimeout(() => setLoading(false), 800);

        break;
      case "Minha Conta":
        setLoading(true)
        setTimeout(() => {
          navigate("/controle/profile");
          setLoading(false)
        }, 1000)

        break;
      case "Registros Gerais":
        setLoading(true)
        setTimeout(() => {
          navigate("/portaria/gerais");
          setLoading(false)
        }, 1000)
        break;
      case "Portaria Pendentes":
        setLoading(true)
        setTimeout(() => {
          navigate("/portaria/pendentes");
          setLoading(false)
        }, 1000)
        break;
      case "Criar Registro":
        setLoading(true)
        setTimeout(() => {
          navigate("/controle/registro-portaria-cd");
          setLoading(false)
        }, 1000)
        break;
      case "Configuraçoẽs":
        setLoading(true)
        setTimeout(() => {
          navigate("/config");
          setLoading(false)
        }, 1000)
        break
      case "Sair":
        removeToken()
        window.location.href = "/verify";
        contex?.logout()
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("acessToken");
    if (!token) return;
    const decodedUser = subjet(); // lê o JWT
    // note que aqui o nome da propriedade deve bater com o payload real do seu token
    const permissions: string[] = decodedUser?.permissoes || [];
    setUserPermissions(permissions);
  }, [contex?.user]);


  React.useEffect(() => {
    if (!userPermissions.length) return;

    const menu = settings.filter(
      (s) =>
        !s.permissions ||
        s.permissions.some((p) => userPermissions.includes(p)) ||
        s.name === "Sair  "
    );
    setITensMenu(menu);
  }, [userPermissions]);

  return (
    <Perfil.container>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            {contex?.usuario?.avatar ? (
              <Avatar style={{ objectFit: "contain" }} alt={user?.nome} src={contex?.usuario?.avatar} />

            ) : (
              <Avatar alt={user?.nome} src="/static/images/avatar/2.jpg" />

            )
            }
          </IconButton>
        </Tooltip>
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
          {menuItens.flatMap((setting) => (
            <MenuItem key={setting.name} onClick={() => handleCloseUserMenu(setting?.name)}>
              <Typography sx={{ textAlign: 'center' }}>{setting?.name}</Typography>

            </MenuItem>
          ))}
        </Menu>
      </Box>
      {loadign &&
        <LoadingSecundary></LoadingSecundary>
      }
    </Perfil.container>
  );
}