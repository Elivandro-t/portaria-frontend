import styled from "styled-components";

export default {
  container: styled.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(15, 23, 42, 0.6); // Slate escuro com transparência
    backdrop-filter: blur(8px);
    padding: 20px;
  `,

  container_int: styled.section`
    width: 100%;
    max-width: 500px; // Aumentado levemente para melhor leitura
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #f1f5f9;
  `,

  header: styled.div`
    padding: 24px 24px 16px;
    background-color: #fff;
    border-bottom: 1px solid #f1f5f9;
    
    h2 {
      margin: 0;
      font-size: 1.2rem;
      color: #0f172a; // Slate 900
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      letter-spacing: -0.025em;
    }
    p {
      margin: 4px 0 0;
      font-size: 0.85rem;
      color: #64748b;
    }
  `,

  content: styled.div`
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr; // Grid de duas colunas para campos menores
    gap: 16px;
    max-height: 70vh;
    overflow-y: auto;

    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
  `,

  CamposInput: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // Se quiser que um campo ocupe a linha toda, adicionamos a prop grid-column
    &.full-width { grid-column: span 2; }
  `,

  label: styled.label`
    font-size: 0.75rem;
    font-weight: 600;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  `,

  Campos: styled.input`
    width: 100%;
    height: 44px;
    padding: 0 14px;
    border: 1.5px solid #e2e8f0;
    background-color: #fff;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    color: #1e293b;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }

    &::placeholder { color: #94a3b8; }
  `,

  SelectItens: styled.select`
    width: 100%;
    height: 44px;
    padding: 0 14px;
    border: 1.5px solid #e2e8f0;
    background-color: #fff;
    border-radius: 10px;
    font-size: 0.95rem;
    color: #1e293b;
    cursor: pointer;
    appearance: none; // Remove seta padrão para estilo customizado se desejar
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;

    &:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }
  `,

  Options: styled.option`
    padding: 10px;
  `,

  buttons: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 20px 24px;
    background-color: #f8fafc;
    border-top: 1px solid #f1f5f9;
  `,
};