import { styled } from "styled-components";

export default {
  contaier: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    a{
      list-style: none;
      text-decoration: none;
    }
    `,
  header: styled.header`
     display: flex;
  padding: 0px 16px;
  align-items: center;
  justify-content: space-between;
  background: var(--header-background);
  @media screen and (max-width: 760px){
    padding: 10px 16px;
  }

  h1 {
    color: #FFF;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }
    `,
  perfil: styled.div`
        display: flex;
        align-items: center;
        gap: 5px;
      `,
  nomeUsuario: styled.div`
          display: none;
          color: var(--cor-texto-header);
          font-size: 14px;
         @media screen and (min-width: 560px){
          display: block;
          }
          
        `,
}