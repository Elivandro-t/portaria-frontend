import Template from "./tabelaCss";
type lista = {
    lista:any[]
}
export const TableComponent = ({lista}:lista)=>{
    return(
        <Template.TableContainer>
                    <Template.Table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nome</th>
                          <th>Tipo Pessoa</th>
                          <th>Data Criação</th>
                          <th>Tipo de Acesso</th>
                          <th>Ocupação</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          lista.flatMap((item, key) => (
                            <tr key={key}>
                              <td>{item.id}</td>
                              <td>{item.nomeCompleto}</td>
                              <td>{item.tipoPessoa}</td>
                              <td>{new Date(item?.dataCriacao as any).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })}</td>
                              <td>{item.tipoAcesso}</td>
                              <td>{item.ocupacao}</td>
                              <td>ccncnn</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Template.Table>
                  </Template.TableContainer>
    )
}