import styled from "styled-components";

export default {
  areaHeader: styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    z-index: 1000;
    top: 0;
    width: 100%;
    background: var(--header-background, #1a1a1a);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  `,

  container: styled.header`
    display: flex;
    flex-wrap: wrap; /* Permite que a busca "caia" para a linha de baixo no mobile */
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    gap: 15px;

    @media (min-width: 768px) {
      flex-wrap: nowrap; /* Trava tudo em uma linha só no desktop */
      padding: 10px 40px;
      height: 75px;
    }
  `,

  areaLogo: styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    order: 1; /* Primeiro item */
  `,

  logo: styled.img`
    height: 32px;
    object-fit: contain;
    cursor: pointer;
    @media (min-width: 768px) { height: 42px; }
  `,

  SelectFilial: styled.select`
    background: rgba(161, 114, 114, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    max-width: 70px;

    option { background: #222; }

    @media (min-width: 768px) { max-width: 150px; }
  `,

  BadgeFilial: styled.span`
    font-weight: 700;
    font-size: 12px;
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.15);
  `,

  wrapperBusca: styled.div`
    order: 3; /* No mobile, vai para baixo de tudo */
    width: 100%;
    
    @media (min-width: 768px) {
      order: 2; /* No desktop, fica no meio */
      flex: 1;
      max-width: 500px;
    }
  `,

  busca: styled.input`
    width: 100%;
    height: 45px; /* Maior no mobile para facilitar o toque */
    border-radius: 10px;
    padding: 0 15px;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.12);
    color: white;
    font-size: 16px; /* Evita zoom automático chato no iPhone */
    outline: none;
    transition: all 0.2s ease;

    &::placeholder { color: rgba(255, 255, 255, 0.5); }

    &:focus {
      background: #fff;
      color: #000;
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
    }

    @media (min-width: 768px) {
      height: 40px;
      font-size: 14px;
    }
  `,

  perfil: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    order: 2; /* No mobile, fica ao lado da logo */

    @media (min-width: 768px) {
      order: 3; /* No desktop, vai para o final */
      padding-left: 15px;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
    }
  `,

  nomeUsuario: styled.div`
    display: none; /* Esconde texto longo no mobile */
    @media (min-width: 1024px) {
      display: block;
      text-align: right;
      color: white;
      font-size: 14px;
      strong { display: block; font-size: 10px; opacity: 0.6; text-transform: uppercase; }
    }
  `
};