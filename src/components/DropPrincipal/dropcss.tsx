import styled from "styled-components";

export default {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 400px; /* Tamanho ideal para formulários de portaria */
    font-family: 'Inter', -apple-system, sans-serif;
  `,

  Container: styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed ${({ isActive }) => (isActive ? "#2563eb" : "#cbd5e1")};
    background-color: ${({ isActive }) => (isActive ? "#eff6ff" : "#f8fafc")};
    border-radius: 12px;
    min-height: 180px;
    padding: 24px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
      border-color: #94a3b8;
      background-color: #f1f5f9;
    }
  `,

  // Área que aparece após selecionar a foto
  Div: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
  `,

  PreviewImage: styled.img`
    width: 120px;
    height: 120px;
    border-radius: 8px; /* Quadrado levemente arredondado passa mais seriedade que o círculo */
    object-fit: cover;
    border: 1px solid #e2e8f0;
    background: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  `,

  RemoveButton: styled.button`
    position: absolute;
    top: -8px;
    right: -8px;
    background: #1e293b; /* Cor escura profissional */
    color: white;
    border: 2px solid #fff;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: #ef4444; /* Só fica vermelho no hover */
    }
  `,

  Text: styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #334155;
    text-align: center;
    line-height: 1.4;
  `,

  // Estilo do botão de silhueta (Plano B)
  ShowAvatarsBtn: styled.button`
    background: #ffffff;
    border: 1px solid #e2e8f0;
    color: #475569;
    font-size: 12px;
    font-weight: 700;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    align-self: center;

    &:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
      color: #1e293b;
    }
  `,

  AvatarSection: styled.div`
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  `,

  AvatarTitle: styled.span`
    font-size: 11px;
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    text-align: center;
  `,

  AvatarGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  `,

  AvatarItem: styled.div<{ isSelected: boolean }>`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f5f9;
    border: 2px solid ${({ isSelected }) => (isSelected ? "#2563eb" : "#e2e8f0")};
    color: #64748b;
    transition: all 0.2s;

    &:hover {
      background: #e2e8f0;
      color: #1e293b;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  `
};