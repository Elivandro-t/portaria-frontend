import { useNavigate } from "react-router-dom";
import { Button, Container, Subtitle, Title, ZapDaiLogo } from "./unautorizedCss";
const UnauthorizedPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Não Autorizado</Title>
            <Subtitle>Ops! Voce não tem permissão para acessar essa pagina.</Subtitle>
            <Button onClick={() => navigate("/")}>Voltar para Home</Button>
            <ZapDaiLogo>© Elivandro develop</ZapDaiLogo>
        </Container>
    );
};
export default UnauthorizedPage;