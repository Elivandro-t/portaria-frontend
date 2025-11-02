import { useEffect, useState } from "react";
import Template from "./visitantesCss"
import Api from "../../service/api"
import type { Visitante } from "../../types/visitante";
import { TableComponent } from "../../components/tabela/Tabela";
import { PopupComponent } from "../../components/popup/popupComponent";
import { subjet } from "../../service/jwt/jwtservice";
import { notify } from "../../service/snackbarService";


export const VisitantesListaComponets = () => {
  const [lista, setLista] = useState<Visitante[]>([])
   const [busca,setBusca] = useState("")
      const [id,setId] = useState("")
         const [titulo,setTitulo] = useState("")

  const user = subjet();
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

  const hendleDelete = (idItem?:any)=>{
    setId(idItem)
    setTitulo(`Deseja realmente deletar o item de ID ${idItem}`);
    setAtivo(true)
  }
  const hendleAPi = async()=>{
       const resposta = await Api.deletarVisitante(id,user?.id);
      notify(resposta?.msg,"success")
       setAtivo(false)
      await onSubmit();
      setAtivo(false);
  }
  const [ativoBtn,setAtivo] = useState(false)
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
          <TableComponent lista={lista} hendleDelete={hendleDelete}/>
        </Template.FormSub>
        {ativoBtn &&
                  <PopupComponent handleCancel={() => setAtivo(false)} handleConfirm={hendleAPi} message={titulo} ativoBtn={ativoBtn} />
        }
      </Template.container>
    </>
  )
}