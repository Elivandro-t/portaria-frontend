import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BotaoVoltar = () => {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(-1)}
      sx={{
        color: "#fff",            // texto branco
        border: "none",           // sem borda
        padding: 0,               // sem padding extra
        minWidth: 0
      }}
    >
    </Button>
  );
};
