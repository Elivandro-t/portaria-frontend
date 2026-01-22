import { useEffect, useState, type ChangeEvent } from "react";
import Template from "./visitantesCss"
import Api from "../../service/api"
import ApiVisitante from "../../service/visitanteApi/visitanteApi"

import type { Visitante } from "../../types/visitante";
import { TableComponent } from "../../../../components/tabela/Tabela";
import { PopupComponent } from "../../../../components/popup/popupComponent";
import { subjet } from "../../../../jwt/jwtservice";
import { notify } from "../../service/snackbarService";
import { Paginator } from "../../../../components/paginator/paginator";
export const VisitantesListaComponets = () => {
  const [lista, setLista] = useState<Visitante[]>([])
  const [busca, setBusca] = useState("");
  const [totalPage, setTotalPage] = useState(0)
  const [id, setId] = useState("")
  const [titulo, setTitulo] = useState("");
  const [type, setType] = useState("")

  const user = subjet();
  const onSubmit = async (numeroPage?: any) => {
    const resposta = await Api.listaVisistante(busca, numeroPage);
    if (resposta) {
      setLista(resposta.content);
      setTotalPage(resposta.tatalPages)
    }
  }
  useEffect(() => {
    if (busca.trim() === "") {
      onSubmit()
    }
  }, [busca])

  const handleBloqueio = (idItem?: any, type?: any) => {
    setAtivo(true)
    switch (type) {
      case "BLOQUEIO":
        setType("BLOQUEIO");
        break

      case "DESBLOQUEIO":
        setType("DESBLOQUEIO");
        break;
    }
    setTitulo(`Deseja realmente fazer ${type} o item de ID ${idItem}`);

    setId(idItem)
  }
  const handleDelete = (idItem?: any) => {
      setType("DELETE");
    setId(idItem)
    setTitulo(`Deseja realmente deletar o item de ID ${idItem}`);
    setAtivo(true)
  }
  const handleAPi = async () => {
    const resposta = await ApiVisitante.deletarVisitante(id, user?.id, type);
    notify(resposta?.msg, "success")
    setAtivo(false)
    await onSubmit();
    setAtivo(false);
  }
  const [ativoBtn, setAtivo] = useState(false);
  const handleNextPage = (_: ChangeEvent<unknown>, value: number) => {
    const valueConvertido = value - 1;
    onSubmit(valueConvertido);
  }
  return (
    <>
      <Template.container>
        <Template.FormSub >
          <Template.paginator>
            <Template.Campos
              autoComplete="current-password"
              placeholder="Buscar visitante"
              onChange={e => setBusca(e.target.value)}
              onKeyDown={onSubmit}
            />
            <Paginator totalPage={totalPage} handleNextPage={handleNextPage} />
          </Template.paginator>
          {lista.length === 0 &&
            <div>Nada encontrado</div>
          }
          <TableComponent lista={lista} handleDelete={handleDelete} handleBloqueio={handleBloqueio} />
        </Template.FormSub>
        {ativoBtn &&
          <PopupComponent handleCancel={() => setAtivo(false)} handleConfirm={handleAPi} message={titulo} ativoBtn={ativoBtn} />
        }
      </Template.container >

    </>
  )
}