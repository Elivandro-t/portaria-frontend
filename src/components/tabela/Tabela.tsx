import Template from "./tabelaCss";
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar } from "@mui/material";
import { subjet } from "../../jwt/jwtservice";
import { IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
type lista = {
  lista: any[],
  handleDelete: (n: any) => void,
  handleBloqueio: (n: any,type:any) => void
}
export const TableComponent = ({ lista, handleDelete, handleBloqueio }: lista) => {
  const user = subjet();
  const permission = user?.permissoes;

  return (
    <Template.TableContainer>
      <Template.Table>
        <thead>
          <tr>
            <th>Acesso</th>
            <th>Avatar</th>
            <th>Nome</th>
            <th>Telefone</th>
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
                <td>{item.ativo?"Permitido":"Bloqueado"}</td>
                <td>
                  {item?.imagem ? (
                    <Avatar sx={{ width: 40, height: 40, objectFit: 'contain' }} alt={item?.nomeCompleto} src={item?.imagem} />

                  ) : (
                    <Avatar sx={{ width: 40, height: 40, objectFit: 'contain' }} alt={item?.nomeCompleto} src="/static/images/avatar/2.jpg" />

                  )
                  }
                </td>
                <td>{item?.nomeCompleto}</td>
                <td>{item?.numeroTelefone}</td>
                <td>{new Date(item?.dataCriacao as any).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}</td>
                <td>{item?.recorrencia?.nome}</td>
                <td>{item?.ocupacao}</td>
                <td>
                  <Template.trBTN>
                    {permission?.includes("DELETE_GLOBAL") ? (
                      <>
                        {item.ativo ? (
                          <IconButton
                            aria-label="LockIcon"
                            onClick={() => handleBloqueio(item.id,"BLOQUEIO")}
                            sx={{
                              color: "green",
                              "&:hover": { backgroundColor: "#e0e0e0" },
                            }}
                          >
                            <LockOpenIcon />
                          </IconButton>
                        ) : (
                          <IconButton
                            aria-label="LockOpenIcon"
                            onClick={() => handleBloqueio(item.id,"DESBLOQUEIO")}
                            sx={{
                              color: "red",
                              "&:hover": { backgroundColor: "#e0e0e0" },
                            }}
                          >
                            <LockIcon />
                          </IconButton>
                        )}
                        <IconButton
                          aria-label="deletar"
                          onClick={() => handleDelete(item?.id)}
                          sx={{
                            color: 'black',
                            '&:hover': {
                              backgroundColor: '#f0f0f0',
                            },
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    ) : (
                      <IconButton
                        disabled
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
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