import styled from "styled-components";

export default {
  areaHeader: styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    z-index: 1000;
    top: 0;
    width: 100%;
  `,

  container: styled.header`
    /* Sombras mais suaves para não parecer datado */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    padding: 12px 15px;
    background: var(--header-background);
    color: white;
    min-height: 60px;

    @media screen and (min-width: 700px) {
      padding: 10px 40px;
    }
  `,

  areaLogo: styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    
    span {
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.5px;
      padding: 4px 10px;
      background: rgba(255, 255, 255, 0.1); /* Badge sutil para a Filial */
      border-radius: 6px;
      white-space: nowrap;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  `,

  logo: styled.img`
    object-fit: contain;
    height: 38px; /* Aumentado levemente para melhor legibilidade */
    cursor: pointer;
    transition: transform 0.2s ease;
    display: none;

    &:hover {
      transform: scale(1.02);
    }

    @media screen and (min-width: 560px) {
      display: block;
    }
  `,

  busca: styled.input`
    flex: 1;
    max-width: 500px;
    height: 38px;
    border-radius: 8px;
    padding: 0 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    outline: none;
    font-size: 14px;
    transition: all 0.3s ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      background: white;
      color: #333;
      border-color: #fff;
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
    }

    @media screen and (max-width: 560px) {
      width: 100%;
      height: 35px;
    }
  `,

  perfil: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.1); /* Divisor sutil */
  `,

  nomeUsuario: styled.div`
    display: none;
    color: var(--cor-texto-header);
    font-size: 14px;
    text-align: right;
    line-height: 1.2;

    strong {
      display: block;
      font-size: 11px;
      opacity: 0.7;
      letter-spacing: 0.5px;
    }

    @media screen and (min-width: 700px) {
      display: block;
    }
  `,

  // Estilização extra para menus e categorias (caso use)
  categoriasItens: styled.div`
    padding: 8px 40px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: var(--cor-principal);
    border-top: 1px solid rgba(0,0,0,0.05);
  `
};