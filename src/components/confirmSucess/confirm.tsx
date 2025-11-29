import Template from "./popupcss";
import { Button, Typography } from "@mui/material";

type Props = {
  handleConfirm: () => void;
  handleCancel: () => void;
  message: string;
  ativoBtn: boolean,
  btnName:any
};

export const ConfirmComponent = ({ handleConfirm, handleCancel, message, ativoBtn,btnName }: Props) => {
  return (
    <Template.container>
      <Template.container_int>
        <Template.content>
          <Typography variant="h6" sx={{ mb: 2 }}>
            <Typography dangerouslySetInnerHTML={{ __html: message }}  variant="h6" sx={{ mb: 2 }}>
            </Typography>
          </Typography>

          <Template.buttons>
            {ativoBtn &&
              <Button
                variant="contained"
                color="error"
                onClick={handleConfirm}
                sx={{ borderRadius: 2,fontSize:10 }}
              >
                {btnName}
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
