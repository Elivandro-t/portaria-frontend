import Template from "./resetRadomCss"
import Api from "../../service/apiUsuario"
import { notify } from "../../../portaria/service/snackbarService";
import { useState } from "react";
import { AlertComponent } from "../../../../components/popup/alertPassWd";
export const ResetComponets = () => {

  const [busca,setBusca] = useState("")
  const [pwd,setPasswd]=useState("")
  const [ativo,setAtivo]=useState(false)
  const onSubmit = async () => {
    const resposta = await Api.reset(busca);
    if (resposta) {
      notify("Senha Resetada com sucesso!", "success");
      setPasswd(resposta.psw)
      setAtivo(true)
    }
  }

  return (
    <>
      <Template.container>
        <Template.titulo>Reset senha de Usuario </Template.titulo>
        <Template.FormSub >
          <Template.CamposInput>
            <Template.label>Email*</Template.label>
            <Template.Campos
              autoComplete="current-password"
              placeholder="Informe  o E-mail"
              onChange={(e)=>setBusca(e.target.value)}
              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSubmit()
                                }
                            }}
                           />
          </Template.CamposInput>
          <Template.TableContainer>
          </Template.TableContainer>
          {ativo&&
            <AlertComponent handleCancel={()=>setAtivo(false)} message={pwd} ativoBtn={false}/>

          }
        </Template.FormSub>
      </Template.container>
    </>
  )
}