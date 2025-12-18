import { MdInbox } from "react-icons/md";
import styled from "styled-components";
export default {
  header: styled.header`
    display: flex;
    padding:24px 15px;
    align-items: center;
    justify-content: space-between;
    height: 43px;
      background: var(--header-background);
       h1{
            color: #FFF;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
        
        }
    `,
  container: styled.div`
        
    `,
  container_2: styled.div`
    min-height: 70vh;
    max-width: 1100px;
    height: 100vh;
    gap: 30px;
    margin: auto;
    justify-content: center;
    width: 100%;

  `,
  titulo: styled.h2`
    font-size: 16px;
    letter-spacing: 0.5px;
    margin: 20px 0 16px 10px;
    color:#444;
     @media screen and (min-width: 560px){
        margin: 20px 0 16px 10px;

   } 
  `,
  grid: styled.div`
    width: 100%;
    display: grid;
    padding: 0 10px;
    grid-template-columns:repeat(2,1fr);
     @media screen and (max-width: 560px){
    display: flex;
    flex-direction: column;
   } 

  /* grid-template-columns:repeat(auto-fill,minmax(2,1fr)); */
  gap: 20px;
  `,
  link: styled.div`
            background: white;
            padding: 20px;
            text-decoration:none;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: .2s;
            border-left: 5px solid #6a0dad;
            &:hover{
                   transform: translateY(-4px);
            box-shadow: 0 6px 18px rgba(0,0,0,0.15);
             background: #f7f5f5;
            }
  `,
  card_title: styled.div`
    font-size: 18px;
            font-weight: bold;
            color: #6a0dad;
            margin-bottom: 8px;
  `,
  card_desc: styled.div`
  font-size: 14px;
            color: #555;`,

  disabledCard: styled.div`
    padding: 20px;
  border-radius: 14px;
  background: #3a3030;
  border: 1px solid #444;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`,
  small: styled.small`
    color: #c9c9c9;
    display: block;
    margin-bottom: 8px;
    font-size: 0.75rem;
    font-weight: 500;
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
     perfil: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `,
  nomeUsuario:styled.div`
    display: none;
    color: var(--cor-texto-header);
    font-size: 14px;
   @media screen and (min-width: 560px){
    display: block;
    }
    
  `,
  footer:styled.footer`
      background: var(--header-background);
  width: 100%;
  text-align: center;
  color: #FFF;
  padding: 10px;
  `
}