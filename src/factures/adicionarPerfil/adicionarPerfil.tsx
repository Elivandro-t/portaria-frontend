import Template from "./adicionarPerfilCss"
import Api from "../../service/api"
import { useState } from "react"
// import { notify } from "../../service/snackbarService";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import { PopupUpdatePerfilComponent } from "../../components/updatePerfilComponent/popup/updatePerfil";
import { PopupComponent } from "../../components/popup/popupComponent";
import api from "../../service/api";
import { notify } from "../../service/snackbarService";
export const AdicionarPerfilRouter = () => {
    const [busca, setBusca] = useState("")
    const [item, setItem] = useState<any>(null);
    const [updateModal, setUpdateModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    const [id, setId] = useState("")
    const onSubmit = async () => {
        const resposta = await Api.BuscaPefilUsuario(busca);
        if (resposta) {
            setItem(resposta?.usuario)
        }
    }

    const hendleUpdate = (usuarioId: any) => {
        setId(usuarioId)
        setDeleteModal(false)
        setUpdateModal(true)
    }
    const hendleDelete = (perfilId: any) => {
        setId(perfilId)
        setDeleteModal(true)
        setUpdateModal(false)

    }
    const hendleBuscaApi = async (data: any) => {
            const response = await api.AdicionarPefil(id, data.idPerfil);
            if (response) {
                setUpdateModal(false)
                notify(response.msg, "success")
                 setTimeout(()=>{
                 onSubmit()
                 },1000)

            }



    }
    return (
        <>
            <Template.container>
                <Template.titulo>Perfil Usuario</Template.titulo>
                <Template.FormSub  >
                    <Template.CamposInput>
                        <Template.label>Email</Template.label>
                        <Template.Campos
                            placeholder="@exmplo.com"
                            type="email"
                            onChange={(e) => setBusca(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSubmit()
                                }
                            }}
                        />
                    </Template.CamposInput>

                    {item ? (
                        <Template.TableContainer>
                            <Template.Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Perfil</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item?.id}</td>
                                        <td>{item?.nome}</td>
                                        <td>{item?.perfil.nome}</td>
                                        <td>{item?.ativo ?  <Template.ativo ativo={item?.ativo}></Template.ativo> : "DESTIVADO"}</td>
                                        <td>
                                            <Template.trBTN>
                                                <IconButton
                                                    onClick={() => hendleDelete(item?.id)}
                                                    sx={{
                                                        color: 'black', '&:hover': {
                                                            backgroundColor: '#f0f0f0',
                                                        },
                                                    }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                                <IconButton

                                                    onClick={() => hendleUpdate(item?.id)}
                                                    sx={{
                                                        color: 'black', '&:hover': {
                                                            backgroundColor: '#f0f0f0',
                                                        },
                                                    }}>
                                                    <EditIcon />
                                                </IconButton>
                                            </Template.trBTN>
                                        </td>
                                    </tr>
                                </tbody>
                            </Template.Table>

                        </Template.TableContainer>
                    ) : ("Nada encontrado...")
                    }
                </Template.FormSub >
                {updateModal &&
                    <PopupUpdatePerfilComponent ID={undefined} handleConfirm={hendleBuscaApi} handleCancel={() => setUpdateModal(false)} message={""} ativoBtn={false}></PopupUpdatePerfilComponent>
                }
                {DeleteModal &&
                    <PopupComponent handleConfirm={function (): void {
                        throw new Error("Function not implemented.");
                    }} handleCancel={() => setDeleteModal(false)} message={""} ativoBtn={false} />
                }
            </Template.container >
        </>
    )
}