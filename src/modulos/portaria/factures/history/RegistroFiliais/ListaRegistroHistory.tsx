import { useEffect, useState, type ChangeEvent } from "react";
import Template from "./registroFiliaisCss"
import { TextField, IconButton, Avatar } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Api from "../../../service/apiRegistro/apiRegistro"
import VisibilityIcon from '@mui/icons-material/Visibility';
import ImageIcon from '@mui/icons-material/Image';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

import apiFiliais from "../../../service/filiaisApi/filiasAPi"
// Versão mais recente do MUI
import DownloadIcon from '@mui/icons-material/Download';
import { ModalGlobalComponent } from "../../../../../components/modalGlobal/modalGlobalComponent";
import { Paginator } from "../../../../../components/paginator/paginator";
import { LoadingSecundary } from "../../../../../components/LoadingSecundary/LoadingSecundary";
import { useNavigate } from "react-router-dom";
const listaSelect = [
  { nome: "Aberto", value: true },
  { nome: "Fechado", value: false }
]
import SelectVariants from "../../../../../components/select/selectFiltro";
export const ListaRegistroComponent = () => {
  const [lista, setLista] = useState<any[]>([])
  // const [ativo, setAtivo] = useState(false);
  // const [id, setId] = useState("");
  const navigate = useNavigate()
  const [busca, setBusca] = useState("")
  // const [msg, setMsg] = useState("")
  // const [ativoBtn, setBtnAtivo] = useState(true)
  // const user = subjet()
  const [exibeImagem, setExibeImagem] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any | null>(null);
  const [selectedFilial, setSelectedFilial] = useState<number | null>(null);



  const [totaPage, setTotalPage] = useState(0)

  const [item, setItem] = useState<any>()


  const onSubmit = async (pageUnique?: any) => {
    if (selectedValue) {
      console.log(selectedValue)
    }
    setLoading(true)
    const resposta = await Api.findAll(selectedFilial as any, busca, selectedValue as any, pageUnique);
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
  const [filiais, setFiliais] = useState<any[]>([]);
  const handleSearchFiliais = async () => {
    const resposta = await apiFiliais.lista();
    if (resposta?.filial) {
      setFiliais(resposta?.filial)
    }

  }

  useEffect(() => {
    handleSearchFiliais()
  }, [])
  // const hendleDelete = (item: any,) => {
  //   setMsg(`Deseja realmente deletar o item ${item.id}`)
  //   setAtivo(true);
  //   setId(item.id)
  // }
  // const handleDeleteHistory = async () => {
  //   // await Api.deletar(id, user?.id);
  //   // setMsg(`${id} Deletado com sucesso`);
  //   // setBtnAtivo(false)
  //   // await onSubmit();
  //   // setAtivo(false);

  // }

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
  const handleVisualItem = (id: any) => {
    setLoading(true)
    setTimeout(() => {
      navigate(`/controle/detalhes-registro?order=${id}`, { replace: false, state: { refresh: Date.now() } })
    }, 2000)
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
            <SelectVariants value={selectedValue} onChange={setSelectedValue} titulo={"Ativo"} list={listaSelect} />
            <SelectVariants value={selectedFilial} onChange={setSelectedFilial} titulo={"Filial"} list={filiais} />
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
                  <th>Ocupacao Liberada</th>
                  <th>Tipo de Acesso</th>
                  <th>Placa</th>
                  <th>Local da Visita</th>
                  <th>Status</th>
                  <th>Data Entrada</th>
                  <th>Data Saída</th>
                  <th>Fiscal Entrada</th>
                  <th>Fiscal Saída</th>
                  <th>Criador</th>
                  <th>Origem</th>
                  <th></th> {/* ações */}
                </tr>
              </thead>
              <tbody>
                {lista.length == 0 &&
                  <Template.erro>
                    <Template.semItens>
                      <Template.iconSemItens></Template.iconSemItens>
                      Nenhum item encontrado
                    </Template.semItens>
                  </Template.erro>
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
                      <td>{item?.ocupacaoLiberada || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.visitante?.tipoAcesso || item.visitante?.recorrencia?.nome || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.placaVeiculo || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.bloco || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td><Template.Chip color={retornaCorStatus(item?.status)}>{item?.status.replace("_", " ")}</Template.Chip></td>
                      <td>{item?.entrada?.dataEntrada ? new Date(item?.entrada?.dataEntrada).toLocaleString("pt-BR") : (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando Entrada"}</Template.Chip>)}</td>
                      <td>{item?.saida?.dataSaida ? new Date(item?.saida.dataSaida).toLocaleString("pt-BR") : (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando Saida"}</Template.Chip>)}</td>
                      <td>{item?.entrada?.nomeFiscal || (<Template.Chip color={retornaCorStatus(item?.status)}>{"N/A"}</Template.Chip>)}</td>
                      <td>{item?.saida?.nomeFiscal || (<Template.Chip color={retornaCorStatus(item?.status)}>{"N/A"}</Template.Chip>)}</td>
                      <td>{item?.autorizador?.nome || (<Template.Chip color={retornaCorStatus(item?.status)}>{"Aguardando processamento"}</Template.Chip>)}</td>
                      <td>{item?.filialSocitado}</td>

                      <td >
                        <Template.trBTN>
                          <IconButton
                            aria-label="deletar"
                            onClick={() => handleVisualItem(item.id)}
                            sx={{
                              color: 'black',
                              '&:hover': {
                                backgroundColor: '#f0f0f0',
                              },
                            }}
                          >
                            <VisibilityIcon />
                          </IconButton>
                          {item?.entrada?.imagem ? (
                            <IconButton onClick={() => handleModalImg(item)}>
                              <ImageIcon />
                            </IconButton>
                          ) : (
                            <IconButton disabled>
                              <ImageNotSupportedIcon />

                            </IconButton>
                          )
                          }
                          {/* <IconButton
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
                          </IconButton> */}

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
          <PopupComponent handleCancel={() => setAtivo(false)} handleConfirm={handleDeleteHistory} message={msg} ativoBtn={ativoBtn} />
        } */}
        {
          exibeImagem &&
          <ModalGlobalComponent cancelar={() => setExibeImagem(false)} >

            <Template.visitante>
              <Template.imgemVisitante src={item?.visitante?.imagem} />
              <h5>Visitante: {item?.visitante.nomeCompleto}</h5>
            </Template.visitante>
            <Template.imagemArea>
              {item?.entrada?.imagem &&
                <Template.divArea>
                  <Template.tituloLabel>Entrada: {new Date(item?.entrada?.dataEntrada as any).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}</Template.tituloLabel>
                  <Template.btnDownload>
                    <IconButton onClick={() => handleExibeImagem(item?.entrada?.imagem, "ImagemEntrada")} >
                      <DownloadIcon sx={{ color: '#75affa' }} />
                    </IconButton>
                  </Template.btnDownload>
                  <Template.imgem src={item?.entrada?.imagem} alt="Imagem entrada" />
                </Template.divArea>

              }
              {item?.saida?.imagem &&
                <Template.divArea>
                  <Template.tituloLabel>Saida {new Date(item?.saida?.dataSaida as any).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })} </Template.tituloLabel>
                  <Template.btnDownload >
                    <IconButton onClick={() => handleExibeImagem(item?.saida?.imagem, "ImagemSaida")} >
                      <DownloadIcon sx={{ color: '#75affa' }} />
                    </IconButton>
                  </Template.btnDownload>
                  <Template.imgem src={item?.saida?.imagem} alt="Imagem saida" />
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