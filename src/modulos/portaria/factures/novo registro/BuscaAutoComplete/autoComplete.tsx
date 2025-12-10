import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ApiVisitante from "../../../service/visitanteApi/visitanteApi";
import { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";

interface VisitanteData {
  id: any;
  nomeCompleto: string;
  imagem: string;
  filial: number;
}

type Props = {
  value: string;
  setValue: (v: string) => void;
    onSelectData: (data: { id: number} | null) => void;

};

export const AutoCompleteComponet = ({ setValue, value,onSelectData }: Props) => {
  const [visitante, setVisitente] = useState<VisitanteData[]>([]);
  const [inpValue,setInptValue]=useState("")

  useEffect(() => {
    const resposta = async () => {
      const resposta = await ApiVisitante.FiltroVisitante();
      if (resposta?.content) {
        setVisitente(resposta.content);
      }
    };
    resposta();
  }, []);
const randomLista = (ar:VisitanteData[])=>{
    return [...ar].sort(()=>Math.random()-0.5).slice(0, 3);
  }
  const sugestoesRandom = useMemo(() => {
  return randomLista(visitante);
}, [visitante]);

  return (
    <Autocomplete<VisitanteData, false, false, true>
      freeSolo

      id="country-select-demo"

      sx={{
        width: {
          xs: "100%",
          sm: 400,
          md: 500,
          lg: 560
        }
      }}

      options={value
    ? visitante    // digitando → mostra todos
    : sugestoesRandom }

      inputValue={inpValue || value || ""}   // ✅ controle SOMENTE por string

      onInputChange={(__, newInputValue,reason) => {
        // ✅ TEXTO DIGITADO
        if(reason=="input"){
        setValue(newInputValue);
        setInptValue("")
        onSelectData(null); // Limpa id/placa
        }

      }}

      onChange={(__, newInputValue) => {
       if (typeof newInputValue === "object" && newInputValue) {
          setInptValue(newInputValue.nomeCompleto);
          // ✅ dado oculto
          onSelectData({
            id: newInputValue.id
          });
          return;
        }

        // texto livre
        setValue(newInputValue || "");
        onSelectData(null);
      }}

      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.nomeCompleto
      }

      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <img
            loading="lazy"
            width="20"
            src={option.imagem}
            alt=""
            style={{ marginRight: 8 }}
          />
          {option.nomeCompleto}
        </Box>
      )}

      renderInput={(params) => (
        <TextField
          {...params}
          label="Busque um Visitante ou Digite um nome para continuar"
          autoComplete="new-password"
        />
      )}
    />
  );
};
