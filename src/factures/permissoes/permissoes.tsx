import { useRef } from "react";
import Template from "./permissoesCss"
import { useForm } from "react-hook-form";
import Api from "../../service/api"
import { notify } from "../../service/snackbarService";
type FormData = {
    email: string,

};
export const PermissoesComponets = () => {

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        const resposta = await Api.cadastroUsuaro(data);
        if (resposta) {
            notify(resposta.msg, "success")
            reset()
        }
    }

    const senhaRef = useRef<HTMLInputElement>(null);
    const focus = (
        event: React.KeyboardEvent<HTMLInputElement>,
        nextRef?: React.RefObject<HTMLInputElement | null>
    ) => {
        if (event.key === "Enter") {
            // event.preventDefault();
            nextRef?.current?.focus();
        }
    };

    return (
        <>
            <Template.container>
                <Template.titulo>Buscar permissões de Usuario </Template.titulo>
                <>({<>Em desenvolvimento</>})</>
                <Template.FormSub onSubmit={handleSubmit(onSubmit)}>
                                        <Template.CamposInput>
                        <Template.label>Email usuario *</Template.label>
                        <Template.Campos
                            hasError={!!errors.email} type="text"
                            autoComplete="current-password"
                            placeholder="Senha"

                            {...register("email", {
                                required: "Email E obrigatorio",
                            })}
                            onKeyDown={(e) => focus(e, senhaRef)}
                        />
                        <Template.Erros>
                            {errors.email && <p>{errors.email.message}</p>}
                        </Template.Erros>
                    </Template.CamposInput>
    <Template.TableContainer>
      <Template.Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>João Silva</td>
            <td>Ativo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Maria Oliveira</td>
            <td>Inativo</td>
          </tr>
        </tbody>
      </Template.Table>
    </Template.TableContainer>
                </Template.FormSub>
            </Template.container>
        </>
    )
}