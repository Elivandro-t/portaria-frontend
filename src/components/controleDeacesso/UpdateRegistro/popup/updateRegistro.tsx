import Template from "./updateRegistroCss";
import { Button } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import apiSec from "../../../../service/api_secundaria"
import type { RegistroVisitante } from "../../../../types/registros";
import api from "../../../../service/api";
import { notify } from "../../../../service/snackbarService";
import serviceTipoPessoa from "../../../../service/tipoPessoaApi/serviceTipoPessoa";
import { subjet } from "../../../../service/jwt/jwtservice";

type Props = {
  handleCancel: () => void;
  message: string;
  ativoBtn: boolean,
  data: RegistroVisitante
};
type FormData = {
  id: any;
  nomeCompleto: any
  placaVeiculo: any,
  numeroTelefone: any,
  bloco: any,
  tipoPessoa: string,
  tipoDeAcesso: string,
  dataAcesso?:any
};
type bloco = {
  id: number,
  nome: any
}
export const PopupUpdateResgistroComponent = ({ handleCancel, data }: Props) => {
  const { register, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      nomeCompleto: data.nomeCompleto || "",
      placaVeiculo: data?.placaVeiculo || "",
      numeroTelefone: data?.visitante.numeroTelefone || "",
      bloco: data.bloco || "",
      tipoPessoa: data.tipPessoa,
      tipoDeAcesso: data?.visitante.tipoAcesso || data.visitante.recorrencia?.nome
    },
  })
  const usuario = subjet();
  const valorSelecionado = watch("bloco")
  const valorSelecionadoTipo = watch("tipoPessoa")
  const tipoAcesso = watch("tipoDeAcesso")
  const [blocos, setBlocos] = useState<bloco[]>([])
  const [ocupacoes, setOcupacao] = useState<any[]>([]);
  const [recorrencia, setRecorrencia] = useState<any[]>([])

  async function henfleConfirm(dataInput: FormData) {
    dataInput.id = data.id;
    const TipoAcessoRecorrencia = dataInput.tipoDeAcesso;
    if(TipoAcessoRecorrencia==="RECORRENTE TEMPORARIO" && dataInput.dataAcesso==null){
      notify("informa uma data valida","error");
    }
 
    const response = await api.atualizarRegistro(dataInput);
    if (response.msg) {
      notify(response.msg, "success");
      handleCancel()
    }
  }
  const buscaApi = async () => {
    const resposta = await serviceTipoPessoa.lista();
    if (resposta.tipoPessoa) {
      setOcupacao(resposta.tipoPessoa)
    }

  }
  const buscar_recorencia = async () => {
    const resposta = await serviceTipoPessoa.recorrecia();
    if (resposta.recorrencia) {
      setRecorrencia(resposta.recorrencia)
    }

  }
  useEffect(() => {
    buscaApi();
    buscar_recorencia()
  }, [])
  useEffect(() => {
    const hendleBusca = async () => {
      const resposta = await apiSec.blocos();
      if (resposta.blocos) {
        setBlocos(resposta?.blocos);

      }
    }
    setValue("nomeCompleto", data.nomeCompleto || "");
    setValue("placaVeiculo", data.placaVeiculo || "");
    setValue("numeroTelefone", data.visitante.numeroTelefone || "");
    setValue("bloco", data.bloco || "");
    hendleBusca()
  }, [data, setValue])


  const permissions: string[] = usuario?.permissoes || [];
  const permissionEdit = permissions.includes("GERENCIAR_USUARIOS")
  return (
    <Template.container>
      <Template.container_int>
        <Template.content>
          <Template.CamposInput>
            <Template.label>Nome *</Template.label>
            <Template.Campos
              type="text"
              autoComplete="current-password"
              placeholder="Placa do veiculo"

              {...register("nomeCompleto", {
                required: "Nome E obrigatorio"
              })}
            />
          </Template.CamposInput>
          <Template.CamposInput>
            <Template.label>telefone *</Template.label>
            <Template.Campos
              type="text"
              autoComplete="current-password"
              placeholder="Placa do veiculo"

              {...register("numeroTelefone", {
              })}
            />
          </Template.CamposInput>
          <Template.CamposInput>
            <Template.label>Placa *</Template.label>
            <Template.Campos
              type="text"
              autoComplete="current-password"
              placeholder="Placa do veiculo"
              {...register("placaVeiculo", {
                required: "Placa E obrigatorio",
                pattern: {
                  value: /^([^0-9][^0-9][^0-9][0-9][A-Za-z0-9][0-9][0-9])/,
                  message: "Formato de placa inválido. Ex: ABC1234 ou ABC1D23",
                }
              })}
            />
          </Template.CamposInput>
          <Template.CamposInput>
            <Template.label >Bloco</Template.label>
            <Template.SelectItens {
              ...register("bloco")} value={valorSelecionado} onChange={e => setValue("bloco", e.target.value)}>
              {blocos.some(b => b.nome === valorSelecionado) ? null : (
                <Template.Options value={valorSelecionado}>
                  {valorSelecionado}
                </Template.Options>

              )}

              {blocos.map((item) => (
                <Template.Options key={item.id} value={item.nome.toUpperCase()}>
                  {item.nome}
                </Template.Options>
              ))}

            </Template.SelectItens>
          </Template.CamposInput>
          <Template.CamposInput>
            <Template.label >Tipo Pessoa</Template.label>
            <Template.SelectItens {
              ...register("tipoPessoa")} value={valorSelecionadoTipo} onChange={e => setValue("tipoPessoa", e.target.value)}>
              {ocupacoes.some(b => b.nome.toLowerCase() === valorSelecionado.toLowerCase()) ? null : (
                <Template.Options value={valorSelecionadoTipo}>
                  {valorSelecionadoTipo}
                </Template.Options>

              )}

              {ocupacoes.map((item) => (
                <Template.Options key={item.id} value={item.nome.toUpperCase()}>
                  {item.nome}
                </Template.Options>
              ))}

            </Template.SelectItens>
          </Template.CamposInput>
          {permissionEdit &&
            <Fragment>
              <Template.CamposInput>
                <Template.label >Recorrencia de Acesso</Template.label>
                <Template.SelectItens {
                  ...register("tipoDeAcesso")} value={tipoAcesso} onChange={e => setValue("tipoDeAcesso", e.target.value)}>
                  {recorrencia.some(b => b?.nome.toLowerCase() === tipoAcesso.toLowerCase()) ? null : (
                    <Template.Options value={tipoAcesso}>
                      {tipoAcesso}
                    </Template.Options>

                  )}

                  {recorrencia.map((item) => (
                    <Template.Options key={item.id} value={item.nome.toUpperCase()}>
                      {item.nome}
                    </Template.Options>
                  ))}

                </Template.SelectItens>
              </Template.CamposInput>
              {tipoAcesso?.toUpperCase() === "RECORRENTE TEMPORARIO" &&
                <Template.CamposInput>
                  <Template.label>Data </Template.label>
                  <Template.Campos placeholder="data" type="date"
                    autoComplete="current-password"
                    {...register("dataAcesso")}

                  />

                </Template.CamposInput>
              }
            </Fragment>
          }
          <Template.buttons>
            <Button
              variant="contained"
              color="error"
              onClick={handleSubmit(henfleConfirm)}
              sx={{ borderRadius: 2 }}
            >
              Atualizar
            </Button>

            <Button
              variant="outlined"
              onClick={handleCancel}
              sx={{
                borderRadius: 2,
                color: "black",
                borderColor: "#bdbdbd",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              Cancelar
            </Button>
          </Template.buttons>
        </Template.content>
      </Template.container_int>
    </Template.container>
  );
};
