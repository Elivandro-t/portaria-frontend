import { useEffect, useState, type ChangeEvent } from "react";
import Template from "./UsuariosCss"
import Api from "../../service/api"
import AddIcon from "@mui/icons-material/Add";
import Avatar from '@mui/material/Avatar';
import { TextField, IconButton } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { useNavigate } from "react-router-dom";
import { notify } from "../../service/snackbarService";
import api from "../../service/api";
import { PopupUpdatePerfilComponent } from "../../../../components/updatePerfilComponent/popup/updatePerfil";
import { Paginator } from "../../../../components/paginator/paginator";
import { LoadingSecundary } from "../../../../components/LoadingSecundary/LoadingSecundary";
import { subjet } from "../../service/jwt/jwtservice";
export const UsuarioListaComponets = () => {
  const [lista, setLista] = useState<any[]>([])
  const [id, setId] = useState('');
  const [busca, setBusca] = useState("")
  const [totaPage, setTotalPage] = useState(0);
  const nativete = useNavigate()
  const [loading, setLoading] = useState(false);
  const user = subjet();
  const permission = user?.permissoes;
  const onSubmit = async (valuePage?: any) => {
    setLoading(true);
    const resposta = await Api.listAusuario(busca.trim(), valuePage);
    if (resposta) {
      setTimeout(() => {
        setLoading(false);
        setLista(resposta.content);
        setTotalPage(resposta?.totalPages);
      }, 1000);
    }
  }
  const handleNextPage = (_: ChangeEvent<unknown>, value: number) => {
    const valuePage = value - 1;
    onSubmit(valuePage);
  }
  useEffect(() => {
    if (busca.trim() === "") {
      onSubmit(); // se o campo estiver vazio, busca toda a lista
    }
  }, [busca])
  const hendleUpdate = (itemResposta: any) => {
    setId(itemResposta.id)
    setUpdateModal(true)
  }
  const handleNovoUsuario = () => {
    nativete("/config/cadastro/usuario")
  }
  const handleAtivo = (idusuario: any) => {
    const ativo = true;
    hendleBuscaApi(null, ativo, idusuario);
    console.log(" ativo " + ativo + " susuario " + idusuario)
  }
  const handleAtivoFalse = (idusuario: any) => {
    const ativo = false;
    hendleBuscaApi(null, ativo, idusuario);
  }
  const [updateAtivo, setUpdateModal] = useState(false)
  const hendleBuscaApi = async (data?: any, ativo?: any, usuarioId?: any) => {
    const idFinal = id || usuarioId;
    const response = await api.AdicionarPefil(idFinal, data?.idPerfil, ativo);
    if (response) {
        setUpdateModal(false)
        notify(response.msg, "success")
        onSubmit()

    }

  }
  const handleConvetData = (data: any) => {
       const d = new Date(data);

    const dia = String(d.getDate()).padStart(2, "0");
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const ano = d.getFullYear();

    const hora = String(d.getHours()).padStart(2, "0");
    const minuto = String(d.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${ano} às ${hora}:${minuto}`;
    }
  return (
    <>
      <Template.container>
        <Template.titulo>Lista de Usuarios</Template.titulo>
        <Template.FormSub >
          <Template.CamposInput>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Buscar..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <IconButton
              onClick={onSubmit}
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              onClick={handleNovoUsuario} // sua função para abrir o formulário
              sx={{
                backgroundColor: "#4caf50",       // verde
                color: "#fff",                     // ícone branco
                "&:hover": { backgroundColor: "#43a047" }, // verde mais escuro no hover
              }}
            >
              <AddIcon />
            </IconButton>
            <Paginator totalPage={totaPage} handleNextPage={handleNextPage} />
          </Template.CamposInput>
          <Template.TableContainer>
            <Template.Table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Função</th>
                  <th>Filial</th>
                  <th>Pefil</th>
                  <th>Device</th>
                  <th>Ultima Sessão</th>
                  <th>Status</th>
                  {permission?.includes("ADICIONAR_ACESSo")&&
                  <th></th>}
                </tr>
              </thead>
              <tbody>
                {lista.length == 0 &&
                  <Template.erro>Sem dados</Template.erro>
                }
                {
                  lista.flatMap((item, key) => (
                    <tr key={key}>
                      <td>
                        {item?.avatar ? (
                          <Avatar sx={{ width: 40, height: 40, objectFit: 'contain' }} alt={item?.nome} src={item?.avatar} />

                        ) : (
                          <Avatar sx={{ width: 40, height: 40, objectFit: 'contain' }} alt={item.nome} src="/static/images/avatar/2.jpg" />

                        )
                        }
                      </td>
                      <td>{item.nome}</td>
                      <td>{item.email}</td>
                      <td>{item.ocupacaoOperacional}</td>
                      <td>{item.filial}</td>
                      <td>{item?.perfil?.nome}</td>
                      <td>
                        <Template.device> {item?.sessionDevice?item?.sessionDevice:"0"}</Template.device>   
                       </td>
                      <td>{item?.sessionLastLogin?handleConvetData(item?.sessionLastLogin):"Sem acesso"}</td>
                      <td>
                        <Template.ativo ativo={item?.ativo}></Template.ativo>
                      </td>
                      {permission?.includes("ADICIONAR_ACESSO")&&
                        <td >
                        <Template.trBTN>
                          <IconButton
                            aria-label="editar"
                            onClick={() => hendleUpdate(item)}
                            sx={{
                              color: "black",
                              "&:hover": { backgroundColor: "#e0e0e0" },
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          {item.ativo ? (
                            <IconButton
                              aria-label="LockIcon"
                              onClick={() => handleAtivoFalse(item.id)}
                              sx={{
                                color: "green",
                                "&:hover": { backgroundColor: "#e0e0e0" },
                              }}
                            >
                              <LockOpenIcon />
                            </IconButton>
                          ) : (
                            <IconButton
                              aria-label="LockOpenIcon"
                              onClick={() => handleAtivo(item.id)}
                              sx={{
                                color: "red",
                                "&:hover": { backgroundColor: "#e0e0e0" },
                              }}
                            >
                              <LockIcon />
                            </IconButton>
                          )}
                        </Template.trBTN>
                      </td>
                      }
                    </tr>
                  ))
                }
              </tbody>
            </Template.Table>
          </Template.TableContainer>
        </Template.FormSub>
        {/* {ativo &&
          <PopupComponent handleCancel={() => setAtivo(false)} handleConfirm={function (): void {
            throw new Error("Function not implemented.");
          }} message={"Deseja realmente atualizar o item com ID"} ativoBtn={ativo} />
        } */}
        {updateAtivo &&
          <PopupUpdatePerfilComponent ID={undefined} handleConfirm={(w)=>hendleBuscaApi(w,null,null)} handleCancel={() => setUpdateModal(false)} message={""} ativoBtn={false} />
        }
        {loading &&
          <LoadingSecundary />
        }
      </Template.container>
    </>
  )
}