import styled from "styled-components";

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
    gap: 20px;
    @media screen and (max-width: 700px) {
      justify-content: space-between;

    }
  `,
  numeroDoPedido: styled.h4`
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #756f6f;
    font-weight: 600;
  `,
  btnAguadandoPagamento: styled.div`
    background-color: #eeb853;
    color: #fff;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 14px;
  `,

  Image: styled.img`
     width: 80px;
  height: 80px;
  border-radius: 10%;
  object-fit: cover;
  border: 2px solid #ddd;
  `,
  dataPedido: styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
  padding-left: 5px;
`,
  Areaitem: styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
`,
  inforLabel: styled.div`
  display: flex;
  align-items: center;
  text-align:center;
  gap: 10px;

`,
loading:styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  
`,
buttonNext:styled.button`
 color: blue;
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
  `,
  Infor: styled.small`
    font-size: 14px;
    color: #494545;
        letter-spacing: 0.5;
        margin-top: 2px;

  `,

};
