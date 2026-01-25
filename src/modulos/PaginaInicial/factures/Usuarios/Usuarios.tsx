import { useEffect, useState, type ChangeEvent } from "react";
import Template from "./UsuariosCss"
import Api from "../../service/apiUsuario"
import AddIcon from "@mui/icons-material/Add";
import Avatar from '@mui/material/Avatar';
import { TextField, IconButton, Box, Tooltip, Typography } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { useNavigate } from "react-router-dom";
import { notify } from "../../../portaria/service/snackbarService";
import api from "../../service/apiUsuario";
import { PopupUpdatePerfilComponent } from "../../../../components/updatePerfilComponent/popup/updatePerfil";
import { Paginator } from "../../../../components/paginator/paginator";
import { LoadingSecundary } from "../../../../components/LoadingSecundary/LoadingSecundary";
import { subjet } from "../../../../jwt/jwtservice";
// ... seus imports permanecem iguais

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Template.titulo>Gestão de Usuários</Template.titulo>
          {/* O Paginator fica melhor posicionado aqui ou no final */}
        </Box>

        <Template.FormSub>
          <Template.CamposInput>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Pesquisar por nome ou e-mail..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              sx={{ minWidth: '300px', backgroundColor: '#fff' }}
            />
            <IconButton
              onClick={onSubmit}
              sx={{ backgroundColor: "#6366f1", color: "#fff", "&:hover": { backgroundColor: "#4f46e5" } }}
            >
              <SearchIcon />
            </IconButton>
            
            <Tooltip title="Cadastrar Novo Usuário">
                <IconButton
                onClick={handleNovoUsuario}
                sx={{ backgroundColor: "#22c55e", color: "#fff", "&:hover": { backgroundColor: "#16a34a" } }}
                >
                <AddIcon />
                </IconButton>
            </Tooltip>

            <Box sx={{ flexGrow: 1 }} /> {/* Empurra o paginador para a direita */}
            <Paginator totalPage={totaPage} handleNextPage={handleNextPage} />
          </Template.CamposInput>

          <Template.TableContainer>
            <Template.Table>
              <thead>
                <tr>
                  <th>Membro</th>
                  <th>E-mail</th>
                  <th>Função / Filial</th>
                  <th>Perfil</th>
                  <th>Device</th>
                  <th>Último Acesso</th>
                  <th>Status</th>
                  {permission?.includes("ADICIONAR_ACESSO") && <th style={{ textAlign: 'right' }}>Ações</th>}
                </tr>
              </thead>
              <tbody>
                {lista.length === 0 ? (
                  <tr>
                    <td colSpan={10} style={{ textAlign: 'center', padding: '40px' }}>
                       <Typography color="textSecondary">Nenhum usuário encontrado</Typography>
                    </td>
                  </tr>
                ) : (
                  lista.map((item, key) => (
                    <tr key={key}>
                      <td>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Avatar 
                            sx={{ width: 38, height: 38, border: '1px solid #e2e8f0' }} 
                            src={item?.avatar || "/static/images/avatar/2.jpg"} 
                          />
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                            {item.nome}
                          </Typography>
                        </Box>
                      </td>
                      <td>{item.email}</td>
                      <td>
                        <Typography variant="caption" sx={{ display: 'block', fontWeight: 600 }}>{item.ocupacaoOperacional}</Typography>
                        <Typography variant="caption" color="textSecondary">{item.filial}</Typography>
                      </td>
                      <td>
                         <Box sx={{ px: 1, py: 0.5, bgcolor: '#f1f5f9', borderRadius: '6px', display: 'inline-block' }}>
                            <Typography variant="caption" sx={{ fontWeight: 700 }}>{item?.perfil?.nome || 'N/A'}</Typography>
                         </Box>
                      </td>
                      <td>
                        <Template.device>{item?.sessionDevice || "0"}</Template.device>
                      </td>
                      <td style={{ fontSize: '11px', color: '#64748b' }}>
                        {item?.sessionLastLogin ? handleConvetData(item?.sessionLastLogin) : "Sem acesso"}
                      </td>
                      <td>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Template.ativo ativo={item?.ativo} />
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            {item?.ativo ? "Ativo" : "Inativo"}
                          </Typography>
                        </Box>
                      </td>
                      {permission?.includes("ADICIONAR_ACESSO") && (
                        <td>
                          <Template.trBTN>
                            <Tooltip title="Editar">
                              <IconButton size="small" onClick={() => hendleUpdate(item)}>
                                <EditIcon fontSize="small" sx={{ color: '#64748b' }} />
                              </IconButton>
                            </Tooltip>
                            
                            <Tooltip title={item.ativo ? "Bloquear" : "Ativar"}>
                                <IconButton 
                                    size="small" 
                                    onClick={() => item.ativo ? handleAtivoFalse(item.id) : handleAtivo(item.id)}
                                    sx={{ color: item.ativo ? "#ef4444" : "#22c55e" }}
                                >
                                    {item.ativo ? <LockOpenIcon fontSize="small" /> : <LockIcon fontSize="small" />}
                                </IconButton>
                            </Tooltip>
                          </Template.trBTN>
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </Template.Table>
          </Template.TableContainer>
        </Template.FormSub>

        {updateAtivo && (
          <PopupUpdatePerfilComponent 
            ID={undefined} 
            handleConfirm={(w) => hendleBuscaApi(w, null, null)} 
            handleCancel={() => setUpdateModal(false)} 
            message={""} 
            ativoBtn={false} 
          />
        )}
        {loading && <LoadingSecundary />}
      </Template.container>
    </>
  );
};