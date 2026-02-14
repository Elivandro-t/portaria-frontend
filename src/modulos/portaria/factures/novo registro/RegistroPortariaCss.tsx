import { MdInbox } from "react-icons/md";
import styled from "styled-components";

interface CamposProps {
  hasError?: boolean;
}

export default {
  container_principal: styled.div`
    padding: 15px 10px;
    display: flex;
    flex-direction: column; // Mobile first: empilha
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 100vh;

    @media (min-width: 768px) {
      padding: 20px;
      flex-direction: row; // Desktop: alinha
    }
  `,

  container: styled.div`
    padding: 10px 5px;
    width: 100%;
    max-width: 850px;

    @media (min-width: 768px) {
      padding: 20px;
    }
  `,

  area_pedidos: styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    padding: 10px 15px; // Mobile: menos padding
    width: 100%;

    @media (min-width: 768px) {
      padding: 10px 56px;
      max-width: 700px;
    }
  `,

  titulo: styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--cor-titulo);
    text-align: center;

    @media (min-width: 768px) {
      font-size: 24px;
      text-align: left;
    }
  `,

  pedidos: styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,

  FormSub: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,

  label: styled.label`
    font-size: 0.8rem; // Melhor legibilidade no mobile
    font-weight: 500;
    color: var(--cor-texto-campos);
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;
    margin-bottom: 6px;
    display: inline-block;

    @media (min-width: 768px) {
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
    height: 45px; // Maior no mobile para facilitar o toque
    border-radius: 8px;
    padding: 0 12px;
    background-color: #FFF;
    font-size: 16px; // Evita zoom no iOS
    border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#d6d6d6')};
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${({ hasError }) => (hasError ? '#ff4d4f' : '#007BFF')};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    @media (min-width: 768px) {
      height: 38px;
      font-size: 14px;
    }
  `,

  labelCheck: styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px 0;
    cursor: pointer;
    font-size: 14px;
  `,

  checkbox: styled.input`
    height: 18px;
    width: 18px;
    cursor: pointer;
  `,

  SelectItens: styled.select<CamposProps>`
    width: 100%;
    height: 45px;
    background-color: #FFF;
    border-radius: 8px;
    padding: 0 10px;
    font-size: 16px;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#d6d6d6')};
    
    @media (min-width: 768px) {
      height: 38px;
      font-size: 14px;
    }
  `,

  TextArea: styled.textarea<CamposProps>`
    min-height: 100px;
    resize: vertical;
    width: 100%;
    padding: 12px;
    background-color: #FFF;
    border-radius: 8px;
    font-size: 16px;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#d6d6d6')};

    @media (min-width: 768px) {
      font-size: 14px;
    }
  `,

  Options: styled.option`
    padding: 10px;
  `,

  Erros: styled.div`
    color: #ff4d4f;
    font-size: 12px;
    margin-top: 4px;
    font-weight: 500;
  `,

  BtnLogin: styled.button`
    margin: 10px 0;
    width: 100%;
    height: 48px;
    background-color: #007BFF;
    border-radius: 8px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:active {
        transform: scale(0.98);
    }

    &:hover {
        background-color: #0056b3;
    }

    @media (min-width: 768px) {
      height: 40px;
      font-size: 14px;
    }
  `,

  leftArea: styled.div`
    width: 100%;
    padding: 5px 0;
    display: flex;
    flex-direction: column; // Mobile: empilha
    gap: 15px;

    @media (min-width: 768px) {
      flex-direction: row; // Desktop: lado a lado
      gap: 10px;
    }
  `,

  btnDivider: styled.div`
    display: flex;
    flex-direction: column; // Mobile: botões um em cima do outro
    width: 100%;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row; // Desktop: lado a lado
      align-items: center;
    }
  `,

  // --- COMPONENTES DO SLIDE / DASHBOARD (Mantidos na íntegra) ---

  CardCentro: styled.div`
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 10px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column; // Mobile first

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 20px;
      padding: 20px;
      margin-bottom: 20px;
    }
  `,

  StatusContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
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
    width: 100%;
    margin-top: 5px;
    gap: 5px;

    @media (min-width: 660px) {
      flex-direction: row;
      align-items: center;
      width: auto;
    }
  `,

  AreaItemJustRigth: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    width: 100%;
    gap: 5px;

    @media (min-width: 660px) {
      flex-direction: row;
      align-items: center;
      width: 32%;
      margin-left: 50px;
    }
  `,

  semItens: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #555;
    height: 50vh;
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
    margin: 5px;
    font-size: 12px;
    font-weight: 600;
  `,

  Button: styled.button`
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    margin-top: 15px;
    font-weight: 600;

    &:active {
      transform: scale(0.97);
    }
  `,

  ItemImage: styled.img`
    width: 100%; // Mobile: maior destaque
    max-width: 120px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
    margin: 0 auto 15px auto;

    @media (min-width: 560px) {
      width: 100px;
      height: 100px;
      margin-right: 15px;
      margin-bottom: 0;
    }
  `,

  ItemDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 10px 0;
    flex: 1;
  `,

  SummaryRow: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,

  heanderPedido: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    gap: 10px;
    border-bottom: 1px solid #f0f0f0;
  `,

  tituloPedido: styled.h4`
    font-size: 14px;
    color: #1e88e5;
    margin: 0;
  `,

  p: styled.p`
    font-weight: 600;
    font-size: 14px;
    margin: 4px 0;
  `,

  status: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--cor-texto-titulo);
    font-size: 13px;
  `,

  Image: styled.img`
    width: 100%;
    height: 180px;
    border-radius: 12px;
    object-fit: cover;
    object-position: center top;

    @media (min-width: 560px) {
      width: 150px;
      height: 150px;
    }
  `,

  description: styled.div`
    width: 100%;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 1.4;
    color: #666;
  `,

  Label: styled.span`
    font-size: 0.75rem;
    font-weight: bold;
    color: #3b004f;
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;

    @media (min-width: 560px) {
      font-size: 0.8rem;
    }
  `,

  AreaBuscaPlaca: styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em auto;
    padding: 20px;
    width: 95%;
    max-width: 500px;
    font-size: 16px;
    border-radius: 15px;
    color: #134c72;
    background: #fff;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    gap: 15px;

    @media (min-width: 600px){
      margin: 5em auto;
      padding: 30px 20px;
      width: auto;
    }
  `,

  busca: styled.div`
    display: flex;
    width: 100%;
    border-radius: 8px;
    padding: 5px;
    transition: 0.2s ease;
    align-items: center;
    background: #f8f9fa;
    border: 1px solid #e9ecef;
  `,

  LabelSubtitulo: styled.span`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: var(--cor-texto-campos);
    word-wrap: break-word;
    font-size: 0.7rem;

    @media (min-width: 560px) {
      font-size: 0.75rem;
    }
  `,

  edit: styled.div`
    margin: 0;
  `,
};