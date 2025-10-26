import { useEffect, useState } from "react";
import Template from "./logsCss"
import Api from "../../service/api"
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField, IconButton } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
export const LogsComponets = () => {
  const [lista, setLista] = useState<any[]>([])
  const [id, setId] = useState(false);
  const [busca, setBusca] = useState("")
  const nativete = useNavigate()
  const onSubmit = async () => {
    const resposta = await Api.listAusuario(busca);
    if (resposta) {
      setLista(resposta.content)
    }
  }
  useEffect(() => {
    if (busca.trim() === "") {
      onSubmit(); // se o campo estiver vazio, busca toda a lista
    }
  }, [busca]);

  const hendleDelete = (id: any) => {
    setId(id)
  }
  const hendleUpdate = () => {
    setId(id)
  }
  const handleNovoUsuario = () => {
    nativete("/configuracoes/cadastro/usuario")
  }
  return (
    <>
      <Template.container>
         <Template.titulo>Logs do Sistema</Template.titulo>
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
                      <td >
                        <Template.trBTN>
                          <IconButton
                            aria-label="editar"
                            onClick={() => hendleUpdate()}
                            sx={{
                              color: "black",
                              "&:hover": { backgroundColor: "#e0e0e0" },
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label="deletar"
                            onClick={() => hendleDelete(item.id)}
                            sx={{
                              color: 'black',
                              '&:hover': {
                                backgroundColor: '#f0f0f0',
                              },
                            }}
                          >
                            <DeleteIcon />
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
          <PopupComponent ID={id} handleCancel={() => setAtivo(false)} handleConfirm={function (): void {
            throw new Error("Function not implemented.");
          }} message={"Deseja realmente atualizar o item com ID"} />
        } */}
      </Template.container>
    </>
  )
}