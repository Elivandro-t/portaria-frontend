import styled from "styled-components";

export default {
  container: styled.div`
    position: fixed;
    inset: 0; // Atalho para top/left/right/bottom: 0
    width: 100%;
    height: 100vh;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px); // Efeito moderno de desfoque ao fundo
    padding: 20px;
  `,

  container_int: styled.section`
    width: 100%;
    max-width: 450px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: fadeIn 0.3s ease-out;

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,

  header: styled.div`
    padding: 20px 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2 {
      margin: 0;
      font-size: 1.25rem;
      color: #1a1a1a;
      font-family: "Inter", sans-serif;
      font-weight: 600;
    }
  `,

  content: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px; // Espaçamento consistente entre campos
  `,

  CamposInput: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  label: styled.label`
    font-size: 0.85rem;
    font-weight: 600;
    color: #4b5563; // Cinza médio profissional
    font-family: "Inter", sans-serif;
    margin-bottom: 6px;
    display: block;
  `,

  Campos: styled.input`
    width: 100%;
    height: 42px;
    padding: 0 12px;
    border: 1px solid #e5e7eb;
    background-color: #f9fafb;
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #2563eb;
      background-color: #fff;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  `,

  SelectItens: styled.select`
    width: 100%;
    height: 42px;
    padding: 0 12px;
    border: 1px solid #e5e7eb;
    background-color: #f9fafb;
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }
  `,

  Options: styled.option`
    font-size: 14px;
    padding: 10px;
  `,

  buttons: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 12px;
    padding-top: 20px;
    border-top: 1px solid #f3f4f6;
  `,
};