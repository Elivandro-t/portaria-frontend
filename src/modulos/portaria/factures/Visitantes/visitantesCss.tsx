import styled from "styled-components";

interface CamposProps {
    hasError?: boolean;
}

export default {
    container: styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 24px 56px;
        background-color: #f8fafc;
        width: 100%;

        @media (max-width: 768px) {
            padding: 15px;
        }
    `,

    FormSub: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    `,

    // Resolve o problema da grade de busca
    paginator: styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between; // Busca na esquerda, Paginador na direita
        align-items: center;
        flex-wrap: wrap; // Quebra linha em telas pequenas (mobile)
        gap: 15px;
        margin-bottom: 10px;
    `,

    // Wrapper para segurar o input e o erro juntos
    InputWrapper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1; // Faz a busca ocupar o espaço disponível
        max-width: 400px; // Limita o tamanho para não ficar gigante
    `,

    Campos: styled.input.withConfig({
        shouldForwardProp: (prop) => prop !== "hasError",
    })<CamposProps>`
        width: 100%; // Ocupa 100% do Wrapper
        height: 40px;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid ${({ hasError }) => (hasError ? '#ef4444' : '#e2e8f0')};
        padding: 0 16px;
        font-size: 0.875rem;
        transition: all 0.2s ease;

        &:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        &::placeholder {
            color: #94a3b8;
        }
    `,

    Erros: styled.span`
        color: #ef4444;
        font-size: 0.75rem;
        font-weight: 500;
        margin-left: 4px;
    `,

    titulo: styled.h1`
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 10px;
    `
};