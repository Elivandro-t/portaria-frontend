import Template from "./popupcss";
import { Button, Typography } from "@mui/material";

type Props = {
  handleCancel: () => void;
  message: string;
  ativoBtn: boolean
};

export const AlertComponent = ({handleCancel, message}: Props) => {
  return (
    <Template.container>
      <Template.container_int>
        <Template.content>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {message}
            </Typography>
          <Template.buttons>
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
