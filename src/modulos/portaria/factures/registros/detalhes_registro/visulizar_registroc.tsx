import styled from "styled-components";
import { MdInbox } from "react-icons/md";

const Template = {
  Area: styled.div`
    background-color: #f1f5f9; /* Fundo levemente cinza para destacar o card branco */
    min-height: 100vh;
    padding: 10px;
    font-family: 'Inter', -apple-system, sans-serif;

    @media screen and (min-width: 768px) {
      padding: 40px 20px;
    }
  `,

  Container: styled.div`
    max-width: 600px; /* Largura ideal para leitura em card */
    margin: auto;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  `,

  heanderPedido: styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f1f5f9;
  `,

  tituloPedido: styled.h4`
    margin: 0;
    font-size: 0.85rem;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,

  status: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  Chip: styled.div<{ color: string }>`
    padding: 6px 14px;
    font-weight: 700;
    border-radius: 30px;
    color: ${({ color }) => color || "#2563eb"};
    background: ${({ color }) => `${color}10`}; /* Fundo translúcido */
    font-size: 11px;
    border: 1px solid ${({ color }) => `${color}20`};
  `,

  /* ÁREA PRINCIPAL: FOTO E NOME */
  CardCentro: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: center;
    border-bottom: 1px dashed #e2e8f0;

    @media screen and (min-width: 600px) {
      flex-direction: row;
      text-align: left;
      align-items: center;

      gap: 24px;
    }
  `,

  Image: styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%; /* Estilo Avatar Circular para UX de Pessoas */
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    margin-bottom: 16px;

    @media screen and (min-width: 600px) {
      margin-bottom: 0;
    }
  `,

  ItemDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  /* CORPO DAS INFORMAÇÕES */
  Card: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  SummaryRow: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* Duas colunas sempre, para ser compacto */
    gap: 16px;

    @media screen and (max-width: 400px) {
      grid-template-columns: 1fr; /* Coluna única só em telas muito pequenas */
    }
  `,

  AreaItemJust: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
     @media screen and (max-width: 700px) {
      align-items: start;
    }
  `,

  AreaItemJustCenter: styled.div` display: flex; flex-direction: column; gap: 4px; `,
  AreaItemJustRigth: styled.div` display: flex; flex-direction: column; gap: 4px; `,

  Label: styled.span`
    font-size: 10px;
    font-weight: 700;
    color: #94a3b8; /* Slate 400 */
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,

  LabelSubtitulo: styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #1e293b; /* Slate 800 */
    line-height: 1.2;
  `,
   LabelDescrip: styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #1e293b; /* Slate 800 */
    line-height: 1.2;
  `,

  /* Nome em destaque no cabeçalho */
  DestaqueNome: styled(styled.span``)`
    font-size: 1.25rem;
    font-weight: 800;
    color: #0f172a;
    display: block;
  `,

  imagemArea: styled.div`
    display: flex;
    gap: 12px;
    margin-top: 10px;
  `,

  ItemImage: styled.img`
    width: 80px;
    height: 80px;
    border-radius: 12px;
    object-fit: cover;
    cursor: pointer;
    transition: 0.2s;
    &:hover { transform: scale(1.05); }
  `,

  Button: styled.button<{ ativo: boolean }>`
    display: ${({ ativo }) => (ativo ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    background-color: #4f46e5;
    color: #fff;
    border: none;
    padding: 16px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    
    &:active { transform: scale(0.98); }
  `,

  semItens: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    color: #94a3b8;
  `,

  iconSemItens: styled(MdInbox)` font-size: 48px; margin-bottom: 10px; `,
  edit: styled.div` margin: 0; `,
  p: styled.p` margin: 0; `,
  ImagemItemRecebido: styled.div` display: flex; flex-direction: column; gap: 8px; `
};

export default Template;