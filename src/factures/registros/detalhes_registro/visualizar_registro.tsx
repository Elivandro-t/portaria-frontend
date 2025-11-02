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
   const [ativo,setAtivo] = useState(false);
  const [imagemAtivo, setImagemAtivo] = useState(false)
  const [Imagem, setImagem] = useState("");
  // const hendlePagamentoPedidos = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     navigate(`/pagamento-pedidos/checkout?order=${numeroDoPedido}`, { replace: true, state: { refresh: Date.now() } })

  //   }, 2000)

  // }
  const hendleBTNIMG = (imagem: string) => {
    setImagemAtivo(true)
    setImagem(imagem)
  }
  const hendleUpdate=()=>{
    setAtivo(true)
  }
    const volta=()=>{
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
  // note que aqui o nome da propriedade deve bater com o payload real do seu token
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
      <Template.Area>
        <Template.Container>
          {/* Status do pedido */}
          <Template.heanderPedido>
            <Template.tituloPedido>Protocolo: #{item?.protocolo}</Template.tituloPedido>
            <Template.status>
              Status:<Template.Chip color={retornaCorStatus(item?.status)}>{item?.status.replace("_", " ")}</Template.Chip>
              {permissionEdit &&
                <Template.edit onClick={hendleUpdate}>
             <IconButton aria-label="mais opções"  sx={{ color: "#000" }}>
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
                <Template.Label>Nome:</Template.Label>
                <Template.LabelSubtitulo>{item?.visitante?.nomeCompleto}</Template.LabelSubtitulo>
              </Template.AreaItemJust>
              <Template.AreaItemJust>
                <Template.Label>Ocupação:</Template.Label>
                <Template.LabelSubtitulo>{item?.visitante.ocupacao}</Template.LabelSubtitulo>
              </Template.AreaItemJust>
              {/* <p><strong>Data entrada:</strong> <Template.Bold>1100011</Template.Bold></p> */}
            </Template.ItemDetails>
            <Template.ItemDetails>
              <Template.AreaItemJust>
                <Template.Label>Tipo de Acesso:</Template.Label>
                <Template.LabelSubtitulo>{item?.visitante?.tipoAcesso}</Template.LabelSubtitulo>
              </Template.AreaItemJust>
              <Template.AreaItemJust>
                <Template.Label>Placa Veiculo:</Template.Label>
                <Template.LabelSubtitulo>{item?.placaVeiculo}</Template.LabelSubtitulo>
              </Template.AreaItemJust>
              {/* <p><strong>Data entrada:</strong> <Template.Bold>1100011</Template.Bold></p> */}
            </Template.ItemDetails>
          </Template.CardCentro>

          <Template.Card>
            <Template.SummaryRow>
              <Template.AreaItemJustCenter>
                <Template.Label>Ocupação Liberada</Template.Label>
                <Template.LabelSubtitulo>{item?.ocupacaoLiberada}</Template.LabelSubtitulo>
              </Template.AreaItemJustCenter>
              <Template.AreaItemJustCenter>
                <Template.Label>Data Criacao:</Template.Label>
                <Template.LabelSubtitulo>
                  {new Date(item?.dataCriacao as any).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </Template.LabelSubtitulo>
              </Template.AreaItemJustCenter>
            </Template.SummaryRow>
            <Template.SummaryRow>
              <Template.AreaItemJustCenter>
                <Template.Label>Destino visita:</Template.Label>
                <Template.LabelSubtitulo>{item?.bloco}</Template.LabelSubtitulo>
              </Template.AreaItemJustCenter>
              <Template.AreaItemJustCenter>
                <Template.Label>Filial:</Template.Label>
                <Template.LabelSubtitulo>
                  {item?.filial ? item?.filial : "N/A"}
                </Template.LabelSubtitulo>
              </Template.AreaItemJustCenter>
            </Template.SummaryRow>
            <Template.SummaryRow>
              <Template.AreaItemJustCenter>
                <Template.Label>Autorizador:</Template.Label>
                <Template.LabelSubtitulo>{item?.autorizador.nome}</Template.LabelSubtitulo>
              </Template.AreaItemJustCenter>
              <Template.AreaItemJustCenter>
                <Template.Label>Função:</Template.Label>
                <Template.LabelSubtitulo>{item?.autorizador.ocupacaoOperacional}</Template.LabelSubtitulo>
              </Template.AreaItemJustCenter>
            </Template.SummaryRow>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Template.Label>OBS:</Template.Label>
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
      <PopupUpdateResgistroComponent data={item as any} handleCancel={volta} message={""} ativoBtn={false}/>
      }
    </>
  );
};

export default VisualizarRegistro;
