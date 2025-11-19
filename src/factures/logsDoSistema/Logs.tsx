import { useEffect, useState, type ChangeEvent } from "react";
import Template from "./logsCss"
import Api from "../../service/api"
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField, IconButton } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { PopupComponent } from "../../components/popup/popupComponent";
import { LoadingSecundary } from "../../components/LoadingSecundary/LoadingSecundary";
import { Paginator } from "../../components/paginator/paginator";
export const LogsComponets = () => {
  const [lista, setLista] = useState<any[]>([])
  const [id, setId] = useState(false);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(false)
  const [ativo, setAtivo] = useState(false);
  const [totaPage, setTotalPage] = useState(0)
  const onSubmit = async (pageNumer?: any) => {
    const resposta = await Api.buscaLogs(busca, pageNumer);
    setLoading(true)
    if (resposta.content) {
      setTimeout(() => {
        setLoading(false);
        setLista(resposta.content);
        setTotalPage(resposta.totalPages);
      }, 1000)


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
  }, [busca]);

  const hendleDelete = (id: any) => {
    setId(id)
    setAtivo(true)
  }
  const hendleUpdate = () => {
    setId(id)
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
            <Paginator totalPage={totaPage} handleNextPage={handleNextPage}/>
          </Template.CamposInput>

          <Template.TableContainer>
            <Template.Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>ID_USUARIO</th>
                  <th>USUARIO</th>
                  <th>DESCRIÇÃO</th>
                  <th>AÇÂO</th>
                  <th>DATA</th>
                  <th>FILIAL</th>
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
                      <td>{item.id}</td>
                      <td>{item.usuarioId}</td>
                      <td>{item.usuario}</td>
                      <td>{item.descricao}</td>
                      <td>{item.acao}</td>
                      <td>{new Date(item?.dataHora as any).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}</td>
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
        {ativo &&
          <PopupComponent handleCancel={() => setAtivo(false)} handleConfirm={() => { }} message={"Deseja realmente atualizar o item com ID"} ativoBtn={false} />
        }
        {loading &&
          <LoadingSecundary />
        }
      </Template.container>
    </>
  )
}