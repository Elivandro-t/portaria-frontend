import styled from "styled-components";
interface CamposProps {
    hasError?: boolean;
}
type color = {
  color:string
}
export default {
    container: styled.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,
  Chip:styled.div<color>`
    padding: 5px;
    border-radius: 5px;
    color:${({color})=>{
      return color ? color:"blue"
    }} ;
    font-size: 12px;
     @media screen and (min-width:560px) {
               font-size:14px;


    }
  `,
    titulo: styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,
    FormSub: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,
    label: styled.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,
    CamposInput: styled.div`
    display: flex;
    position: relative;
    gap: 10px;
     margin: 5px 10px;
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
    Options: styled.option``,
    Erros: styled.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,
    TableContainer: styled.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `,

  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-family: "Inter", sans-serif;  
  
    th, td {
      padding: 10px 13px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      font-size: 0.7rem;
      margin: 0;
    }

    th {
      background-color: #f8f9fa;
      font-weight: 600;
      color: #333;
    }

    tr{
      width: 100%;
    }
    tr:hover {
      background-color: #f1f5ff;
      transition: background-color 0.2s ease-in-out;
      
    }

    tr:last-child td {
      border-bottom: none;
    }
    td{
            cursor: pointer;

    }
  `,
  trBTN:styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `,
  erro:styled.div`
    padding: 10px;
    
  `,
  imagemArea:styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 480px;
  `,
  tituloLabel:styled.label`
  font-size: 16px;

  `,
   imgemVisitante:styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
  `,
  imgem:styled.img`
    width: 280px;
    height: 200px;
    object-fit: cover;
  `,
  divArea:styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
    
  `,
  btnDownload:styled.div`
   position: absolute;
   align-items: center;
   padding: 10px;
   right: 0;
   top: 20px;
    
  `,
   visitante: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
     margin: 5px 10px;
    `,
    
}