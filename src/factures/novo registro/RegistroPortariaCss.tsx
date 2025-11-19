import styled from "styled-components";
interface CamposProps {
    hasError?: boolean;
}

export default {
    container: styled.div`
    padding: 20px 10px;

    height: 100vh;

  `,
    area_pedidos: styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
     max-width: 700px;
    margin: 0 auto;
    padding: 10px 56px;
    width: 100%;
   @media screen {
    padding: 10px 0;
   }
  `,
    titulo: styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--cor-titulo);
  `,
    pedidos: styled.section`
    display: flex;
    flex-direction: column; /* Mantém itens um abaixo do outro */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,
    FormSub: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,
    label: styled.label`
    font-size: 0.65rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    @media screen  and (min-width: 560px) {
       font-size: 0.85rem;    
    }
    `,
    CamposInput: styled.div`
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,
    Select: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,
    Campos: styled.input.withConfig({
        shouldForwardProp: (prop) => prop !== "hasError",
    }) <CamposProps>`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#ccc')};
    &:focus {
        outline: none;
        border-color: ${({ hasError }) => (hasError ? '#ff4d4f' : '#007BFF')};
    }
    padding:5px;


    `,
    labelCheck:styled.label`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    margin:5px 0 ;
    `,
    checkbox:styled.input`
    height: 15px;
    padding: 5px;
    display: flex;
    margin-left: 25px;
    gap: 10px;
    width: 15px;
    `,
    SelectItens: styled.select<CamposProps>`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#ccc')};
    
    `,
     TextArea: styled.textarea<CamposProps>`
    min-height:80px; 
    resize:vertical;
    width: 100%;
    padding: 10px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#ccc')};
    
    `,
    Options: styled.option`
    height: 100vh;
    `,
    Erros: styled.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 13px;
      margin: 0 0 10px;
     
    
    `,
    BtnLogin: styled.button`
    margin: 5px 0;
    width: 100%;
    height: 35px;
    border:1px solid #d6d6d6;
    background-color:#007BFF;
    border-radius: 5px;
    color: #DDD;
    font-size: 14px;
    font-weight: bold;
        transition: background-color 0.3s ease;
    
    &:active {
        transform: scale(0.95);
        font-size: 12px;
    
      }
      &:hover {
        background-color: #0056b3;
        color: white; 
      }
    
    `,
    leftArea:styled.div`
    width: 100%;
    padding:5px 0;
      display: flex;
      gap: 10px;
    `,
    btnDivider:styled.div`
      display: flex;
      width: 100%;
      align-items: center;
    `
}
