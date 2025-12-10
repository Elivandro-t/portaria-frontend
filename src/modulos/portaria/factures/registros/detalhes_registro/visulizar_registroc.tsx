import { MdInbox } from "react-icons/md";
import { styled } from "styled-components";

type Props = {
  ativo: any;
};

type Color = {
  color: string;
};

export default {
  Area: styled.div`
    background: #fff;
    padding: 25px 0;

    @media screen and (min-width: 560px) {
      padding: 25px ;
    }
  `,

  Chip: styled.div<Color>`
    padding: 5px;
    font-weight: bold;
    border-radius: 5px;
    color: ${({ color }) => (color ? color : "blue")};
    font-size: 10px;

    @media screen and (min-width: 560px) {
      font-size: 14px;
    }
  `,

  Container: styled.div`
    position: relative;
    max-width: 800px;
    margin: auto;
    box-sizing: border-box;
    font-family: Arial, sans-serif;

    @media screen and (min-width: 560px) {
     padding: 20px 25px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
  `,

  imagemArea: styled.div`
    display: flex;
    gap: 25px;
    border: 0;
  `,

  ImagemItemRecebido: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 11px;
    margin-top: 15px;
    margin-bottom: 10px;

    gap: 5px;
  `,

  Card: styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 10px;
    background-color: #ededed;
    padding: 25px;

    @media screen and (max-width: 560px) {
      padding: 10px 15px;

      
    }
  `,

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

  Button: styled.button<Props>`
    display: ${({ ativo }) => (ativo ? "block" : "none")};
    background-color: ${({ ativo }) => (ativo ? "#4caf50" : "#6e6966")};
    color: #fff;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;

    &:hover {
      background-color: ${({ ativo }) => (ativo ? "#45a049" : "#99938f")};
    }

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
};
