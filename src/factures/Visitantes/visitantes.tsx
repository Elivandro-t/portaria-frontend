import { useEffect, useState } from "react";
import Template from "./visitantesCss"
import Api from "../../service/api"
import type { Visitante } from "../../types/visitante";
import { TableComponent } from "../../components/tabela/Tabela";


export const VisitantesListaComponets = () => {
  const [lista, setLista] = useState<Visitante[]>([])
   const [busca,setBusca] = useState("")
  const onSubmit = async () => {
    const resposta = await Api.listaVisistante(busca);
    if (resposta) {
      setLista(resposta.content)
    }
  }
  useEffect(() => {
   if(busca.trim()===""){
     onSubmit()
   }
  }, [busca])
  return (
    <>
      <Template.container>
        <Template.FormSub >
          <Template.CamposInput >
            <Template.Campos
              autoComplete="current-password"
              placeholder="Buscar visitante"
              onChange={e=>setBusca(e.target.value)}
              onKeyDown={onSubmit}
            />
          </Template.CamposInput>
          {lista.length===0 &&
          <div>Sem Itens</div>
          }
          <TableComponent lista={lista}/>
        </Template.FormSub>
      </Template.container>
    </>
  )
}