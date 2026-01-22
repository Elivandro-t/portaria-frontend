import {
    Container
    , Form,
    FormSub
    , Logo,
    Campos,
    Or,
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
import salve from "../../../localStorage/service-localStorage"
import VisibilityIcon from '@mui/icons-material/Visibility';         // 👁️ olho aberto
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';   // 🙈 olho fechado
import Api from "../../PaginaInicial/service/apiUsuario"
import IconButton from "@mui/material/IconButton";
import { Button, CircularProgress } from "@mui/material";
import { SendIcon } from "lucide-react";
import { AlertComponent } from "../../../components/alert/alertaComponent";
type FormData = {
    email: string;
    password: string;
};
// //npm install react-hook-form
export const LoginComponen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const [ativaPasswd, setAtivaPasswd] = useState(false)
    const [loading, setLoading] = useState(false);
    const [logued, setLogued] = useState(false);
    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true)
            const resposta = await Api.login(data);
            if (resposta && resposta.acessToken) {
                salve.salva_token(resposta.acessToken);
                localStorage.setItem("order", String(resposta.usuario.id));
                setLogued(true)
                window.location.href =  "/"

            }
        } finally {
            setLoading(false)
        }

    };
    const senhaRef = useRef<HTMLInputElement>(null);
    const focus = (
        event: React.KeyboardEvent<HTMLInputElement>,
        nextRef?: React.RefObject<HTMLInputElement | null>
    ) => {
        if (event.key === "Enter") {

            if (nextRef) {
                nextRef?.current?.focus();

            }
        }

    };
    return (
        <Container>
            <Form>
                <Logo src={logo} >

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
                            <Password placeholder="Senha"
                                type={ativaPasswd ? "text" : "password"}
                                onKeyDown={(e) => focus(e)}

                                autoComplete="current-password"
                                {...register("password", {
                                    required: "Senha obrigatória",
                                })}

                            />
                            <IconButton onClick={() => setAtivaPasswd(!ativaPasswd)}>
                                {ativaPasswd ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}

                            </IconButton>
                        </Input>
                        <Erros>
                            {errors.password && <p>{errors.password.message}</p>}
                        </Erros>

                    </Select>
                    <EsquceuSenha>
                        {/* <Link to={""} >Esqueceu a senha</Link> */}
                    </EsquceuSenha>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                        sx={{ bgcolor: '#5B7FFF', '&:hover': { bgcolor: '#4a6cf0' } }}
                    >
                        {loading ? 'Fazendo Login...' : 'Login'}
                    </Button>
                    {logued &&
                        <AlertComponent titulo={"success"} msg={"Login confirmado"} />

                    }

                </FormSub>





            </Form>
            <Foooter>Portaria - Controle de Acesso</Foooter>
            {/* {
                loading && <LoadingSecundary />

            } */}
        </Container>
    )
}