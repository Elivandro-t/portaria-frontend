import { useState } from "react";
import Template from "../../factures/Dashboard/Dashboard.css"
import { Dialogs } from "../dialogs/Dialogs";
import { UpdateRegistro } from "../update/update";
import PositionedMenu from "../btn/btnMenu";

type props = {
    c: any
}

export const CardItensComponents = ({ c }: props) => {
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
    return (
        <Template.Container >
            <Template.Card>
                <Template.CardHeaderPrincipal>
                    <div className="info-title" style={{ paddingTop: 5 }}>
                        <span className="tag">Resumo do Dia</span>
                        {/* {c?.numeroFIlial} -  */}
                        <h3>{c?.nomeFilial}</h3>
                    </div>
                    <Template.info_date className="info-date">
                        <span>📅  {handleConvertData(c?.dataCriacao)}</span>
                        <PositionedMenu hendleClick={handeClick} />

                    </Template.info_date>
                </Template.CardHeaderPrincipal>

                <Template.Table>
                    <Template.Thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Disponível</th>
                            <th >Manutenção</th>
                            {/* <th>Data</th> */}
                            {/* <th>Ações</th> */}
                        </tr>
                    </Template.Thead>
                    <Template.Tbody>
                        {c.itens.map((item: any, i: any) => (
                            <Template.Tr key={i}>
                                <td className="bold">{item?.tipo}</td>
                                <td className="status-ativo">{item?.qtdAtivo}</td>
                                <td className="status-manutencao">{item?.qtdManutencao}</td>
                                {/* <td>{handleConvertData(c.dataCriacao)}</td> */}
                                {/* <td>
                                    <Template.ViewButton>Detalhes</Template.ViewButton>
                                </td> */}
                               
                            </Template.Tr>
                        ))}
                    </Template.Tbody>
                </Template.Table>
                 {activeModal &&
                                    <Dialogs handleInative={handeClick}><UpdateRegistro itemMP={c.itens} ></UpdateRegistro></Dialogs>
                                }
            </Template.Card>
        </Template.Container>
    );
}