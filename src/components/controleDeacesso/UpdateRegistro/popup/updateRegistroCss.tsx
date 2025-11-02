import styled from "styled-components";

export default {
  container: styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    @media screen  and (max-width:560px){
      padding:0 10px;
      
    }
  `,
  label: styled.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    `,
  CamposInput: styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
    width: 100%;
     margin: 5px 0;
    `,
  Campos: styled.input`
      width: 100%;
      height: 38px;
      border:1px solid #d6d6d6;
      background-color:#FFF;
      border-radius: 5px;
      border: 1px solid  '#ccc';
      &:focus {
          outline: none;
          border-color:'#007BFF';
      }
      padding:5px;
  
  
      `,

  container_int: styled.section`
    width: 400px;
        box-sizing: border-box;

    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
  `,

  header: styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,

  content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
  `,

  buttons: styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
  `,
  SelectItens: styled.select`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid #ccc;
    
    `,
        Options: styled.option`
        font-size: 12px;
        `,

};
