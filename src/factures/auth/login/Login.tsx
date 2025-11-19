import {
    Container
    , Form,
    FormSub
    , Logo,
    Campos,
    Or,
    BtnLogin,
    Erros,
    Text,
    Foooter,
    Select,
    EsquceuSenha,
    Input,
    Password
} from "./Container"
import logo from "../../../assets/ptcontroleBanner.png"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import salve from "../../../service/localStorage/service-localStorage"
import VisibilityIcon from '@mui/icons-material/Visibility';         // 👁️ olho aberto
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';   // 🙈 olho fechado
import Api from "../../../service/api"
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
import IconButton from "@mui/material/IconButton";
type FormData = {
    email: string;
    password: string;
};
// //npm install react-hook-form
export const LoginComponen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const [ativaPasswd,setAtivaPasswd]=useState(false)
    const onSubmit = async (data: FormData) => {
        const resposta = await Api.login(data)
        if (resposta && resposta.acessToken) {
            salve.salva_token(resposta.acessToken)
            localStorage.setItem("order", resposta.usuario.id as any)
            setTimeout(() => {
                setLoading(false);
                window.location.href = "/"
            }, 1000);
        }

    };
    // criando loading para ir para a rota de login pelo whats
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleMarckClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation(); // só pra garantir que o clique não dispare em outro lugar
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/", { replace: true, state: { refresh: Date.now() } });
        }, 2000);
    };
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
        <Container>
            <Form>
                <Logo src={logo} onClick={handleMarckClick} >
                    
                </Logo>
                <Text></Text>
                <Or></Or>
                <FormSub onSubmit={handleSubmit(onSubmit)}>
                    <Select>
                        <Campos
                            hasError={!!errors.email} type="email"
                            autoComplete="current-password"
                            placeholder="@exemplo.com"

                            {...register("email", {
                                required: "Email E obrigatorio",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Formato de e-mail inválido",

                                }
                            })}
                            onKeyDown={(e) => focus(e, senhaRef)}
                        />
                        <Erros>
                            {errors.email && <p>{errors.email.message}</p>}
                        </Erros>
                    </Select>
                    <Select>
                        <Input hasError={!!errors.password}>
                           <Password placeholder="Senha" type={ativaPasswd?"text":"password"}
                            autoComplete="current-password"
                            {...register("password", {
                                required: "Senha obrigatória",
                            })}
                            onKeyDown={(e) => focus(e)}

                        />
                        <IconButton onClick={()=>setAtivaPasswd(!ativaPasswd)}>
                         {ativaPasswd ?(<VisibilityOffIcon/>):(<VisibilityIcon/>)}

                        </IconButton>
                        </Input>
                        <Erros>
                            {errors.password && <p>{errors.password.message}</p>}
                        </Erros>

                    </Select>
                    <EsquceuSenha>
                        {/* <Link to={""} >Esqueceu a senha</Link> */}
                    </EsquceuSenha>
                    <BtnLogin>Entrar</BtnLogin>


                </FormSub>



            </Form>
            <Foooter>Portaria - Controle de Acesso</Foooter>
            {
                loading && <LoadingSecundary />

            }
        </Container>
    )
}