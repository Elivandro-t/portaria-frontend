import { MdInbox } from "react-icons/md";
import styled from "styled-components";
interface CamposProps {
  hasError?: boolean;
}

export default {
  container_principal: styled.div`
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

  `,
  container: styled.div`
    padding: 20px 1px;

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
  labelCheck: styled.label`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    margin:5px 0 ;
    `,
  checkbox: styled.input`
    height: 15px;
    padding: 5px;
    display: flex;
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
  leftArea: styled.div`
    width: 100%;
    padding:5px 0;
      display: flex;
      gap: 10px;
    `,
  btnDivider: styled.div`
      display: flex;
      width: 100%;
      align-items: center;
    `,



  /////////////////

  CardCentro: styled.div`
    border-radius: 8px;
    padding: 2px 15px;
    margin-bottom: 2px;

    @media screen and (min-width: 560px) {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding:20px;
      margin-bottom: 20px;
    }
  `,

  StatusContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  `,

  AreaItemJust: styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 3px;
  `,

  AreaItemJustCenter: styled.div`
    display: flex;
    flex-direction: column;
       width: 80%;

    margin-top: 5px;
    gap: 5px;

    @media screen and (min-width: 660px) {
      flex-direction: row;
      align-items: center;
       width: auto;
    }
  `,
  AreaItemJustRigth: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
   width: 70%;
    margin-left: 50px;
    gap: 5px;

    @media screen and (min-width: 660px) {
      flex-direction: row;
      align-items: center;
      width: 32%;
    }
  `,
  semItens: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      gap: 10px;
      opacity: 0.8;
    `,

  iconSemItens: styled(MdInbox)`
      font-size: 60px;
      color: #999;
    `,

  StatusItem: styled.div<{ active?: boolean }>`
    flex: 1;
    text-align: center;
    color: ${(props) => (props.active ? "#fff" : "#999")};
    background: ${(props) => (props.active ? "#4caf50" : "#e0e0e0")};
    border-radius: 20px;
    padding: 10px;
    margin: 0 5px;
    font-size: 12px;
  `,

  Button: styled.button`
    background-color: "#4caf50" ;
    color: #fff;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;

    &:active {
      transform: scale(0.97);
    }
  `,

  ItemImage: styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;

    @media screen and (min-width: 560px) {
      width: 100px;
      height: 100px;
    }
  `,

  ItemDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
  `,

  SummaryRow: styled.div`
      display: flex;
      justify-content: space-between;
  
    `,

  heanderPedido: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px;
      gap: 10px;
    `,

  tituloPedido: styled.h4`
      font-size: 14px;
      color: #1e88e5;
      padding: 2px;
    `,

  p: styled.p`
      font-weight: 600;
      font-size: 14px;
    `,

  status: styled.div`
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--cor-texto-titulo);
    `,

  Image: styled.img`
      width: 100%;
      height: 200px;
      border-radius: 5%;
      object-fit: cover;
      object-position: center top;
  
      @media screen and (min-width: 560px) {
        width: 150px;
        height: 150px;
      }
    `,

  description: styled.div`
      width: 100%;
      word-wrap: break-word;
    `,

  Label: styled.span`
      font-size: 0.65rem;
      font-weight: bold;
      color: #3b004f;
      font-family: "Inter", sans-serif;
      letter-spacing: 0.3px;
  
      @media screen and (min-width: 560px) {
        font-size: 0.8rem;
      }
    `,
  AreaBuscaPlaca: styled.div`
       flex-direction: column;
      margin:5em auto;
      padding: 30px 20px;
       width: 100%;
      font-size: 16px;
      border-radius: 10px;
      color: #134c72;
               box-shadow: 0 6px 16px rgba(0,0,0,0.1);
      @media screen and (min-width: 600px){
     width: auto;
    }
      
      gap: 10px;
    `,
  busca: styled.div`
    display: flex;
    width: 100%;
    border-radius: 5px;
    /* border: 1px solid #888;
  outline-offset: 2px; */
    padding: 10px;
    transition: 0.2s ease;
    align-items: center;
    /* &:focus-within {
    border-color: #6a5acd;
    outline: none;
    box-shadow: 0 0 0 3px rgba(106,90,205,0.2);
    &:hover{
      outline: none;
    }
  } */
     
    `,

  LabelSubtitulo: styled.span`
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: var(--cor-texto-campos);
      word-wrap: break-word;
      font-size: 0.55rem;
  
      @media screen and (min-width: 560px) {
        font-size: 0.75rem;
      }
    `,

  edit: styled.div`
      margin: 0;
    `,

}

