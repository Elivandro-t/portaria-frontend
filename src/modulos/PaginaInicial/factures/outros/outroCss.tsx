import { Link } from "react-router-dom";
import styled from "styled-components";

export default {
    container: styled.div`
    min-height: 70vh;
    max-width: 1100px;
   display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,
    titulo: styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 10px;
    color: var(--cor-titulo);
  `,
  grid:styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
  gap: 20px;
  `,
  card:styled.div`
  
  `,
   link:styled(Link)`
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
            }
  `,
  card_title:styled.div`
    font-size: 18px;
            font-weight: bold;
            color: #6a0dad;
            margin-bottom: 8px;
  `,
  card_desc:styled.div`
  font-size: 14px;
            color: #555;`,
  
  disabledCard:styled.div`
    padding: 20px;
  border-radius: 14px;
  background: #3a3030;
  border: 1px solid #444;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`,
 small:styled.small`
    color: #c9c9c9;
    display: block;
    margin-bottom: 8px;
    font-size: 0.75rem;
    font-weight: 500;
  `
            
        
    
}