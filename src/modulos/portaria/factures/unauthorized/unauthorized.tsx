import { useNavigate } from "react-router-dom";
import { Button, Container, Subtitle, Title, ZapDaiLogo } from "./unautorizedCss";
export const UnauthorizedPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Unauthorized</Title>
            <Subtitle>Ops! Voce não tem autorização para acessar essa pagina.</Subtitle>
            <Button onClick={() => navigate("/")}>Voltar para Home</Button>
            <ZapDaiLogo>© Elivandro develop</ZapDaiLogo>
        </Container>
    );
};