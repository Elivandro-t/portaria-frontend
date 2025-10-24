import styled from "styled-components";

export default {
  container: styled.header`
    box-shadow: 0 4px 8px rgba(63, 62, 62, 0.3);
    display:flex;
    align-items:center;
    justify-content: space-between;
    font-family: 'Segoe UI', sans-serif;
    padding:10px 40px;
    background: var(--header-background);
    color: white;
     @media screen {
      gap: 10px;
      padding:10px 15px;
    }
   

    `,
    btnLogin:styled.div`
      display: flex;
      gap: 10px;
      align-items: center;
    `,
    logo: styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'Poppins', sans-serif; /* fonte moderna e legível */
    font-weight: 600;
    font-size: 28px;
    color: var(--cor-texto-header); /* azul suave */
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* sombra leve para destaque */
    letter-spacing: 0.5px;
    cursor: pointer;
   @media screen {
      font-size: 14px;
    }
    `,
  busca: styled.input`
      width:50%;
      border-radius:5px;
      padding:5px;
      border: 1px solid #b6aeaeff;
      outline: none;
    `,
  ButtomService: styled.a` 
    display:flex;
    align-items:center;
    color: var(--cor-texto-header);
    height:30px;
    padding:5px 15px;
    border-radius:10px;
    text-decoration: none;
    letter-spacing:0.5;
    font-family: "intel",sans-serif;
    font-size: 14px;
    border:0;
    cursor:pointer;
   &:hover {
    color: white;    
  }
    `,
  car: styled.button` 
   display:flex;
   align-items:center;
   background-color:transparent;
   color: var(--cor-font);
   height:30px;
    padding:5px 15px;
    gap:5px;
    border-radius:10px;
    border:0;
    cursor:pointer;
    transition: background-color 0.3s ease;
    &:active {
    transform: scale(0.95); /* Dá um "zoom" menor quando clicado */
  }
    `,
  iconCar: styled.section``,
  perfil: styled.div`
  display: flex;
  `,
  areaHeader: styled.div`
   display:flex;
   flex-direction:column;
     position: sticky;
  z-index: 1000;
  top:0;
   `,
  categoriasItens: styled.div`
   padding:10px  0;
   width: 100%;
   display: flex;
   align-items: center;
   gap: 10px;
   background-color:var(--cor-principal);
   `
}


