import { useEffect, useState } from "react";
import Template from "./UsuariosCss"
import Api from "../../service/api"
import AddIcon from "@mui/icons-material/Add";
import { TextField, IconButton } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { notify } from "../../service/snackbarService";
import api from "../../service/api";
import { PopupUpdatePerfilComponent } from "../../components/updatePerfilComponent/popup/updatePerfil";
export const UsuarioListaComponets = () => {
  const [lista, setLista] = useState<any[]>([])
  const [id, setId] = useState(false);
  const [busca, setBusca] = useState("")
  const nativete = useNavigate()
  const onSubmit = async () => {
    const resposta = await Api.listAusuario(busca.trim());
    if (resposta) {
      setLista(resposta.content)
    }
  }
  useEffect(() => {
    if (busca.trim() === "") {
      onSubmit(); // se o campo estiver vazio, busca toda a lista
    }
  }, [busca])
  const hendleUpdate = (itemResposta:any) => {
    setId(itemResposta.id)
    setUpdateModal(true)
    console.log("data "+itemResposta)
  }
  const handleNovoUsuario = () => {
    nativete("/configuracoes/cadastro/usuario")
  }

  const [updateAtivo,setUpdateModal]=useState(false)
  const hendleBuscaApi = async (data: any) => {
              const response = await api.AdicionarPefil(id, data.idPerfil);
              if (response) {
                  setUpdateModal(false)
                  notify(response.msg, "success")
                   setTimeout(()=>{
                   onSubmit()
                   },1000)
  
              }
  
      }
  return (
    <>
      <Template.container>
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
          </Template.CamposInput>
          <Template.TableContainer>
            <Template.Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Função</th>
                  <th>Filial</th>
                  <th>Pefil</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {lista.length == 0 &&
                  <Template.erro>Sem dados</Template.erro>
                }
                {
                  lista.flatMap((item, key) => (
                    <tr key={key}>
                      <td>{item.nome}</td>
                      <td>{item.email}</td>
                      <td>{item.ocupacaoOperacional}</td>
                      <td>{item.filial}</td>
                       <td>{item?.perfil?.nome}</td>
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
                        </Template.trBTN>
                      </td>
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
        {updateAtivo&&
        <PopupUpdatePerfilComponent ID={undefined} handleConfirm={hendleBuscaApi} handleCancel={()=>setUpdateModal(false)} message={""} ativoBtn={false}/>
        }
      </Template.container>
    </>
  )
}