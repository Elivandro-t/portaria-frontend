import styled from "styled-components";
import { MdInbox } from "react-icons/md"; // ícone bonito de "sem itens"

export default {
  container: styled.div`
    background-color: #f2f2f2;
    padding: 20px 0;
    min-height: 100vh;
  `,
  area_pedidos: styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    @media screen and (max-width: 700px) {
     max-width: 700px; 
         padding: 5px;

    }
  `,
  titulo: styled.h1`
    font-size: 22px;
    font-weight: bold;
    font-family:sans-serif;
    margin-bottom: 10px;
    color: var(--cor-titulo);
  `,
  pedidos: styled.section`
    display: flex;
    flex-direction: column; /* Mantém itens um abaixo do outro */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,
  cardItem: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 100%;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  `,
  card_item_header: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  card_item_center: styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap: 20px;
    @media screen and (max-width: 420px) {
      justify-content: space-between;

    }
  `,
  numeroDoPedido: styled.h4`
    font-size: 14px;
    color: #756f6f;
  `,
   data: styled.small`
    font-size: 9px;
    font-family: "inter";
    color: #756f6f;
  `,
  btnAguadandoPagamento: styled.div`
    background-color: #eeb853;
    color: #fff;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 14px;
  `,
  AreaStatus:styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* @media screen and (max-width:560px){
          flex-direction: row-reverse;

    } */
  `,

  Image: styled.img`
     width: 80px;
  height: 80px;
  border-radius: 10%;
  /* object-fit: cover;
  border: 2px solid #ddd; */
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    margin-bottom: 16px;
      object-position: center bottom top;


    @media screen and (min-width: 600px) {
      margin-bottom: 0;
    }
  `,
  dataPedido: styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
  padding-left: 5px;
`,
  Areaitem: styled.div`
  display: flex;
  flex: 1;
  gap: 1px;
  flex-direction: column;
`,
  inforLabel: styled.div`
  display: flex;
  align-items: center;
  text-align:center;
  word-wrap: break-word;
  gap:2px;

`,
loading:styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  
`,
buttonNext:styled.button`
 color: blue;
 background-color:blue;
 cursor: pointer;
 border: 0;
  background: transparent;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  font-size: 16px;
 &:hover{
  color: #8484f5;
  padding: 2px;

 }
 &:active{
    transform: scale(0.97);
    color: #5555ff;       /* muda a cor quando clicado */
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); /* efeito de pressionado */

 }

`,
  Span: styled.span`
    font-size: 14px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 600;
    color:#374151;
    @media screen and (max-width: 560px){
      font-size: 12px;
              letter-spacing: 0.2;

      
    }
  `,
  Infor: styled.small`
    font-size: 13px;
    color: #494545;
        letter-spacing: 0.5;
        margin-top: 2px;
    @media screen and (max-width: 560px){
      font-size: 11px;
              letter-spacing: 0.2;

      
    }

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
  btn:styled.div`
  display: flex;
  justify-content:flex-end;
   right: 1;
   @media screen and (max-width:560px){
    flex: 0;
    padding: 5px;
    
   }
  `,
  sentinela: styled.div`
    width: 100%;
    height: 100px; /* Altura generosa para garantir detecção */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background: transparent;
  `,
  loadingFooter: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-weight: 500;
  `,


};
