import { useEffect, useState, type ChangeEvent } from "react";
import Template from "./ListaHistorcss"
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField, IconButton, Avatar } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Api from "../../../service/api"
import { PopupComponent } from "../../../components/popup/popupComponent";
import type { HistoricoPortaria } from "../../../types/historico/historico";
import { subjet } from "../../../service/jwt/jwtservice";
import ImageIcon from '@mui/icons-material/Image';
// Versão mais recente do MUI
import DownloadIcon from '@mui/icons-material/Download';
import { ModalGlobalComponent } from "../../../components/modalGlobal/modalGlobalComponent";
import { Paginator } from "../../../components/paginator/paginator";
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
export const ListahistoryComponent = () => {
  const [lista, setLista] = useState<HistoricoPortaria[]>([])
  const [ativo, setAtivo] = useState(false);
  const [id, setId] = useState("");
  const [busca, setBusca] = useState("")
  const [msg, setMsg] = useState("")
  const [ativoBtn, setBtnAtivo] = useState(true)
  const user = subjet()
  const [exibeImagem, setExibeImagem] = useState(false);
  const [loading, setLoading] = useState(false)

  const [totaPage, setTotalPage] = useState(0)

  const [item, setItem] = useState<any>()


  const onSubmit = async (pageUnique?: any) => {
    setLoading(true)
    const resposta = await Api.listHistory(busca, pageUnique);
    if (resposta) {
      setTimeout(() => {
        setLoading(false);
        setLista(resposta.content);
        setTotalPage(resposta?.totalPages);
      }, 1000);

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
  const handleDeleteHistory = async () => {
    await Api.deletar(id, user?.id);
    setMsg(`${id} Deletado com sucesso`);
    setBtnAtivo(false)
    await onSubmit();
    setAtivo(false);

  }

  const handleModalImg = (item: any) => {
    setExibeImagem(true)
    setItem(item)
  }
  const handleNextPage = (_: ChangeEvent<unknown>, value: number) => {
    const valueBusca = value - 1;
    onSubmit(valueBusca);
  }
  const handleExibeImagem = async (imagem: any, nomeImagem: any) => {
    const response = await fetch(imagem)
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = nomeImagem;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
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
            <Paginator totalPage={totaPage} handleNextPage={handleNextPage} />
          </Template.CamposInput>

          <Template.TableContainer>
            <Template.Table>
              <thead>
                <tr>
                  <th>Avatar</th>
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
                      <td>
                        {item?.visitante?.imagem ? (
                          <Avatar sx={{ width: 35, height: 35, objectFit: 'contain' }} alt={item?.visitante?.nomeCompleto} src={item?.visitante?.imagem} />

                        ) : (
                          <Avatar sx={{ width: 35, height: 35, objectFit: 'contain' }} alt={item?.visitante?.nomeCompleto} src="/static/images/avatar/2.jpg" />

                        )
                        }
                      </td>
                      <td>#{item?.protocolo || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.nomeCompleto || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.visitante?.ocupacao || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.placaVeiculo || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.bloco || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.status.replace("_", " ") || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.dataEntrada ? new Date(item.dataEntrada).toLocaleString("pt-BR") : (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.dataSaida ? new Date(item.dataSaida).toLocaleString("pt-BR") : (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.nomeFiscaEntrada || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.nomeFiscaSaida || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.criador?.nome || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td >
                        <Template.trBTN>
                          {item?.imagemEntrada &&
                            <IconButton onClick={() => handleModalImg(item)}>
                              <ImageIcon />
                            </IconButton>
                          }
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
          <PopupComponent handleCancel={() => setAtivo(false)} handleConfirm={handleDeleteHistory} message={msg} ativoBtn={ativoBtn} />
        }
        {
          exibeImagem &&
          <ModalGlobalComponent cancelar={() => setExibeImagem(false)} >

            <Template.visitante>
              <Template.imgemVisitante src={item?.visitante?.imagem} />
              <h5>Visitante: {item?.nomeCompleto}</h5>
            </Template.visitante>
            <Template.imagemArea>
              {item?.imagemEntrada &&
                <Template.divArea>
                  <Template.tituloLabel>Entrada: {new Date(item?.dataEntrada as any).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}</Template.tituloLabel>
                  <Template.btnDownload>
                    <IconButton onClick={() => handleExibeImagem(item?.imagemEntrada, "ImagemEntrada")} >
                      <DownloadIcon sx={{ color: '#75affa' }} />
                    </IconButton>
                  </Template.btnDownload>
                  <Template.imgem src={item?.imagemEntrada} alt="Imagem entrada" />
                </Template.divArea>

              }
              {item?.imagemSaida &&
                <Template.divArea>
                  <Template.tituloLabel>Saida {new Date(item?.dataSaida as any).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })} </Template.tituloLabel>
                  <Template.btnDownload >
                    <IconButton onClick={() => handleExibeImagem(item?.imagemSaida, "ImagemSaida")} >
                      <DownloadIcon sx={{ color: '#75affa' }} />
                    </IconButton>
                  </Template.btnDownload>
                  <Template.imgem src={item?.imagemSaida} alt="Imagem saida" />
                </Template.divArea>}
            </Template.imagemArea>

          </ModalGlobalComponent>
        }
        {loading &&
          <LoadingSecundary />
        }

      </Template.container>
    </>
  )
}