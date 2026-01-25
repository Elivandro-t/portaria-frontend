import styled from "styled-components";
interface ativo {
  ativo: any;
}

export default {
  // 1. O Palco: Fundo leve para os cards saltarem
  container: styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 32px 56px;
        background-color: #f1f5f9; // Slate 100
        width: 100%;

        @media (max-width: 768px) {
            padding: 16px;
        }
    `,

  // 2. Título: Tipografia forte e profissional
  titulo: styled.h1`
        font-size: 1.75rem;
        font-weight: 800;
        color: #0f172a; // Slate 900
        font-family: 'Inter', sans-serif;
        letter-spacing: -0.02em;
    `,

  // 3. Card Branco: Onde a ação acontece
  FormSub: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: #ffffff;
        padding: 24px;
        border-radius: 16px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    `,

  // 4. Barra de busca e filtros
  CamposInput: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center; // Alinha ícones e input perfeitamente no centro vertical
        flex-wrap: wrap;     // Se a tela for pequena, ele quebra a linha sem sumir com itens
        gap: 12px;
        padding: 10px;
        background: #f8fafc;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        margin-bottom: 10px;
    `,

  // Criamos um wrapper para o input e o erro ficarem juntos sem quebrar a linha da busca
  InputWrapper: styled.div`
        display: flex;
        flex-direction: column;
        position: relative; // O erro agora fica preso a este container, não à barra toda
        flex: 1;            // Faz o campo de busca crescer e ocupar o espaço disponível
        min-width: 200px;
    `,

  Campos: styled.input`
        width: 100%;
        height: 40px;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid ${(props: any) => (props.hasError ? '#ef4444' : '#cbd5e1')};
        padding: 0 12px;
        font-size: 0.9rem;
        transition: all 0.2s ease;

        &:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
    `,

  // 6. Tabela: Visual de alta densidade mas limpo
  TableContainer: styled.div`
        width: 100%;
        overflow-x: auto;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
    `,

  Table: styled.table`
        width: 100%;
        border-collapse: collapse;
        
        th {
            background-color: #f8fafc;
            padding: 14px 16px;
            text-align: left;
            font-size: 0.75rem;
            font-weight: 700;
            color: #64748b; // Slate 500
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 2px solid #f1f5f9;
        }

        td {
            padding: 16px;
            font-size: 0.875rem;
            color: #1e293b;
            border-bottom: 1px solid #f1f5f9;
        }

        tr:hover {
            background-color: #f8fafc;
        }
    `,

  // 7. Status: O "Ponto de Luz" (Indicador Ativo/Inativo)
  ativo: styled.div<ativo>`
        width: 10px;
        height: 10px;
        background-color: ${({ ativo }) => (ativo ? "#10b981" : "#ef4444")};
        border-radius: 50%;
        box-shadow: 0 0 0 4px ${({ ativo }) => (ativo ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)")};
    `,

  // 8. Badge Device: Estilo pílula moderna
  device: styled.div`
        display: inline-flex;
        padding: 4px 12px;
        background-color: #e0f2fe; // Light Blue
        color: #0369a1;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 700;
        border: 1px solid #bae6fd;
    `,

  trBTN: styled.div`
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    `
};