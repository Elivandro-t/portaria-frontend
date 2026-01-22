import { useEffect, useState } from "react"
import { BtnGlobal } from "../../../../components/btnGlobal/btnGlobal"
import { ModalComponent } from "../../../../components/modal/modalComponent"
import Template from "./meu_perfil_css"
import api from "../../service/apiUsuario"
import PersonIcon from "@mui/icons-material/Person";
import { PerfilResetSenha } from "./PerfilResetSenha"
import { ModalSelectImagemUsuarioComponent } from "../../../../components/AdicionarImagemUsuario/modalSelecImagemUsuario"
import { notify } from "../../../portaria/service/snackbarService"
import { subjetUsuarioId } from "../../../../jwt/jwtservice"
import { LoadingSecundary } from "../../../../components/LoadingSecundary/LoadingSecundary"
import packageJson from '../../../../../package.json';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom"


export const MeuPerfil = () => {
    const usuarioId = subjetUsuarioId()
    const [resetSignal, setResetSignal] = useState(0);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [usuario, setUsuario] = useState<any>();
    const [ativo, setAtivo] = useState(false);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
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

    const handleSelectImg = () => {
        setAtivo(true)
    }
    const hendleAtualizaImg = async () => {
        if (!selectedFile) {
            notify("Por favor, selecione uma imagem para continuar.", "error")
        }
        const resposta = await api.selecionarImagem(usuarioId, selectedFile as any)
        if (resposta.msg) {
            setResetSignal(prev => prev + 1)
            hendleBuscaUsuario();
            setAtivo(false)
        }
    }
    const handleRemoveImagem = () => {
        alert("EM DESENVOLVIMENTO")
    }

    const handleHome = () => {

        setLoading(true);
        setTimeout(() => {
            navigate("/",{replace:false})
            setLoading(false)
        }, 1000)

    }
    return (
        <>
            {usuario ? (
                <Template.container >
                    <Template.container_int>
                        <ModalComponent>
                            <Template.container_titulo>Perfil Usuario</Template.container_titulo>
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
                                    <BtnGlobal titulo="Adicionar imagem" isvalid={false} nome_btn={"undefined"} click={handleSelectImg} />
                                    <BtnGlobal titulo="Remover Imagem" isvalid={true} nome_btn={"d"} click={handleRemoveImagem} />
                                    <Template.meta>
                                        <Template.span><strong>{usuario?.nome}</strong></Template.span>
                                        <Template.small>{usuario?.ocupacaoOperacional}</Template.small>
                                        <Template.small>Filial: {usuario?.filial}</Template.small>
                                    </Template.meta>
                                </Template.area_infor>
                                {
                                    ativo &&
                                    <ModalSelectImagemUsuarioComponent handleConfirm={hendleAtualizaImg} handleCancel={() => setAtivo(false)} message={""} ativoBtn={ativo} handleFileSelect={setSelectedFile} resetSignal={resetSignal} />
                                }

                            </Template.container_usuarioArea>

                            <Template.area_forma>
                                <Template.CamposInput>
                                    <Template.label>Nome completo</Template.label>
                                    <Template.input disabled value={usuario?.nome} placeholder="digite um campo" />
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
                                    <Template.input disabled value={usuario?.filial} placeholder="digite um campo" />
                                </Template.CamposInput>
                                <Template.area_btn>
                                    {/* <BtnGlobal titulo="Salvar" isvalid={false} nome_btn={"undefined"} click={() => { }} /> */}
                                    {/* <BtnGlobal titulo="Cancelar" isvalid={true} nome_btn={"undefined"} click={() => { }} /> */}

                                </Template.area_btn>
                            </Template.area_forma>
                        </ModalComponent>
                        <Template.conainter_right>
                            <PerfilResetSenha />
                            <ModalComponent>
                                <BtnGlobal isvalid={false} nome_btn={"undefined"} click={handleHome}>
                                    <HomeIcon />
                                </BtnGlobal>

                            </ModalComponent>
                            <Template.foother>@Desenvolvido por Elivandro  <div style={{ color: "#464545", fontSize: "10px" }}>
                                Versão {packageJson?.version} - {packageJson?.name}
                            </div>
                            </Template.foother>
                            {
                                loading &&
                                <LoadingSecundary />
                            }
                        </Template.conainter_right>
                    </Template.container_int>
                </Template.container >
            ) : (
                <LoadingSecundary />
            )}

        </>
    )
}