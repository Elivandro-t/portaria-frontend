import { useState } from "react";
import Template from "../../factures/Dashboard/Painel.styles"
import { Dialogs } from "../dialogs/Dialogs";
import { UpdateRegistro } from "../update/update";
import PositionedMenu from "../btn/btnMenu";
import apiMaterial from "../../service/apiRecebimento"
import { notify } from "../../../portaria/service/snackbarService";
import { subjet } from "../../../../jwt/jwtservice";

type props = {
    c: any,
    handleFunction: () => void,
}

export const CardItensComponents = ({ c, handleFunction }: props) => {
    const user = subjet();
    const permission = user?.permissoes;
    function handleConvertData(data: any) {
        const date = new Date(data);

        const hora = date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        });

        const dia = date.toLocaleDateString("pt-BR");

        return `${hora} ${dia}`;
    }
    const [activeModal, setActiveModal] = useState(false);
    const handeClick = () => {
        setActiveModal(!activeModal)
    }
    const handeClickDelete = async () => {
        // setActiveModal(!activeModal);
        const resposta = await apiMaterial.delete(c.id, c.filial);
        if (resposta) {
            handleFunction();
            notify("Deletado", "success")
        }
    }
    return (
        <Template.Container >
            <Template.Card>
                <Template.CardHeaderPrincipal>
                    <div className="info-title" style={{ paddingTop: 5 }}>
                        <span className="tag">Resumo do Dia</span>
                        <span className="tag"> Criador: <small style={{ color: "#000" }}>{c?.nomeUsuario}</small></span>
                        <h4 className="titulo">{c?.filial} - {c?.nomeFilial}</h4>
                    </div>
                    <Template.info_date className="info-date">
                        <span>📅  {handleConvertData(c?.dataAt)}</span>
                        {permission?.includes("DELETE_LOGISTICO") &&
                            <PositionedMenu hendleClick={handeClick} hendleClickDelete={handeClickDelete} />

                        }
                    </Template.info_date>
                </Template.CardHeaderPrincipal>

                <Template.Table>
                    <Template.Thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Chamado</th>
                            <th>Pendentes</th>
                            {/* <th>Ações</th> */}
                        </tr>
                    </Template.Thead>
                    <Template.Tbody>
                        {c.itens.map((item: any, i: any) => (
                            <Template.Tr key={i}>
                                <td className="bold">{item?.TipoBloco}</td>
                                <td className="status-ativo">{item?.qtdChamado}</td>
                                <td className="status-manutencao">{item?.qtdPendentes}</td>
                                {/* <td>
                                    <Template.ViewButton>Detalhes</Template.ViewButton>
                                </td> */}

                            </Template.Tr>
                        ))}
                    </Template.Tbody>
                </Template.Table>
                {activeModal &&
                    <Dialogs handleInative={handeClick} ><UpdateRegistro onClickhTogle={handleFunction} registroId={c.id} itemMP={c.itens} ></UpdateRegistro></Dialogs>
                }
            </Template.Card>
        </Template.Container>
    );
}