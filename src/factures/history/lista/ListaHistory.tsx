import { useEffect, useState } from "react";
import Template from "./ListaHistorcss"
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Api from "../../../service/api"
import { PopupComponent } from "../../../components/popup/popupComponent";
import type { HistoricoPortaria } from "../../../types/historico/historico";
import { subjet } from "../../../service/jwt/jwtservice";
export const ListahistoryComponent = () => {
  const [lista, setLista] = useState<HistoricoPortaria[]>([])
  const [ativo, setAtivo] = useState(false);
  const [id, setId] = useState("");
  const [busca, setBusca] = useState("")
  const [msg,setMsg]= useState("")
  const [ativoBtn,setBtnAtivo]= useState(true)
  const user = subjet()

  const onSubmit = async () => {
    const resposta = await Api.listHistory(busca);
    if (resposta) {
      setLista(resposta.content)
    }
  }
  useEffect(() => {
    if (busca.trim() === "") {
      onSubmit(); // se o campo estiver vazio, busca toda a lista
    }
  }, [busca])
  const hendleDelete = (item: any,) => {
    setMsg(`Deseja realmente deletar o item ${item.id}`)
    setAtivo(true);
    setId(item.id)
  }
  const hendleDeleteHistory = async()=>{
   await Api.deletar(id,user?.id);
       setMsg(`${id} Deletado com sucesso`);
       setBtnAtivo(false)
      await onSubmit();
      setAtivo(false);
    
  }
  const retornaCorStatus = (status: any) => {
    switch (status) {
      case "AGUARDANDO_ENTRADA":
        return "blue";
      case "AGUARDANDO_SAIDA":
        return "#787018";
      case "SAIDA_LIBERADA":
        return "green";
      default:
        return "red";
    }
  }
  return (
    <>
      <Template.container>
        <Template.titulo>Histórico Portaria</Template.titulo>
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
          </Template.CamposInput>

          <Template.TableContainer>
            <Template.Table>
              <thead>
                <tr>
                  <th>Protocolo</th>
                  <th>Nome do Visitante</th>
                  <th>Ocupação</th>
                  <th>Placa</th>
                  <th>Bloco</th>
                  <th>Status</th>
                  <th>Data Entrada</th>
                  <th>Data Saída</th>
                  <th>Fiscal Entrada</th>
                  <th>Fiscal Saída</th>
                  <th>Criador</th>
                  <th></th> {/* ações */}
                </tr>
              </thead>
              <tbody>
                {lista.length == 0 &&
                  <Template.erro>Sem dados</Template.erro>
                }
                {
                  lista.flatMap((item, key) => (
                    <tr key={key}>
                      <td>#{item?.protocolo || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.nomeCompleto || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.visitante?.ocupacao || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.placaVeiculo || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.bloco || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.status.replace("_"," ") || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.dataEntrada ? new Date(item.dataEntrada).toLocaleString("pt-BR") : (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.dataSaida ? new Date(item.dataSaida).toLocaleString("pt-BR") : (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.nomeFiscaEntrada || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.nomeFiscaSaida || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.criador?.nome || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td >
                        <Template.trBTN>
                          <IconButton
                            aria-label="deletar"
                            onClick={() => hendleDelete(item)}
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
          <PopupComponent ID={id} handleCancel={() => setAtivo(false)} handleConfirm={hendleDeleteHistory} message={msg} ativoBtn={ativoBtn} />
        }
      </Template.container>
    </>
  )
}