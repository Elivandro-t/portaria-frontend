import DropPrincipal from "../DropPrincipal/ImageDropZone";
import Template from "./popupcss";
import { Button, Typography } from "@mui/material";

type Props = {
  handleConfirm: () => void;
  handleCancel: () => void;
  message: string;
  ativoBtn: boolean,
  handleFileSelect:(n:any)=>void,
  resetSignal:number

};

export const ModalSelectImagemUsuarioComponent = ({ handleConfirm,handleFileSelect,resetSignal, handleCancel, message, ativoBtn }: Props) => {
  return (
    <Template.container>
      <Template.container_int>
        <Template.content>
          <Typography variant="h6" sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {message}
            </Typography>
          </Typography>
          <DropPrincipal onFileSelect={handleFileSelect} resetSignal={resetSignal}/>

          <Template.buttons>
            {ativoBtn &&
              <Button
                variant="contained"
                color="error"
                onClick={handleConfirm}
                sx={{ borderRadius: 2 }}
              >
                Atualizar
              </Button>
            }

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
