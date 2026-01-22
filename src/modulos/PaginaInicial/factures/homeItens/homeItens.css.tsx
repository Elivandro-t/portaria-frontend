import { MdInbox } from "react-icons/md";
import styled from "styled-components";
export default {

  container: styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;

    `,
  main: styled.div`
     flex: 1;
  display: flex;
  background: #f4f6f9;      
;

    `,
  container_2: styled.div`
  flex: 1;
  height:100vh;
  padding: 0 10px;
  position: relative;
       @media screen and (max-width: 560px){
       padding:0 3px ;
   } 



  padding-right: 8px; /* evita cortar scrollbar */
    overflow-y: auto;
    overflow-x: hidden;
  `,
  scroll: styled.div`
    max-width: 1220px;
    width: 100%;
    margin:50px auto;
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
    padding: 2px 0;
    grid-template-columns:repeat(2,1fr);
      gap: 20px;

  /* grid-template-columns:repeat(auto-fill,minmax(2,1fr)); */
       @media screen and (max-width: 560px){
       padding:0 ;
       gap: 15px;
   } 

  `,
  link: styled.div`
            background: white;
            padding: 20px;
            text-decoration:none;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: .2s;
            border-left: 4px solid #5B7FFF;
            &:hover{
                   transform: translateY(-4px);
            box-shadow: 0 6px 18px rgba(46, 45, 45, 0.15);
             background: #f7f5f5;
            }
                 @media screen and (max-width: 560px){
                  padding: 10px ;
   } 

  `,
  card_title: styled.div`
            font-size: 16px;
            font-family: "inter",inherit, Helvetica, sans-serif;
            color: #443e3e;
            margin: 10px 0;
            margin-bottom: 8px;
  `,
  card_desc: styled.div`
  font-size: 13px;
  color: #555;
         @media screen and (max-width: 560px){
        display: none;
   } 

  `,

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
  footer: styled.footer`
  position: fixed;
  margin-top: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #c09a9a;
  padding: 10px;
  `
}