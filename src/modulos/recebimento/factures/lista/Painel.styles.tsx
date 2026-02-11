import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Template = {
  Main: styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: #fcfcfd; /* Fundo quase branco, muito limpo */
    min-height: 100vh;
  `,

  Header: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  `,

  TitleSection: styled.div`
    h2 {
      color: #101828;
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
    p {
      color: #667085;
      font-size: 14px;
      margin-top: 4px;
    }
  `,

  FilterGroup: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  `,

  Select: styled.select`
    border: none;
    font-size: 14px;
    color: #344054;
    outline: none;
    min-width: 200px;
    background: transparent;
  `,

  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 1000px; /* Centraliza e limita a largura para não esticar demais */
    margin: 0 auto;
    width: 100%;
  `,

  Card: styled.div`
    background: #ffffff;
    border: 1px solid #eaecf0; /* Borda bem fina e clara */
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #f9fafb;
      border-color: #d0d5dd;
      transform: translateY(-2px);
      box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    }
  `,

  CardInfo: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    .icon-wrapper {
      width: 44px;
      height: 44px;
      background: #f4f3ff;
      color: #5925dc;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      
      .tag {
        font-size: 12px;
        font-weight: 600;
        color: #6941c0;
        margin-bottom: 2px;
      }
      
      h3 {
        margin: 0;
        font-size: 16px;
        color: #101828;
        font-weight: 500;
      }
    }
  `,

  RefreshButton: styled.button<{ loading: boolean }>`
    background: none;
    border: none;
    color: #667085;
    cursor: pointer;
    display: flex;
    padding: 4px;
    transition: color 0.2s;

    &:hover { color: #5925dc; }
    svg {
      ${({ loading }) => loading && css`animation: ${rotate} 1s linear infinite;`}
    }
  `
};

export default Template;