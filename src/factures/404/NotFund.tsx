import { useNavigate } from "react-router-dom";
import { Button, Container, Subtitle, Title, ZapDaiLogo } from "./notFundcss";
export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>404 - Página Não Encontrada</Title>
            <Subtitle>Ops! Parece que você se perdeu na portaria.</Subtitle>
            <Button onClick={() => navigate("/")}>Voltar para Home</Button>
            <ZapDaiLogo>© Elivandro develop</ZapDaiLogo>
        </Container>
    );
};