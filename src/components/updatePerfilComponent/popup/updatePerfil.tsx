import Template from "./updatePerfilCss";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../../service/api";

type Props = {
  ID: any;
  handleConfirm: (n:any) => void;
  handleCancel: () => void;
  message: string;
  ativoBtn: boolean
};
type FormData = {
  idPerfil: any;
};
export const PopupUpdatePerfilComponent = ({handleConfirm, handleCancel}: Props) => {
  const { register, handleSubmit } = useForm<FormData>()
  const [listaPerfil, setListaPerfil] = useState<any[]>();
  useEffect(() => {
    const hendleBnt = async () => {
      const resposta = await api.listaPerfil();
      if (resposta && resposta.perfis) {
        setListaPerfil(resposta.perfis);
      }
    }
    hendleBnt();

  }, [])
  return (
    <Template.container>
      <Template.container_int>
        <Template.content>
          <Template.SelectItens {...register("idPerfil", { required: "Selecione o perfil" })}>
            <Template.Options value="">Selecione o perfil</Template.Options>
            {
              listaPerfil?.flatMap(perfil => (
                <Template.Options key={perfil?.id} value={perfil.id}>{perfil.nome}</Template.Options>
              ))
            }
          </Template.SelectItens>
          <Template.buttons>
            <Button
              variant="contained"
              color="error"
              onClick={handleSubmit(handleConfirm)}
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
