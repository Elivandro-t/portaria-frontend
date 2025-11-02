import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Home from "@mui/icons-material/Home";

import Template from "./btnCss"
export const BotaoVoltar = () => {
  const navigate = useNavigate();
   const hendleHome = ()=>{
         navigate("/verify")
   }
  return (
    <Template.container>
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
    <Template.Or>|</Template.Or>
    <Button
      startIcon={<Home />}
      onClick={hendleHome}
      sx={{
    color: "#fff",
    padding: "4px 12px",
    minWidth: 0,
    borderRadius: "8px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)", // fundo suave ao passar o mouse
      borderColor: "rgba(255, 255, 255, 0.4)",     // borda mais visível
      transform: "scale(1.05)"                     // leve aumento no hover
    }
  }}
    >
    </Button>
    </Template.container>
  );
};
