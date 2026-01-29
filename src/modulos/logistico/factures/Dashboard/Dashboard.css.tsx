import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
const Template = {
  Main: styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0; /* Reduzi o padding lateral no mobile */
    min-height: 100vh;
    position: relative;

    @media (min-width: 768px) {
      padding: 10px 5px;
    }
  `,

  HeaderCard: styled.div`
    background: #fff;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column; /* Mobile first: coluna */
    gap: 15px;
    margin-bottom: 20px;
    /* border-left: 5px solid #4c1d95; */

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }
  `,

  TitleSection: styled.div`
    small {
      color: #7c3aed;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 1px;
    }
    h2 {
      margin: 4px 0 0 0;
      color: #1e293b;
      font-size: 1.2rem; /* Menor no mobile */
    }
    @media (min-width: 768px) {
      h2 { font-size: 1.4rem; }
    }
  `,

  FilterArea: styled.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */
    
    @media (min-width: 768px) {
      width: auto;
    }
  `,

  SelectGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,
  RefreshButton: styled.button<{ loading: boolean }>`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({ loading }) =>
      loading ? `${rotate} 1s linear infinite` : "none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,

  Label: styled.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,

  Select: styled.select`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #fff;
    width: 100%; /* Full width no mobile */
    font-size: 14px;
    outline: none;

    @media (min-width: 768px) {
      min-width: 250px;
      width: auto;
    }
  `,

  Container: styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  `,

  Card: styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 10px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    position: relative;

    @media (min-width: 768px) {
      padding:20px 24px;
      margin-bottom: 20px;
    }
  `,
  
  info_date: styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 10px;
   @media (max-width: 768px) {
      position: absolute;
      right: 0;
      padding:0 10px;
    }
  `,

  CardHeaderPrincipal: styled.div`
    display: flex;
    flex-direction: column; /* Coluna no mobile */
    gap: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 12px;
    .titulo{
    font-size: 10px;
    padding: 10px;
    color:#3a3737;
  }

    .tag {
      background: #f5f3ff;
      color: #5b21b6;
      padding: 3px 8px;
      border-radius: 20px;
      font-size: 9px;
      font-weight: 800;
      display: inline-block;
    }
    h3 { margin: 5px 0 0 0; color: #334155; font-size: 1rem; }
    .info-date { color: #94a3b8; font-size: 12px; }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      h3 { font-size: 1.1rem; }
    }
  `,

  /* Container para permitir scroll na tabela sem quebrar o layout */
  TableWrapper: styled.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `,

  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    /* min-width: 500px; Garante que os dados não encavalem */
    
    th {
      background: #f8fafc;
      color: #64748b;
      text-transform: uppercase;
      font-size: 10px;
      padding: 10px 2px;
      text-align: left;
       @media (max-width: 768px) {
                 padding:5px;
                 word-break: break-all;
                 text-transform: capitalize;
    }
    }
    tr{
       &:hover{
                  background-color: #c2fcd7;
                  cursor: pointer;
                 }
    }

    td {
      padding: 2px 10px;
      border-bottom: 1px solid #f1f5f9;
      font-size: 13px;
      color: #475569;
       @media (max-width: 768px) {
                 padding: 10px 4px;
                 font-size: 12px;

    }
   
    
    }

    .bold { font-weight: 600; color: #1e293b; }
    .status-ativo { color: #16a34a; font-weight: 700; }
    .status-manutencao { color: #ca8a04; font-weight: 700; }
    .status-total { color: #5964fc; font-weight: 700; }
     /* #ca8a04 */
    @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,

  Thead: styled.thead``,
  Tbody: styled.tbody`
  width: 100%;
   @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,
  Tr: styled.tr`
    &:hover { background: #fdfdff; }
  `,

  ViewButton: styled.button`
    background: #fff;
    border: 1px solid #e2e8f0;
    padding: 8px 5px;
    border-radius: 6px;
    color: #4f46e5;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    
    @media (min-width: 768px) {
      padding: 6px 12px;
    }
  `
};

export default Template;