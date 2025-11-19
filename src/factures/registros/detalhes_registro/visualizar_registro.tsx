import Template from "./visulizar_registroc";
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
import api from "../../../service/api_secundaria";
import ImageDropZone from "../../novo registro/Drop/ImageDropZone";
import type { RegistroVisitante } from "../../../types/registros";
import { subjet } from "../../../service/jwt/jwtservice";
import type { AtualizaStatus } from "../../../types/stualizaStatus";
import { notify } from "../../../service/snackbarService";
import { useEffect, useState } from "react";
import { ImageModal } from "../../../components/Galeria/Galeria";
import { IconButton } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit"
import { PopupUpdateResgistroComponent } from "../../../components/controleDeacesso/UpdateRegistro/popup/updateRegistro";
import { AlertComponent } from "../../../components/alert/alertaComponent";

const VisualizarRegistro = () => {
  const usuario = subjet()
  const queryParams = new URLSearchParams(window.location.search);
  const numeroDoRegistro: any = queryParams.get("order");
  const [item, setRegistro] = useState<RegistroVisitante | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [resetCounter, setResetCounter] = useState(0);
  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
  };
  const detalhes = async () => {
    const resposta = await api.consuta_portaria(numeroDoRegistro);
    if (resposta != null) {
      setRegistro(resposta)
      setResetCounter(prev => prev + 1)
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    detalhes()
  }, [numeroDoRegistro])
  const [loading, setLoading] = useState(false);
  const [ativo, setAtivo] = useState(false);
  const [imagemAtivo, setImagemAtivo] = useState(false)
  const [Imagem, setImagem] = useState("");
  const hendleBTNIMG = (imagem: string) => {
    setImagemAtivo(true)
    setImagem(imagem)
  }
  const hendleUpdate = () => {
    setAtivo(true)
  }
  const volta = () => {
    setAtivo(false)
    detalhes()
  }
  const solicitarLiberacao = async (registroId: any) => {
    setLoading(true)
    const usuarioId = usuario?.id as any;
    const data: AtualizaStatus = {
      usuarioId,
      registroId
    }
    if (selectedFile != null) {
      try {
        const resposta = await api.alterarEntrada(data, selectedFile as any);
        if (resposta) {
          notify(resposta.msg, "success")
          setResetCounter(prev => prev + 1)
          const detalhesAtualizados = await api.consuta_portaria(numeroDoRegistro);
          if (detalhesAtualizados) {
            setRegistro(detalhesAtualizados);
            setLoading(false)
          }
        }
      } catch (error) {
        notify("Erro ao solicitar liberação", "error");
      } finally {
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        notify("Selecione uma imagem", "error")
        setLoading(false)
      }, 2000)
    }

  }
  const permissions: string[] = usuario?.permissoes || [];
  const permission = permissions.includes("REGISTRAR_ENTRADA")
  const permissionEdit = permissions.includes("EDITAR_REGISTRO")
  const SolicitarSaida = async (registroId: any) => {
    setLoading(true)
    const usuarioId = usuario?.id as any;
    const data: AtualizaStatus = {
      usuarioId,
      registroId
    }
    if (selectedFile != null) {
      console.log("Dados enviados:", data, selectedFile);

      const resposta = await api.alterarSaida(data, selectedFile as any);
      if (resposta) {
        notify(resposta.msg, "success")
        const detalhesAtualizados = await api.consuta_portaria(numeroDoRegistro);
        setResetCounter(prev => prev + 1)
        if (detalhesAtualizados) {
          setRegistro(detalhesAtualizados);
          setLoading(false)
        }
      }

    } else {
      setTimeout(() => {
        notify("Selecione uma imagem", "error")
        setLoading(false)
      }, 2000)
    }

  }
  const retornaCorStatus = (status: any) => {
    switch (status) {
      case "AGUARDANDO_ENTRADA":
        return "#2563EB";
      case "AGUARDANDO_SAIDA":
        return "#D97706";
      case "SAIDA_LIBERADA":
        return "#059669";
      default:
        return "#DC2626";
    }
  };
  return (
    <>
      {item ? (
        <div>
          <Template.Area>
            <Template.Container>
              {/* Status do pedido */}
              <Template.heanderPedido>
                <Template.tituloPedido>PRT: #{item?.protocolo}</Template.tituloPedido>
                <Template.status>
                  <Template.p></Template.p><Template.Chip color={retornaCorStatus(item?.status)}>{item?.status.replace("_", " ")}</Template.Chip>
                  {permissionEdit && !item.status.includes("SAIDA_LIBERADA") &&
                    <Template.edit onClick={hendleUpdate}>
                      <IconButton aria-label="mais opções" sx={{ color: "#000" }}>
                        <EditIcon />
                      </IconButton>
                    </Template.edit>
                  }
                </Template.status>
              </Template.heanderPedido>
              <Template.CardCentro >
                <Template.Image src={item?.visitante.imagem} />
                <Template.ItemDetails>
                  <Template.AreaItemJust>
                    <Template.Label>Nome Completo:</Template.Label>
                    <Template.LabelSubtitulo>{item?.visitante?.nomeCompleto}</Template.LabelSubtitulo>
                  </Template.AreaItemJust>
                  <Template.AreaItemJust>
                    <Template.Label>Tipo de Pessoa:</Template.Label>
                    <Template.LabelSubtitulo>{item?.visitante.ocupacao.toUpperCase()}</Template.LabelSubtitulo>
                  </Template.AreaItemJust>
                  {/* <p><strong>Data entrada:</strong> <Template.Bold>1100011</Template.Bold></p> */}
                </Template.ItemDetails>
                <Template.ItemDetails>
                  <Template.AreaItemJust>
                    <Template.Label>Categoria de Acesso:</Template.Label>
                    <Template.LabelSubtitulo>{item?.visitante?.tipoAcesso}</Template.LabelSubtitulo>
                  </Template.AreaItemJust>
                  <Template.AreaItemJust>
                    <Template.Label>Placa do Veículo:</Template.Label>
                    <Template.LabelSubtitulo>{item?.placaVeiculo}</Template.LabelSubtitulo>
                  </Template.AreaItemJust>
                  {/* <p><strong>Data entrada:</strong> <Template.Bold>1100011</Template.Bold></p> */}
                </Template.ItemDetails>
              </Template.CardCentro>

              <Template.Card>
                <Template.SummaryRow>
                  <Template.AreaItemJustCenter>
                    <Template.Label>Ocupação Liberada:</Template.Label>
                    <Template.LabelSubtitulo>{item?.ocupacaoLiberada}</Template.LabelSubtitulo>
                  </Template.AreaItemJustCenter>
                  <Template.AreaItemJustRigth>
                    <Template.Label>Data Criacao:</Template.Label>
                    <Template.LabelSubtitulo style={{ fontSize: 11 }}>
                      {new Date(item?.dataCriacao as any).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </Template.LabelSubtitulo>
                  </Template.AreaItemJustRigth>
                </Template.SummaryRow>
                <Template.SummaryRow>
                  <Template.AreaItemJustCenter>
                    <Template.Label>Destino da Visita:</Template.Label>
                    <Template.LabelSubtitulo>{item?.bloco}</Template.LabelSubtitulo>
                  </Template.AreaItemJustCenter>
                  <Template.AreaItemJustRigth>
                    <Template.Label>Unidade / Filial:</Template.Label>
                    <Template.LabelSubtitulo>
                      {item?.filial ? item?.filial : "N/A"}
                    </Template.LabelSubtitulo>
                  </Template.AreaItemJustRigth>
                </Template.SummaryRow>
                {/* <Template.SummaryRow>
              <Template.AreaItemJustCenter>
                <Template.Label>Autorizador:</Template.Label>
                <Template.LabelSubtitulo>{item?.autorizador.nome}</Template.LabelSubtitulo>
              </Template.AreaItemJustCenter>
              <Template.AreaItemJustRigth>
                <Template.Label>Função Autorizador:</Template.Label>
                <Template.LabelSubtitulo>{item?.autorizador.ocupacaoOperacional}</Template.LabelSubtitulo>
              </Template.AreaItemJustRigth>
            </Template.SummaryRow> */}
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Template.Label>Observações:</Template.Label>
                  <Template.LabelSubtitulo>{item?.Obs}</Template.LabelSubtitulo>
                </div >
                <Template.imagemArea>
                  {item?.entrada && item?.entrada?.imagem &&
                    <Template.ImagemItemRecebido>
                      <p><strong>Imagem Entrada:</strong></p>
                      <Template.ItemImage onClick={() => hendleBTNIMG(item.entrada.imagem)} src={item?.entrada?.imagem} />
                    </Template.ImagemItemRecebido>
                  }
                  {item?.saida && item?.saida?.imagem &&
                    <Template.ImagemItemRecebido>
                      <p><strong>Imagem Saida:</strong></p>
                      <Template.ItemImage onClick={() => hendleBTNIMG(item?.saida?.imagem)} src={item?.saida?.imagem} />
                    </Template.ImagemItemRecebido>
                  }

                </Template.imagemArea>
                {permission &&
                  <>
                    {item?.ativo &&
                      <Template.ImagemItemRecebido>
                        <Template.LabelSubtitulo>Imagem do Porta-malas *</Template.LabelSubtitulo>
                        <ImageDropZone onFileSelect={handleFileSelect} resetSignal={resetCounter}></ImageDropZone>
                      </Template.ImagemItemRecebido>
                    }
                    {

                      item?.status.includes("AGUARDANDO_ENTRADA") ? (
                        <Template.Button ativo={item?.ativo || !selectedFile} onClick={() => solicitarLiberacao(item?.id)}>Solicitar Liberação</Template.Button>
                      ) : (
                        <Template.Button ativo={item?.ativo} onClick={() => SolicitarSaida(item?.id)}>Solicitar Saida</Template.Button>
                      )
                    }
                  </>
                }
              </Template.Card>
              <AlertComponent titulo="info"
                msg={`Autorizado por ${item?.autorizador?.nome} (${item?.autorizador?.ocupacaoOperacional})`}

              />
            </Template.Container>
            {
              imagemAtivo &&
              <ImageModal src={Imagem} open={imagemAtivo} onClose={() => setImagemAtivo(false)} />
            }
            {loading &&
              <LoadingSecundary></LoadingSecundary>
            }
            {/* {selectedFile &&
          <PopupUpdatePerfilComponent ID={undefined} handleConfirm={} handleCancel={function (): void {
            throw new Error("Function not implemented.");
          } } message={""} ativoBtn={false}></PopupUpdatePerfilComponent>
        } */}

          </Template.Area>
          {permissionEdit && ativo &&
            <PopupUpdateResgistroComponent data={item as any} handleCancel={volta} message={""} ativoBtn={false} />
          }
        </div>
      ) : (<>
        <Template.semItens>
          <Template.iconSemItens></Template.iconSemItens>
          Nenhum item encontrado
        </Template.semItens>
      </>)}
    </>
  );
};

export default VisualizarRegistro;
