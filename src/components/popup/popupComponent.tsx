import Template from "./popupcss";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Button, Typography } from "@mui/material";

type Props = {
  ID: any;
  handleConfirm: () => void;
  handleCancel: () => void;
    message: string;
    ativoBtn:boolean
};

export const PopupComponent = ({ ID, handleConfirm, handleCancel,message,ativoBtn }: Props) => {
  return (
    <Template.container>
      <Template.container_int>
        <Template.content>
          <Typography variant="h6" sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
  {message}
</Typography>?
          </Typography>

          <Template.buttons>
            {ativoBtn &&
              <Button
              variant="contained"
              color="error"
              onClick={handleConfirm}
              sx={{ borderRadius: 2 }}
            >
              Excluir
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
