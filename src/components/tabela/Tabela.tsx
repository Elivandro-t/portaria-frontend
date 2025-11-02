import IconButton from "@mui/material/IconButton";
import Template from "./tabelaCss";
import DeleteIcon from '@mui/icons-material/Delete';
type lista = {
  lista: any[],
  hendleDelete:(n:any)=>void
}
export const TableComponent = ({ lista,hendleDelete }: lista) => {

  return (
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
            <th></th>
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
                <td>
                  <Template.trBTN>
                    <IconButton
                      aria-label="deletar"
                      onClick={() => hendleDelete(item?.id)}
                      sx={{
                        color: 'black',
                        '&:hover': {
                          backgroundColor: '#f0f0f0',
                        },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Template.trBTN>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Template.Table>
    </Template.TableContainer>
  )
}