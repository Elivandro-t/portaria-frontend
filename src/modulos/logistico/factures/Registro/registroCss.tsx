import styled from "styled-components";

export default {
  container: styled.div`
    background-color: #f8fafc; /* Fundo levemente cinza para destacar o card */
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    font-family: 'Inter', sans-serif;

    @media (max-width: 768px) {
      padding: 20px 5px;
    }
  `,

  Card: styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 900px;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    @media (max-width: 768px) {
      padding: 20px 10px;
    }
  `,

  container_int: styled.div`
    width: 100%;
    margin-top: 24px;
  `,

  heander: styled.div`
    display: grid;
    /* Alinhado com o grid do formulário */
    grid-template-columns: 2fr 1fr 1fr 50px; 
    gap: 15px;
    background: #1e40af; /* Azul Royal */
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px 8px 0 0;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 600px) {
        display: none; /* Esconde cabeçalho no mobile para usar labels individuais */
    }
  `,

  form: styled.section`
    display: grid;
      grid-template-columns: 2fr 1fr 1fr 30px;
      gap: 10px;
      align-items: center;
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #f1f5f9;
     border-radius: 8px;
    transition: all 0.2s;
    &:hover {
        border-color: #cbd5e1;
        background: #fcfcfc;
    }

    
    /* Estilo para o botão de adicionar (+) dentro da linha */
    button {
      height:30px;
      width: 30px;
      border-radius: 8px;
      padding: 5px;
      border: none;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #cfd0d3;
      }
    }
    @media screen and (max-width: 760px) {
            gap: 5px;
            padding: 5px;

    }

  `,

  selectCampos: styled.select`
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    font-size: 14px;
    background-color: #fff;
    outline: none;
    cursor: pointer;
    width: 100%;

    &:focus {
        border-color: #3b82f6;
    }
  `,

  btnAdd: styled.button`
    margin-top: 24px;
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: none;
    background: #16a34a; /* Verde Sucesso */
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
      background: #15803d;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(22, 163, 74, 0.2);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
        background: #94a3b8;
        cursor: not-allowed;
    }
  `
};

