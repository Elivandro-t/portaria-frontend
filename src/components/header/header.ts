import styled from "styled-components";

export default {
  container: styled.header`
    box-shadow: 0 4px 8px rgba(63, 62, 62, 0.3);
    display:flex;
    align-items:center;
    gap: 10px;
    justify-content: space-between;
    font-family: 'Segoe UI', sans-serif;
    padding:10px 0;
      padding:10px 10px;
    background: var(--header-background);
    color: white;
     @media screen and (min-width: 700px){
          padding:10px 30px;

    }
   

    `,

  logo: styled.img`
    padding: 0 5px;
    color: var(--cor-texto-header);
     object-fit: contain;
     height:35px;
     font-size: 12px;
  /* azul suave */

    cursor: pointer;
    @media screen and (min-width: 560px){
         font-size: 14px;
        font-weight: 600;


    }
    `,
  busca: styled.input`
      width:90%;
      border-radius:5px;
      padding:5px 2px;
      border: 1px solid #b6aeaeff;
      outline: none;
      @media screen and (min-width: 560px){
        width:50%;

    }
    `,
    ButtomService: styled.button` 
    display:flex;
    align-items:center;
    background-color: var(--cor-principal);
    color: var(--cor-font);
    height:30px;
    padding:5px 15px;
    gap:5px;
    border-radius:10px;
    border:0;
    cursor:pointer;
    transition: background-color 0.3s ease;
&:active {
    transform: scale(0.95);
  }
  &:hover {
    background-color: #6a8de5; /* azul hover mais escuro */
    box-shadow: 0 4px 8px rgba(0,0,0,0.15); /* ou qualquer cor de hover */
    color: white;              /* opcional */
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
    align-items: center;
    gap: 10px;
    padding: 0 10px;
  `,
  nomeUsuario:styled.div`
    display: none;
    color: var(--cor-texto-header);
    font-size: 14px;
   @media screen and (min-width: 560px){
    display: block;
    }
    
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
   `,
   menu:styled.div`
   display: inline-block;
   padding: 2px;
   font-size: 16px;
   color:var(--cor-texto-header);
   border-radius: 2px;
   cursor: pointer;
   &:hover{
    color: #ADADAD;
   }
   `
}


