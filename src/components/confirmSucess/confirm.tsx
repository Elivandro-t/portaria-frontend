import { Confirm } from "../../modulos/portaria/components/confirm";
import Template from "./popupcss";
import { Button, Typography } from "@mui/material";

type Props = {
  handleConfirm: () => void;
  handleCancel: () => void;
  message: string;
  ativoBtn: boolean,
  btnName: any,
  confirm: "CONFIRM" | "SUCCESS" | "LOADING",
  titutlo: any
};

export const ConfirmComponent = ({ handleConfirm, handleCancel, message, ativoBtn, btnName, confirm, titutlo }: Props) => {

  return (
    <Template.container>
      <Template.container_int>
        {confirm === "LOADING" && (
          <Confirm status="LOADING" titulo={titutlo} />
        )}

        {confirm === "SUCCESS" && (
          <Template.confirm>
            <Confirm status="SUCCESS" titulo={titutlo} />
            <Template.loadingBar onAnimationEnd={() => {
              setTimeout(() => {
                handleCancel();
              }, 1000) 
            }}></Template.loadingBar>
          </Template.confirm>
        )}
        {confirm === "CONFIRM" &&
          <Template.content>
            <Typography variant="h6" sx={{ mb: 2 }}>
              <Typography dangerouslySetInnerHTML={{ __html: message }} variant="h6" sx={{ mb: 2 }}>
              </Typography>
            </Typography>
            <Template.buttons>
              {ativoBtn &&
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleConfirm}
                  sx={{ borderRadius: 2, fontSize: 10 }}
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
        }
      </Template.container_int>
    </Template.container >
  );
};
