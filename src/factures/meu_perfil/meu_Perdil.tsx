import { useEffect, useState } from "react"
import { BtnGlobal } from "../../components/btnGlobal/btnGlobal"
import { ModalComponent } from "../../components/modal/modalComponent"
import Template from "./meu_perfil_css"
import api from "../../service/api"
import PersonIcon from "@mui/icons-material/Person";
import { PerfilResetSenha } from "./PerfilResetSenha"



export const MeuPerfil = () => {
    const [usuario, setUsuario] = useState<any>()
    const hendleBuscaUsuario = async () => {
        const order = localStorage.getItem("order")
        if (order != null) {
            const resposta = await api.buscaUsuario(order);
            if (resposta) {
                setUsuario(resposta)
            }

        }
    }
    useEffect(() => {
        hendleBuscaUsuario()
    }, [])
    return (
        <Template.container>
            <Template.container_int>
                <ModalComponent>
                    <Template.container_titulo>Perfil usuario</Template.container_titulo>
                    <Template.container_usuarioArea>
                        <Template.container_img>
                            {usuario?.avatar ? (
                                <img src={usuario?.avatar} />
                            ) : (
                            <PersonIcon style={{ fontSize: 100, color: "#1976d2" }} />
                            )
                            }
                        </Template.container_img>
                        <Template.area_infor>
                            <BtnGlobal titulo="Adicionar imagem" isvalid={false} nome_btn={"undefined"} click={() => { }} />
                            <BtnGlobal titulo="Remover Imagem" isvalid={true} nome_btn={"undefined"} click={() => { }} />
                            <Template.meta>
                                <Template.span><strong>{usuario?.nome}</strong></Template.span>
                                <Template.small>{usuario?.ocupacaoOperacional}</Template.small>
                                <Template.small>Filial: {usuario?.filial}</Template.small>
                            </Template.meta>
                        </Template.area_infor>

                    </Template.container_usuarioArea>

                    <Template.area_forma>
                        <Template.CamposInput>
                            <Template.label>Nome completo</Template.label>
                            <Template.input value={usuario?.nome} placeholder="digite um campo" />
                        </Template.CamposInput>
                        <Template.CamposInput>
                            <Template.label>E-mail
                            </Template.label>
                            <Template.input disabled value={usuario?.email} placeholder="digite um campo" />
                        </Template.CamposInput>
                        <Template.CamposInput>
                            <Template.label>Ocupação Profissional</Template.label>
                            <Template.input disabled value={usuario?.ocupacaoOperacional} placeholder="digite um campo" />
                        </Template.CamposInput>
                        <Template.CamposInput>
                            <Template.label>Filial</Template.label>
                            <Template.input value={usuario?.filial} placeholder="digite um campo" />
                        </Template.CamposInput>
                        <Template.area_btn>
                            <BtnGlobal titulo="Salvar" isvalid={false} nome_btn={"undefined"} click={() => { }} />
                            <BtnGlobal titulo="Cancelar" isvalid={false} nome_btn={"undefined"} click={() => { }} />

                        </Template.area_btn>
                    </Template.area_forma>
                </ModalComponent>
                <Template.conainter_right>
                    <PerfilResetSenha/>
                    <ModalComponent>
                        <BtnGlobal titulo="Voltar" isvalid={false} nome_btn={"undefined"} click={() => { }} />

                    </ModalComponent>
                    <Template.foother>@Desenvolvido por Elivandro</Template.foother>

                </Template.conainter_right>
            </Template.container_int>
        </Template.container>
    )
}