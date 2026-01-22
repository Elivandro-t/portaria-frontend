import { BtnGlobal } from "../../../../components/btnGlobal/btnGlobal"
import { ModalComponent } from "../../../../components/modal/modalComponent"
import Template from "./controleFilialcss"
import api from "../../../portaria/service/filiaisApi/filiasAPi"
import { useForm } from "react-hook-form"
import { notify } from "../../../portaria/service/snackbarService"
type FormData = {
    nome: string,
    numeroFilial?: any,
};
type props = {
    handle: () => void
}
export const IncluirFilial = ({ handle }: props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
    const cadastrarFIlial = async (data: any) => {
        const resposta = await api.cadastro(data);
        if (resposta.msg) {
            notify(resposta.msg, "success")
            handle()
            reset()
        }

    }
    const handleReset = () => {
        reset()
    }
    return (
        <ModalComponent>
            <form onSubmit={handleSubmit(cadastrarFIlial)}>
                <div style={{ marginBottom: 10 }}>
                    <Template.container_titulo>
                        Inclusão de Filial
                    </Template.container_titulo>
                </div>
                <Template.area_campo>
                    <Template.CamposInput>
                        <Template.label>Nome da Filial</Template.label>
                        <Template.input hasError={!!errors.nome} type="text" {...register("nome", {
                            required: "Nome da filial e obrigatorio"
                        })} placeholder="Nome da nova filial" />
                    </Template.CamposInput>
                    <Template.CamposInput>
                        <Template.label >Numero da nova Filial
                        </Template.label>
                        <Template.input type="text"
                            {...register("numeroFilial", {
                                required: "Informe o número da filial",
                                minLength: {
                                    value: 2,
                                    message: "Mínimo de 2 dígitos"
                                },
                                maxLength: {
                                    value: 5,
                                    message: "Máximo de 5 dígitos"
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Apenas números são permitidos"
                                }
                            })}
                            placeholder="Numero da Filial" />
                    </Template.CamposInput>

                </Template.area_campo>

                <Template.Erros>
                    {errors.nome && <p>{errors.nome.message}</p>}
                    {errors.numeroFilial && <p>{errors?.numeroFilial.message as any}</p>}
                </Template.Erros>
                <Template.area_btn>
                    <BtnGlobal titulo="Salvar" isvalid={false} nome_btn={"undefined"} click={handleSubmit(cadastrarFIlial)} />
                    <BtnGlobal titulo="Cancelar" isvalid={true} nome_btn={"undefined"} click={handleReset} />
                </Template.area_btn>
            </form>
        </ModalComponent>
    )

}